import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    content: "This platform has completely transformed how our team collaborates. The intuitive design and powerful features have boosted our productivity by 40%.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    initials: "SC"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Engineering Lead",
    company: "InnovateLabs",
    content: "The attention to detail and seamless user experience is remarkable. It's rare to find a tool that's both powerful and enjoyable to use daily.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    initials: "MR"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Design Director",
    company: "CreativeStudio",
    content: "As a designer, I appreciate beautiful interfaces. This exceeds all expectations with its clean design and thoughtful interactions.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    initials: "EW"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Startup Founder",
    company: "NextGen Ventures",
    content: "We've tried dozens of solutions, but nothing comes close to this level of quality and reliability. It's been a game-changer for our startup.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    initials: "DK"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "GrowthCorp",
    content: "The customer support is exceptional, and the platform keeps getting better with each update. It's clear the team really cares about user success.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    initials: "LT"
  },
  {
    id: 6,
    name: "Alex Morgan",
    role: "CTO",
    company: "DataDriven Inc",
    content: "Security and performance are our top priorities, and this platform delivers on both fronts without compromising usability.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    initials: "AM"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real users have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-muted bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Quote */}
                <div className="mb-6">
                  <svg 
                    className="w-8 h-8 text-primary/20 mb-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Join thousands of satisfied users
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className="w-6 h-6 text-yellow-400 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            4.9/5 based on 2,500+ reviews
          </p>
        </div>
      </div>
    </section>
  );
};