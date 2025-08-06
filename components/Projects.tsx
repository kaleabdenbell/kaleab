"use client";
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  caseStudySlug: string;
}

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com',
      featured: true,
      caseStudySlug: 'e-commerce-platform'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71',
      tags: ['React', 'Socket.io', 'MongoDB', 'Express'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com',
      featured: true,
      caseStudySlug: 'task-management-app'
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'An intuitive weather dashboard with beautiful visualizations, location-based forecasts, and interactive maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
      tags: ['Vue.js', 'D3.js', 'Weather API', 'CSS3'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com',
      featured: false,
      caseStudySlug: 'weather-dashboard'
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern animations, dark mode support, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com',
      featured: false,
      caseStudySlug: 'portfolio-website'
    },
    {
      id: '5',
      title: 'Learning Platform',
      description: 'An online learning platform with course management, progress tracking, and interactive quizzes.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      tags: ['Next.js', 'Prisma', 'NextAuth', 'Vercel'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com',
      featured: true,
      caseStudySlug: 'learning-platform'
    },
    {
      id: '6',
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with real-time data visualization and reporting features.',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf',
      tags: ['React', 'Chart.js', 'Firebase', 'Material-UI'],
      liveUrl: 'https://demo.com',
      githubUrl: 'https://github.com',
      featured: false,
      caseStudySlug: 'social-media-dashboard'
    }
  ];

  const categories = ['all', 'featured', 'web', 'mobile', 'design'];
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    // Add more filtering logic as needed
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work and creative solutions
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'ghost'}
                onClick={() => setFilter(category)}
                className={`capitalize ${
                  filter === category 
                    ? 'bg-gradient-primary hover:shadow-glow' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              onMouseDown={() => (window.location.href = `/case-study/${project.caseStudySlug}`)}
              key={project.id}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  width={580}
                  height={348}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Case Study Link */}
                <Button 
                  variant="ghost" 
                  className="w-full group/btn"
                  asChild
                >
                  <Link href={`/skill/${project.caseStudySlug}`}>
                    <span>View Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};