"use client";
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // const titles = [
  //   'Full Stack Developer',
  //   'React Specialist',
  //   'UI/UX Designer',
  //   'Problem Solver'
  // ];

  useEffect(() => {
  const titles = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Designer',
    'Problem Solver'
  ];

  const currentTitle = titles[currentIndex];
  const timeout = setTimeout(() => {
    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, isDeleting ? 50 : 100);

  return () => clearTimeout(timeout);
}, [displayText, currentIndex, isDeleting]);


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="text-muted-foreground">I&apos;m a </span>
            <span className="ml-2 text-primary font-semibold min-w-[300px] text-left">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I transform ideas into innovative web solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};