"use client";
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  Send, 
  Calendar,
  MessageCircle,
  Coffee,
  Rocket
} from 'lucide-react';
import { toast } from "sonner"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Drop me a line anytime',
      value: 'alex@example.com',
      action: 'mailto:alex@example.com'
    },
    {
      icon: Phone,
      title: 'Call Me',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a free consultation',
      value: 'calendly.com/alex',
      action: 'https://calendly.com'
    },
    {
      icon: MessageCircle,
      title: 'Let\'s Chat',
      description: 'Quick questions & ideas',
      value: 'Telegram/Discord',
      action: '#'
    }
  ];

  const projectTypes = [
    { icon: Rocket, label: 'New Project', color: 'bg-primary' },
    { icon: Coffee, label: 'Collaboration', color: 'bg-secondary' },
    { icon: MessageCircle, label: 'Consultation', color: 'bg-accent' },
    { icon: Mail, label: 'Just Saying Hi', color: 'bg-muted' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast("Thanks for reaching out. I'll get back to you soon!");
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: ''
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in touch
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={method.title}
                    className="p-4 hover:shadow-elegant transition-all duration-300 hover:scale-105 group cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <method.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <p className="text-sm font-medium text-primary">{method.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Project Types */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                What type of project are you thinking about?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <div
                    key={type.label}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                      formData.projectType === type.label
                        ? 'border-primary bg-primary/10'
                        : 'border-transparent bg-muted/50 hover:border-primary/30'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, projectType: type.label }))}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`p-1 ${type.color} rounded`}>
                        <type.icon className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-medium">{type.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};