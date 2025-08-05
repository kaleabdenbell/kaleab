import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Alex Johnson
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer & UI/UX Designer passionate about creating 
              exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Let&apos;s Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:alex@example.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Currently available for freelance work
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alex Johnson. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-accent" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};