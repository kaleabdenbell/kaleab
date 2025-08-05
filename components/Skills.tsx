"use client"
import { useState, useEffect, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Settings,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');




  const skillCategories = useMemo(() => [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Code2,
      color: 'bg-primary',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 94 },
        { name: 'HTML/CSS', level: 96 }
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Database,
      color: 'bg-accent',
      skills: [
        { name: 'Node.js', level: 87 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 78 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: Cloud,
      color: 'bg-secondary',
      skills: [
        { name: 'AWS', level: 83 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'Terraform', level: 65 }
      ]
    },
    {
      id: 'motion',
      title: 'Motion',
      icon: Smartphone,
      color: 'bg-primary',
      skills: [
        { name: 'Framer Motion', level: 82 },
        { name: 'GSAP', level: 78 },
        { name: 'CSS Animations', level: 88 },
        { name: 'Three.js', level: 70 }
      ]
    }
  ], []);
  useEffect(() => {
  const interval = setInterval(() => {
    setSelectedCategory(current => {
      const currentIndex = skillCategories.findIndex(cat => cat.id === current);
      const nextIndex = (currentIndex + 1) % skillCategories.length;
      return skillCategories[nextIndex].id;
    });
  }, 4000);

  return () => clearInterval(interval);
}, [skillCategories]);


  const selectedCategoryData = skillCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my expertise across different domains
          </p>
        </div>

        {/* Circular Category Selection */}
        <div className="relative mx-auto mb-16 w-80 h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full border-2 border-muted opacity-30"></div>
          
          {skillCategories.map((category, index) => {
            const angle = (index * 90) - 45; // 90 degrees apart, starting at -45
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`absolute w-20 h-20 md:w-24 md:h-24 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 ${
                  selectedCategory === category.id 
                    ? `${category.color} shadow-glow scale-110` 
                    : 'bg-card border-2 border-muted hover:border-primary'
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <category.icon className={`h-6 w-6 md:h-8 md:w-8 ${
                    selectedCategory === category.id ? 'text-white' : 'text-foreground'
                  }`} />
                  <span className={`text-xs md:text-sm font-medium mt-1 ${
                    selectedCategory === category.id ? 'text-white' : 'text-foreground'
                  }`}>
                    {category.title}
                  </span>
                </div>
              </button>
            );
          })}
          
          {/* Center circle */}
          <div className="absolute inset-1/2 w-16 h-16 bg-gradient-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <Settings className="h-6 w-6 text-white animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </div>

        {/* Selected Category Skills */}
        {selectedCategoryData && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <selectedCategoryData.icon className="h-8 w-8 text-primary" />
                {selectedCategoryData.title} Development
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {selectedCategoryData.skills.map((skill, index) => (
                <Card key={skill.name} className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                    <Badge variant="secondary" className="text-sm">
                      {skill.level}%
                    </Badge>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden mb-4">
                    <div 
                      className={`h-full ${selectedCategoryData.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href={`/skills/${selectedCategory}`}>
                <Button size="lg" className="group">
                  Learn More About {selectedCategoryData.title}
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};