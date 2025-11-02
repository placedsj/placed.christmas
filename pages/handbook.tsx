import { Navigation } from '@/components/navigation';
import { SEOHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, User, ChevronRight, Home, Lightbulb, Wrench, Sprout } from 'lucide-react';

export default function HandbookPage() {
  const seoData = {
    title: "Homeowner's Handbook | PLACED - Your Home Our Hands",
    description: "Essential guides and tips for Quispamsis homeowners covering Christmas lighting, electrical work, landscape lighting, and property maintenance.",
    keywords: "homeowner guide quispamsis, home maintenance new brunswick, christmas lights tips, electrical safety, landscape lighting guide",
  };

  const featuredArticles = [
    {
      id: '1',
      title: 'Ultimate Guide to Christmas Light Safety',
      excerpt: 'Essential safety tips for installing and maintaining holiday lighting displays at your Quispamsis home.',
      category: 'Christmas Lights',
      readTime: '8 min',
      author: 'PLACED Team',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      featured: true,
    },
    {
      id: '2',
      title: 'Preparing Your Home for Winter in New Brunswick',
      excerpt: 'Complete checklist for winterizing your property and ensuring safety during the Maritime winter season.',
      category: 'Home Maintenance',
      readTime: '12 min',
      author: 'PLACED Team',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      featured: true,
    },
    {
      id: '3',
      title: 'Energy-Efficient Outdoor Lighting Solutions',
      excerpt: 'How to reduce energy costs while maintaining beautiful landscape lighting year-round.',
      category: 'Landscape Lighting',
      readTime: '6 min',
      author: 'PLACED Team',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      featured: true,
    },
  ];

  const categories = [
    { name: 'Christmas Lights', count: 15, icon: Lightbulb, color: 'bg-holiday-red' },
    { name: 'Home Maintenance', count: 23, icon: Home, color: 'bg-holiday-green' },
    { name: 'Electrical Safety', count: 12, icon: Wrench, color: 'bg-holiday-gold' },
    { name: 'Landscape Lighting', count: 18, icon: Sprout, color: 'bg-blue-600' },
  ];

  const recentArticles = [
    {
      title: 'When to Call a Professional for Electrical Work',
      category: 'Electrical Safety',
      readTime: '5 min',
      date: 'Dec 15, 2024',
    },
    {
      title: 'Gutter Maintenance Before Winter',
      category: 'Home Maintenance',
      readTime: '7 min',
      date: 'Dec 10, 2024',
    },
    {
      title: 'LED vs Traditional Christmas Lights: Cost Comparison',
      category: 'Christmas Lights',
      readTime: '4 min',
      date: 'Dec 5, 2024',
    },
  ];

  return (
    <>
      <SEOHead data={seoData} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-holiday-green to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Homeowner's Handbook
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Your comprehensive guide to home maintenance, safety, and improvement. 
              Expert advice from PLACED - Your Home Our Hands, serving Quispamsis and surrounding areas.
            </p>
            <div className="flex justify-center">
              <Badge className="bg-holiday-gold text-black font-semibold px-4 py-2">
                <BookOpen className="mr-2 h-4 w-4" />
                68+ Helpful Articles
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-holiday-green mb-4">
              Featured Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and essential guides for New Brunswick homeowners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-holiday-red text-white">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-holiday-green mb-3 group-hover:text-holiday-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button className="w-full bg-holiday-green hover:bg-green-800 text-white rounded-full">
                    Read Article
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-holiday-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-holiday-green mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find expert advice organized by topic to help you maintain and improve your home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-holiday-green mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-holiday-green mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay up-to-date with our newest guides and seasonal tips.
            </p>
          </div>
          
          <div className="space-y-6">
            {recentArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-holiday-green mb-2 hover:text-holiday-red transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <Badge variant="outline" className="border-holiday-red text-holiday-red">
                          {article.category}
                        </Badge>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {article.readTime}
                        </div>
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-holiday-red hover:bg-red-700 text-white rounded-full font-semibold">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-holiday-green to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Stay Updated with Seasonal Tips
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get monthly homeowner tips and seasonal reminders delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-holiday-gold"
            />
            <Button className="bg-holiday-red hover:bg-red-700 text-white rounded-full font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}