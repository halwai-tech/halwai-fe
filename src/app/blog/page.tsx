"use client";

import { useState } from "react";
import Link from "next/link"; // <-- Next.js Link
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogs";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Sweet Stories", "Halwai Highlights", "Festival Specials"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-accent to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 animate-fade-up">
            Our Blog
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-up">
            Stories, insights, and traditions from the world of Indian sweets and catering
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> post{filteredPosts.length !== 1 && 's'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-warm transition-all duration-300 animate-fade-up group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-muted-foreground mb-3 gap-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">By {post.author}</span>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">No posts found in this category</p>
              <Button onClick={() => setSelectedCategory("All")}>
                View All Posts
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
