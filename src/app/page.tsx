
import Link from "next/link";
import { ArrowRight, Star, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

import { halwais } from "@/data/halwais";
import { blogPosts } from "@/data/blogs";

const Home = () => {
  const featuredHalwais = halwais.slice(0, 3);
  const recentBlogs = blogPosts.slice(0, 3);

  console.log("Client Id:",process.env.GOOGLE_CLIENT_ID);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90 z-10"></div>
        <Image
          src="/assets/hero-sweets.jpg"
          alt="Traditional Indian Sweets"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              🎉 Currently Serving in Delhi NCR
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Connect with Trusted Local{" "}
              <span className="text-accent">Halwais</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Experience personalized catering services where every meal is
              tailored to your taste and budget. From traditional sweets to
              grand wedding spreads, we connect you with the finest halwais for
              unforgettable celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/halwais">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-warm text-lg px-8 py-6 w-full sm:w-auto group"
                >
                  Find Halwais{" "}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://wa.me/919811820494"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Get Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Happy Customers", value: "10,000+" },
              { icon: Award, label: "Verified Halwais", value: "50+" },
              { icon: Star, label: "Average Rating", value: "4.8" },
              { icon: Clock, label: "Years of Trust", value: "15+" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we have the
              perfect catering solution for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings & Engagements",
                description:
                  "Grand catering for your special day with customized menus, live counters, and authentic traditional dishes",
                image: "/assets/wedding-catering.jpg",
                link: "/halwais?category=Weddings/Engagement",
              },
              {
                title: "Corporate Events",
                description:
                  "Professional catering solutions for meetings, conferences, and corporate celebrations with diverse menu options",
                image: "/assets/corporate-catering.jpg",
                link: "/halwais?category=Corporate events",
              },
              {
                title: "Local Events",
                description:
                  "Perfect for birthdays, anniversaries, and family gatherings with home-style cooking and traditional flavors",
                image: "/assets/local-events.jpg",
                link: "/halwais?category=Local Events",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-warm transition-all duration-300 animate-fade-up"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="relative w-full h-64 overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button variant="outline" className="group/btn">
                      Explore{" "}
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Halwais */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Halwais</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our top-rated halwais trusted by thousands of satisfied
              customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredHalwais.map((halwai) => (
              <Card
                key={halwai.id}
                className="overflow-hidden hover:shadow-warm transition-all duration-300 animate-scale-in"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-1">
                        {halwai.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {halwai.city}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded">
                      <Star size={16} className="fill-primary text-primary" />
                      <span className="font-semibold text-sm">
                        {halwai.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {halwai.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {halwai.specialties.slice(0, 3).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>⏱️ {halwai.experience}</span>
                    <span>👥 {halwai.minOrder}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/halwais">
              <Button size="lg" className="shadow-warm">
                View All Halwais <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Latest from Our <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sweet stories, halwai highlights, and festival specials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {recentBlogs.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-warm transition-all duration-300 animate-fade-up"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
                  >
                    Read More <ArrowRight size={14} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button size="lg" variant="outline">
                View All Posts <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
