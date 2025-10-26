"use client";

import { use } from "react";
import { useParams } from "next/navigation";
import Link from "next/link"; // <-- Next.js Link
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import WhatsAppButton from "../../../components/WhatsAppButton";
import { blogPosts } from "../../../data/blogs";

const BlogPost = () => {
  const params = useParams();
  const id = params?.id;
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Button>
          </Link>

          {/* Category Badge */}
          <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {post.readTime}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-8 animate-fade-in">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-xl border border-border">
            <h3 className="text-2xl font-display font-bold mb-3">
              Ready to plan your next celebration?
            </h3>
            <p className="text-muted-foreground mb-4">
              Connect with our verified halwais and make your event memorable
            </p>
            <Link href="/halwais">
              <Button size="lg" className="shadow-warm">
                Find Halwais
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
