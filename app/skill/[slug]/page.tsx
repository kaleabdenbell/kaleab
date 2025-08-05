
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Globe, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface SkillPageProps {
  params: { slug: string };
}

const skillsData: Record<
  string,
  {
    title: string;
    description: string;
    skills: { name: string; level: number; description: string }[];
    projects: {
      name: string;
      tech: string[];
      link: string;
      github: string;
    }[];
    certifications: string[];
  }
> = {
  frontend: {
    title: "Frontend Development",
    description:
      "Creating beautiful, responsive, and interactive user interfaces with modern technologies and best practices.",
    skills: [
      {
        name: "React",
        level: 95,
        description:
          "Advanced component architecture, hooks, context, and performance optimization",
      },
      {
        name: "TypeScript",
        level: 90,
        description:
          "Type-safe development with advanced types, generics, and utility types",
      },
      {
        name: "Next.js",
        level: 85,
        description:
          "Server-side rendering, static generation, and full-stack development",
      },
      {
        name: "Tailwind CSS",
        level: 92,
        description: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "JavaScript",
        level: 94,
        description:
          "ES6+, async/await, functional programming, and modern JS features",
      },
      {
        name: "HTML/CSS",
        level: 96,
        description:
          "Semantic HTML, CSS Grid, Flexbox, animations, and accessibility",
      },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        tech: ["React", "TypeScript", "Stripe"],
        link: "#",
        github: "#",
      },
      {
        name: "Portfolio Website",
        tech: ["Next.js", "Tailwind CSS"],
        link: "#",
        github: "#",
      },
    ],
    certifications: [
      "React Developer Certification",
      "Frontend Masters Complete Path",
      "Google Web Fundamentals",
    ],
  },
  backend: {
    title: "Backend Development",
    description:
      "Building robust, scalable server-side applications and APIs with modern backend technologies.",
    skills: [
      {
        name: "Node.js",
        level: 87,
        description: "Express.js, middleware, authentication, and API development",
      },
      {
        name: "Python",
        level: 80,
        description: "Django, Flask, data processing, and automation scripts",
      },
      {
        name: "PostgreSQL",
        level: 85,
        description: "Database design, optimization, queries, and migrations",
      },
      {
        name: "MongoDB",
        level: 82,
        description: "NoSQL database design, aggregation, and performance tuning",
      },
      {
        name: "GraphQL",
        level: 78,
        description: "Schema design, resolvers, and API optimization",
      },
      {
        name: "REST APIs",
        level: 92,
        description: "RESTful design, documentation, testing, and versioning",
      },
    ],
    projects: [
      {
        name: "SaaS API Platform",
        tech: ["Node.js", "PostgreSQL", "Redis"],
        link: "#",
        github: "#",
      },
      {
        name: "Real-time Chat App",
        tech: ["Express.js", "Socket.io", "MongoDB"],
        link: "#",
        github: "#",
      },
    ],
    certifications: [
      "AWS Certified Developer",
      "Node.js Application Development",
      "Database Design Fundamentals",
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    description:
      "Implementing CI/CD pipelines, cloud infrastructure, and deployment automation for scalable applications.",
    skills: [
      {
        name: "AWS",
        level: 83,
        description:
          "EC2, S3, Lambda, RDS, CloudFormation, and serverless architecture",
      },
      {
        name: "Docker",
        level: 80,
        description: "Containerization, multi-stage builds, and orchestration",
      },
      {
        name: "CI/CD",
        level: 75,
        description: "GitHub Actions, Jenkins, automated testing, and deployment",
      },
      {
        name: "Kubernetes",
        level: 70,
        description: "Container orchestration, pods, services, and deployments",
      },
      {
        name: "Terraform",
        level: 65,
        description:
          "Infrastructure as Code, cloud provisioning, and automation",
      },
    ],
    projects: [
      {
        name: "Microservices Infrastructure",
        tech: ["AWS", "Docker", "Kubernetes"],
        link: "#",
        github: "#",
      },
      {
        name: "CI/CD Pipeline",
        tech: ["GitHub Actions", "Terraform", "AWS"],
        link: "#",
        github: "#",
      },
    ],
    certifications: [
      "AWS Solutions Architect",
      "Docker Certified Associate",
      "Kubernetes Administrator",
    ],
  },
  motion: {
    title: "Motion & Animation",
    description:
      "Creating engaging user experiences through smooth animations, micro-interactions, and motion design.",
    skills: [
      {
        name: "Framer Motion",
        level: 82,
        description: "React animations, gestures, and complex motion systems",
      },
      {
        name: "GSAP",
        level: 78,
        description: "High-performance animations and timeline management",
      },
      {
        name: "CSS Animations",
        level: 88,
        description:
          "Keyframes, transitions, transforms, and performance optimization",
      },
      {
        name: "Three.js",
        level: 70,
        description: "3D graphics, WebGL, and interactive experiences",
      },
    ],
    projects: [
      {
        name: "Interactive Landing Page",
        tech: ["Framer Motion", "React", "GSAP"],
        link: "#",
        github: "#",
      },
      {
        name: "3D Portfolio Showcase",
        tech: ["Three.js", "WebGL", "React"],
        link: "#",
        github: "#",
      },
    ],
    certifications: [
      "Motion Design Fundamentals",
      "Three.js Journey Complete",
      "GSAP Master Class",
    ],
  },
};

function SkillNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Skill Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The skill you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/skills">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Skills
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const skillData = skillsData[slug];

  if (!skillData) {
    return <SkillNotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6">
            <Link
              href="/skills"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Skills
            </Link>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {skillData.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {skillData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Skills Breakdown */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {skillData.skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="p-6 hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {skill.level}%
                    </Badge>
                  </div>

                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden mb-4">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>

                  <p className="text-muted-foreground">{skill.description}</p>
                </Card>
              ))}
            </div>

            {/* Projects Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {skillData.projects.map((project) => (
                  <Card
                    key={project.name}
                    className="p-6 hover:shadow-elegant transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">
                Certifications & Learning
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {skillData.certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="group">
                  Let&apos;s Work Together
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
