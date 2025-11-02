import React, { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { SEOHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Lightbulb, MessageCircle, Star, Clock, ArrowRight } from 'lucide-react';

export default function AskAProPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    question: '',
    urgency: 'normal'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🎄 Question Submitted!",
      description: "Our Christmas lighting experts will respond within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      question: '',
      urgency: 'normal'
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const expertTips = [
    {
      title: "Best LED Colors for Curb Appeal",
      tip: "Warm white LEDs provide the most elegant and versatile look for any home style. Multi-colored displays work best on traditional or farmhouse-style homes.",
      category: "Design"
    },
    {
      title: "Power Requirements",
      tip: "Most residential displays need 1-3 outdoor outlets. We can install additional GFCI outlets if needed for larger displays.",
      category: "Electrical"
    },
    {
      title: "Weather Protection",
      tip: "All our installations use commercial-grade, weatherproof connections rated for Maritime winter conditions including ice storms.",
      category: "Installation"
    },
    {
      title: "Energy Efficiency",
      tip: "LED Christmas lights use 80% less energy than incandescent bulbs and last 25 times longer - saving money all season.",
      category: "Cost Savings"
    }
  ];

  const commonQuestions = [
    {
      question: "How early should I book for Christmas?",
      answer: "October-November is ideal for prime time slots. We begin installations in mid-November.",
      icon: Clock
    },
    {
      question: "Do you provide lights or should I buy them?",
      answer: "We provide professional-grade LED lights as part of our service - you own them after the first season!",
      icon: Lightbulb
    },
    {
      question: "What's included in take-down and storage?",
      answer: "We carefully remove all lights, test them, and store in our climate-controlled facility until next year.",
      icon: CheckCircle
    },
    {
      question: "Can you work with my existing decorations?",
      answer: "Absolutely! We can incorporate your wreaths, garland, and other decorations into the overall design.",
      icon: Star
    }
  ];

  const seoData = {
    title: "Ask a Pro - Christmas Light Installation Experts | PLACED Santa's Helpers",
    description: "Get expert advice from professional Christmas light installers in Quispamsis, NB. Free consultation on holiday lighting design, installation, and maintenance.",
    keywords: "christmas light expert advice, holiday lighting consultation, Quispamsis lighting professionals, Christmas display planning"
  };

  return (
    <>
      <SEOHead data={seoData} />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-b from-christmas-cream to-white">
        {/* Hero Section */}
        <section className="section-padding pt-32 pb-16 bg-gradient-to-br from-rich-burgundy via-deep-forest to-rich-burgundy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container-professional relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
                🎄 Ask a Pro 🎄
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-200">
                YOUR CHRISTMAS, OUR HANDS - Get Expert Advice from Santa's Helpers
              </p>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Our professional Christmas lighting experts in Quispamsis are here to answer your questions about holiday displays, installation, and everything festive!
              </p>
            </div>
          </div>
        </section>

        {/* Expert Tips Section */}
        <section className="section-padding bg-white">
          <div className="container-professional">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-rich-burgundy mb-4">
                ✨ Expert Tips from Santa's Helpers ✨
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional insights from years of Christmas light installations across Southern New Brunswick
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {expertTips.map((tip, index) => (
                <Card key={index} className="border-2 border-holiday-green hover:border-holiday-red transition-colors duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-deep-forest border-deep-forest">
                        {tip.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-rich-burgundy text-xl">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{tip.tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ask Your Question Form */}
        <section className="section-padding bg-christmas-cream">
          <div className="container-professional">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-rich-burgundy mb-4">
                  🎅 Ask Your Christmas Lighting Question 🎄
                </h2>
                <p className="text-lg text-gray-600">
                  Get personalized advice from our Christmas lighting professionals
                </p>
              </div>

              <Card className="border-2 border-holiday-gold shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-deep-forest to-holiday-green text-white text-center">
                  <CardTitle className="text-2xl">Free Expert Consultation</CardTitle>
                  <CardDescription className="text-yellow-200">
                    Phone: (506) 650-2122 | Email: yourchristmas@placed.life
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-rich-burgundy font-semibold">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-holiday-green"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-rich-burgundy font-semibold">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-holiday-green"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-rich-burgundy font-semibold">Phone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(506) 650-2122"
                          className="border-2 border-gray-200 focus:border-holiday-green"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyType" className="text-rich-burgundy font-semibold">Property Type</Label>
                        <select
                          id="propertyType"
                          value={formData.propertyType}
                          onChange={(e) => handleInputChange('propertyType', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-holiday-green focus:outline-none"
                        >
                          <option value="">Select property type</option>
                          <option value="residential-small">Small Residential (Under 2000 sq ft)</option>
                          <option value="residential-large">Large Residential (2000+ sq ft)</option>
                          <option value="commercial">Commercial Property</option>
                          <option value="multi-family">Multi-Family Building</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="urgency" className="text-rich-burgundy font-semibold">Response Priority</Label>
                      <select
                        id="urgency"
                        value={formData.urgency}
                        onChange={(e) => handleInputChange('urgency', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-holiday-green focus:outline-none"
                      >
                        <option value="normal">Normal (24-48 hours)</option>
                        <option value="urgent">Urgent (Same day)</option>
                        <option value="planning">Planning ahead (1 week)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="question" className="text-rich-burgundy font-semibold">Your Question *</Label>
                      <Textarea
                        id="question"
                        value={formData.question}
                        onChange={(e) => handleInputChange('question', e.target.value)}
                        required
                        placeholder="Tell us about your Christmas lighting project, questions about our services, or any holiday decoration concerns..."
                        rows={4}
                        className="border-2 border-gray-200 focus:border-holiday-green"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-holiday-red to-rich-burgundy hover:from-rich-burgundy hover:to-holiday-red text-white font-bold py-4 text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      🎄 Send My Question to Santa's Helpers! 🎅
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section className="section-padding bg-white">
          <div className="container-professional">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-rich-burgundy mb-4">
                🎄 Frequently Asked Questions 🎄
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quick answers to common Christmas lighting questions from Quispamsis homeowners
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonQuestions.map((item, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-holiday-gold transition-colors duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-holiday-green bg-opacity-10">
                        <item.icon className="h-6 w-6 text-holiday-green" />
                      </div>
                      <CardTitle className="text-lg text-rich-burgundy">{item.question}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-deep-forest to-rich-burgundy text-white">
          <div className="container-professional text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-8 text-yellow-200">
              From consultation to installation, we handle everything so you can enjoy the magic of Christmas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-holiday-red hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/booking'}
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-rich-burgundy font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = 'tel:5066502122'}
              >
                📞 Call (506) 650-2122
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}