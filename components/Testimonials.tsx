"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=800&fit=crop&crop=face",
      content: "Working with this developer was an absolute game-changer. The attention to detail and innovative solutions exceeded our expectations. The project was delivered on time with exceptional quality.",
      rating: 5,
      project: "E-commerce Platform",
      platform: "linkedin"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
      content: "Incredible technical expertise combined with excellent communication skills. The developer understood our vision immediately and brought ideas that enhanced the original concept significantly.",
      rating: 5,
      project: "SaaS Dashboard",
      platform: "twitter"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Design Director",
      company: "Creative Studios",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&crop=face",
      content: "The perfect blend of technical skill and creative thinking. Every interaction was smooth, and the final product was not just functional but beautifully crafted. Highly recommended!",
      rating: 5,
      project: "Portfolio Website",
      platform: "linkedin"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
      content: "Outstanding developer who goes above and beyond. The code quality is exceptional, and the problem-solving approach is methodical and innovative. A true professional.",
      rating: 5,
      project: "Mobile App",
      platform: "twitter"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="h-4 w-4" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            What <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Real feedback from real projects that made a difference
          </motion.p>
        </motion.div>

        {/* Desktop & Mobile: Horizontal Swipeable */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Swipeable Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              animate={{ x: -currentIndex * (typeof window !== 'undefined' && window.innerWidth > 768 ? 600 : 350) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ 
                left: -(testimonials.length - 1) * (typeof window !== 'undefined' && window.innerWidth > 768 ? 600 : 350), 
                right: 0 
              }}
              onDragEnd={(_, { offset }) => {
                const swipeThreshold = 50;
                if (offset.x > swipeThreshold && currentIndex > 0) {
                  prevTestimonial();
                } else if (offset.x < -swipeThreshold && currentIndex < testimonials.length - 1) {
                  nextTestimonial();
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative h-96 rounded-2xl overflow-hidden group flex-shrink-0"
                  style={{ width: typeof window !== 'undefined' && window.innerWidth > 768 ? '580px' : '330px' }}
                >
                  {/* Background Avatar with Blur */}
                  <div className="absolute inset-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={580}
                      height={580}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                  </div>

                  {/* Frosted Glass Quote Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute inset-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col justify-between"
                  >
                    {/* Quote Icon & Platform Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="h-8 w-8 text-blue-400 opacity-80" />
                      {testimonial.platform && (
                        <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-2 border border-blue-400/30">
                          {getPlatformIcon(testimonial.platform)}
                        </div>
                      )}
                    </div>

                    {/* Quote Content */}
                    <div className="flex-1">
                      <p className="text-white text-sm md:text-base leading-relaxed mb-4">
                        {"\"" + testimonial.content + "\""}
                      </p>

                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-blue-400 text-blue-400" />
                        ))}
                      </div>
                    </div>

                    {/* Author Info */}
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                      <p className="text-blue-300 text-xs font-medium">{testimonial.company}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 scale-125'
                    : 'bg-muted hover:bg-blue-400/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-muted"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "3+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};