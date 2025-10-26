"use client";

import { useState } from "react";
import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { halwais } from "@/data/halwais";
import { useSearchParams } from "next/navigation";

const Halwais = () => {


 const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "All");

  const cities = ["All", "Delhi", "Ghaziabad", "Noida", "Greater Noida", "Meerut"];
  const categories = ["All", "Local Events", "Weddings/Engagement", "Corporate events"];

  const filteredHalwais = halwais.filter((halwai) => {
    const cityMatch = selectedCity === "All" || halwai.city === selectedCity;
    const categoryMatch = selectedCategory === "All" || halwai.categories.includes(selectedCategory);
    return cityMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-accent to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 animate-fade-up">
            Find Your Perfect Halwai
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-up">
            Browse through our verified halwais and caterers across Delhi NCR
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {/* City Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Filter by City</h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Button
                    key={city}
                    variant={selectedCity === city ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCity(city)}
                    className="transition-all"
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredHalwais.length}</span> halwai
              {filteredHalwais.length !== 1 && "s"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHalwais.map((halwai) => (
              <Card key={halwai.id} className="overflow-hidden hover:shadow-warm transition-all duration-300 animate-fade-up">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold mb-1">{halwai.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin size={14} className="mr-1 text-primary" />
                        {halwai.city}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded">
                      <Star size={16} className="fill-primary text-primary" />
                      <span className="font-semibold text-sm">{halwai.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{halwai.description}</p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {halwai.specialties.slice(0, 3).map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 py-3 border-t border-border">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {halwai.experience}
                    </div>
                    <div>Min: {halwai.minOrder}</div>
                    <div>{halwai.reviews} reviews</div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {halwai.categories.map((cat, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/919811820494?text=Hi, I'm interested in ${halwai.name} for my event`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full shadow-warm">Contact on WhatsApp</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredHalwais.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">No halwais found matching your criteria</p>
              <Button
                onClick={() => {
                  setSelectedCity("All");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
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

export default Halwais;
