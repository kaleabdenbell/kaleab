import { Code, Coffee, Heart, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '25+' },
    { icon: Lightbulb, label: 'Ideas Realized', value: '100+' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Hello! I&apos;m Alex, a passionate developer based in San Francisco.
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I specialize in building exceptional digital experiences with a focus on 
                  <span className="text-primary font-medium"> modern web technologies</span> and 
                  <span className="text-primary font-medium"> user-centered design</span>. 
                  My journey in tech started 5 years ago, and I&apos;ve been loving every moment of it.
                </p>
                
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while brainstorming the 
                  next big idea.
                </p>
                
                <p>
                  I believe in writing clean, maintainable code and creating solutions that not 
                  only work well but also provide delightful user experiences.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies I love working with:</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL', 'AWS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};