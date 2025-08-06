"use client";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar,
  User,
  Target,
  Lightbulb,
  Code,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  duration: string;
  role: string;
  client: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  problem: {
    title: string;
    description: string;
    challenges: string[];
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
  };
  techStack: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  uxProcess: {
    research: string;
    wireframing: string;
    prototyping: string;
    testing: string;
  };
  responsiveness: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  results: {
    metrics: Array<{ label: string; value: string; change: string }>;
    feedback: string[];
  };
  learnings: string[];
  nextSteps: string[];
}

const caseStudies: Record<string, CaseStudyData> = {
  'e-commerce-platform': {
    id: 'e-commerce-platform',
    title: 'Modern E-Commerce Platform',
    subtitle: 'Transforming online shopping experience with seamless design and powerful functionality',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    overview: 'A comprehensive e-commerce platform built from the ground up, featuring modern design principles, secure payment processing, and an intuitive admin dashboard. The platform serves over 10,000 active users and processes thousands of transactions monthly.',
    duration: '4 months',
    role: 'Lead Full Stack Developer & UI/UX Designer',
    client: 'TechStyle Retail',
    liveUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Figma'],
    problem: {
      title: 'Outdated Shopping Experience',
      description: 'The client\'s existing e-commerce platform was built on legacy technology, resulting in poor user experience, slow loading times, and difficulty in managing inventory and orders.',
      challenges: [
        'Legacy codebase causing slow performance and frequent crashes',
        'Poor mobile experience with low conversion rates',
        'Complex and unintuitive admin interface',
        'Lack of real-time inventory management',
        'Security vulnerabilities in payment processing'
      ]
    },
    solution: {
      title: 'Modern, Scalable Platform',
      description: 'We designed and developed a completely new platform using modern technologies, focusing on performance, user experience, and scalability.',
      approach: [
        'Conducted thorough user research and competitor analysis',
        'Created detailed wireframes and interactive prototypes',
        'Implemented responsive design with mobile-first approach',
        'Built robust backend API with real-time capabilities',
        'Integrated secure payment processing with Stripe',
        'Developed comprehensive admin dashboard',
        'Implemented automated testing and CI/CD pipeline'
      ]
    },
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query'],
      backend: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT Authentication'],
      tools: ['Figma', 'AWS', 'Docker', 'Jest', 'Cypress', 'Stripe API']
    },
    uxProcess: {
      research: 'Conducted user interviews with 25 existing customers and analyzed competitor platforms to understand pain points and opportunities.',
      wireframing: 'Created low-fidelity wireframes for all major user flows, focusing on simplified navigation and clear product discovery.',
      prototyping: 'Developed interactive prototypes in Figma to test user flows and gather feedback before development.',
      testing: 'Performed usability testing with 15 users and A/B tested key conversion elements to optimize the experience.'
    },
    responsiveness: {
      desktop: 'Rich, immersive experience with detailed product views, advanced filtering, and seamless checkout process.',
      tablet: 'Optimized layout for touch interactions with easy navigation and streamlined product browsing.',
      mobile: 'Mobile-first design with thumb-friendly navigation, quick product search, and one-tap checkout options.'
    },
    results: {
      metrics: [
        { label: 'Page Load Time', value: '1.2s', change: '75% faster' },
        { label: 'Mobile Conversion Rate', value: '4.8%', change: '+180%' },
        { label: 'User Satisfaction', value: '4.7/5', change: '+65%' },
        { label: 'Admin Efficiency', value: '90%', change: '+120%' }
      ],
      feedback: [
        '"The new platform is incredibly fast and intuitive. Our customers love the shopping experience!" - Marketing Director',
        '"Managing inventory and orders is now a breeze. The admin dashboard saves us hours every day." - Operations Manager',
        '"The mobile experience is outstanding. We\'ve seen a significant increase in mobile sales." - CEO'
      ]
    },
    learnings: [
      'Importance of thorough user research in driving design decisions',
      'Performance optimization significantly impacts conversion rates',
      'Real-time features enhance both user and admin experiences',
      'Mobile-first approach is crucial for e-commerce success'
    ],
    nextSteps: [
      'Implement AI-powered product recommendations',
      'Add social commerce features',
      'Develop mobile app version',
      'Integrate with additional payment providers'
    ]
  }
  // Add more case studies here
};
export default async function caseStudySlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }
  const caseStudy = slug ? caseStudies[slug] : null;
      if (!caseStudy) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
              <Button onClick={() => window.location.href = '/'}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </div>
          </div>
        );
      }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/'}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {caseStudy.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-primary hover:shadow-glow" asChild>
                  <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Image
                height={400}
                width={600}
                src={caseStudy.heroImage} 
                alt={caseStudy.title}
                className="w-full rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Duration</h3>
              </div>
              <p className="text-muted-foreground">{caseStudy.duration}</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">My Role</h3>
              </div>
              <p className="text-muted-foreground">{caseStudy.role}</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Target className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Client</h3>
              </div>
              <p className="text-muted-foreground">{caseStudy.client}</p>
            </Card>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problem */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-foreground">{caseStudy.problem.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {caseStudy.problem.description}
              </p>
              
              <h4 className="font-semibold mb-4 text-foreground">Key Challenges:</h4>
              <ul className="space-y-2">
                {caseStudy.problem.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Solution */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">{caseStudy.solution.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {caseStudy.solution.description}
              </p>
              
              <h4 className="font-semibold mb-4 text-foreground">Our Approach:</h4>
              <ul className="space-y-2">
                {caseStudy.solution.approach.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Technology <span className="bg-gradient-primary bg-clip-text text-transparent">Stack</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Frontend</h3>
              </div>
              <div className="space-y-2">
                {caseStudy.techStack.frontend.map((tech) => (
                  <Badge key={tech} variant="secondary" className="mr-2 mb-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-secondary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Backend</h3>
              </div>
              <div className="space-y-2">
                {caseStudy.techStack.backend.map((tech) => (
                  <Badge key={tech} variant="secondary" className="mr-2 mb-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Tools & Services</h3>
              </div>
              <div className="space-y-2">
                {caseStudy.techStack.tools.map((tech) => (
                  <Badge key={tech} variant="secondary" className="mr-2 mb-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Project <span className="bg-gradient-primary bg-clip-text text-transparent">Results</span>
          </h2>
          
          {/* Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {caseStudy.results.metrics.map((metric, index) => (
              <Card key={metric.label} className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                  {metric.change}
                </Badge>
              </Card>
            ))}
          </div>
          
          {/* Feedback */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-foreground">Client Feedback</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.results.feedback.map((feedback, index) => (
                <Card key={index} className="p-6">
                  <p className="text-muted-foreground italic">&quot;{feedback}&quot;</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to start your project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your ideas to life with modern technology and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:shadow-glow" asChild>
              <Link href="/#contact">
                Start a Project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

