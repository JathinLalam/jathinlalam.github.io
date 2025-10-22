import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Calendar, Award, Code, Database, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Engineer | Golang Developer | Backend Enthusiast';

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    
    // Typing animation
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const workExperience = [
    {
      company: 'eBay (via Cprime)',
      role: 'Cyber Security Engineer',
      duration: 'Current Position',
      location: 'Bangalore, Karnataka, India',
      description: 'Working on cybersecurity initiatives and threat detection systems.',
      technologies: ['Security', 'Threat Detection', 'Risk Assessment']
    },
    {
      company: 'Netcracker Technology',
      role: 'Software Engineer',
      duration: 'Previous Role',
      location: 'Bangalore, Karnataka, India',
      description: 'Developed and maintained enterprise software solutions.',
      technologies: ['Java', 'Spring Boot', 'Microservices']
    },
    {
      company: 'Netcracker Technology',
      role: 'Junior Software Engineer',
      duration: 'Entry Level',
      location: 'Bangalore, Karnataka, India',
      description: 'Started career in software development with focus on backend systems.',
      technologies: ['Java', 'SQL', 'REST APIs']
    }
  ];

  const professionalProjects = [
    {
      title: 'SPOG Platform',
      description: 'Scalable platform for operations and governance with advanced monitoring capabilities.',
      technologies: ['Go', 'Kubernetes', 'Docker', 'PostgreSQL'],
      link: 'https://github.com/JathinLalam'
    },
    {
      title: 'NDO Sync',
      description: 'Network data optimization synchronization system for enterprise environments.',
      technologies: ['Go', 'Redis', 'gRPC', 'MongoDB'],
      link: 'https://github.com/JathinLalam'
    },
    {
      title: '2-Level Authentication System',
      description: 'Secure multi-factor authentication system with biometric integration.',
      technologies: ['Go', 'JWT', 'OAuth2', 'PostgreSQL'],
      link: 'https://github.com/JathinLalam'
    },
    {
      title: 'Encryption-Based Messaging App',
      description: 'End-to-end encrypted messaging application with real-time communication.',
      technologies: ['Go', 'WebSocket', 'AES', 'React'],
      link: 'https://github.com/JathinLalam'
    }
  ];

  const personalProjects = [
    {
      title: 'Loctubers Website',
      description: 'Location-based content creator platform connecting local influencers.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/JathinLalam'
    },
    {
      title: 'Geo Locator',
      description: 'Advanced geolocation service with mapping and tracking capabilities.',
      technologies: ['Go', 'PostGIS', 'Redis', 'Docker'],
      link: 'https://github.com/JathinLalam'
    },
    {
      title: 'Product Tracking System',
      description: 'Comprehensive product lifecycle tracking and inventory management system.',
      technologies: ['Go', 'PostgreSQL', 'REST API', 'Docker'],
      link: 'https://github.com/JathinLalam'
    },
    {
      title: 'Exchange Rate Information',
      description: 'Real-time currency exchange rate monitoring and alert system.',
      technologies: ['Go', 'Redis', 'WebSocket', 'Chart.js'],
      link: 'https://github.com/JathinLalam'
    },
    {
      title: 'Stream Engine',
      description: 'High-performance data streaming engine for real-time analytics.',
      technologies: ['Go', 'Apache Kafka', 'InfluxDB', 'Grafana'],
      link: 'https://github.com/JathinLalam'
    }
  ];

  const skills = [
    { name: 'Go/Golang', level: 90, category: 'Backend' },
    { name: 'Java', level: 85, category: 'Backend' },
    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'JavaScript/TypeScript', level: 75, category: 'Frontend' },
    { name: 'React', level: 70, category: 'Frontend' },
    { name: 'PostgreSQL', level: 85, category: 'Database' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'Redis', level: 75, category: 'Database' },
    { name: 'Docker', level: 85, category: 'DevOps' },
    { name: 'Kubernetes', level: 75, category: 'DevOps' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'Microservices', level: 85, category: 'Architecture' }
  ];

  const education = [
    {
      degree: 'B.E. in Computer Science',
      institution: 'SDM College of Engineering and Technology',
      year: 'Graduated',
      description: 'Comprehensive computer science education with focus on software engineering principles.'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Sri Chaitanya College of Education',
      year: 'Completed',
      description: 'Strong foundation in mathematics and science.'
    },
    {
      degree: 'Secondary Education',
      institution: 'High School',
      year: '94% Aggregate',
      description: 'Excellent academic performance with distinction.'
    }
  ];

  const certificates = [
    {
      title: 'PCAP – Programming in Python',
      issuer: 'Cisco',
      year: '2023',
      description: 'Professional certification in Python programming and development.'
    },
    {
      title: 'LearnCodeOnline Bootcamp',
      issuer: 'LearnCodeOnline',
      year: '2022',
      description: 'Intensive full-stack development bootcamp completion.'
    },
    {
      title: 'AI Fundamentals',
      issuer: 'Technology Institute',
      year: '2023',
      description: 'Comprehensive course covering NLP, ML, DL, Chatbots, Neural Networks, and AI Ethics.'
    }
  ];

  return (
    <div className="min-h-screen animated-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold portfolio-text-gradient">
              Jathin Lalam
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Home</button>
              <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Experience</button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Projects</button>
              <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Skills</button>
              <button onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Education</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="portfolio-section">
        <div className="portfolio-container text-center">
          <div className="fade-in">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 portfolio-text-gradient">
                Jathin Lalam
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
                <span className="typing-animation">{typedText}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-5 h-5" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mb-12">
              <Button asChild className="portfolio-button-primary">
                <a href="https://github.com/JathinLalam" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button asChild className="portfolio-button-accent">
                <a href="https://www.linkedin.com/in/jathin-lalam-0044b8194/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
                <a href="mailto:jathinlalam@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="portfolio-card">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Backend Expert</h3>
                  <p className="text-muted-foreground">Specialized in Go, Java, and scalable backend architectures</p>
                </CardContent>
              </Card>
              <Card className="portfolio-card">
                <CardContent className="p-6 text-center">
                  <Database className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-2">Database Design</h3>
                  <p className="text-muted-foreground">Expert in PostgreSQL, MongoDB, and data optimization</p>
                </CardContent>
              </Card>
              <Card className="portfolio-card">
                <CardContent className="p-6 text-center">
                  <Server className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">DevOps & Cloud</h3>
                  <p className="text-muted-foreground">Proficient in Docker, Kubernetes, and AWS deployment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="portfolio-section">
        <div className="portfolio-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-text-gradient">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey in software engineering and cybersecurity
            </p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className={`portfolio-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.role}</CardTitle>
                      <CardDescription className="text-lg text-primary font-semibold">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="portfolio-section">
        <div className="portfolio-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-text-gradient">
              Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of professional and personal development work
            </p>
          </div>

          {/* Professional Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center portfolio-text-accent-gradient fade-in">
              Professional Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalProjects.map((project, index) => (
                <Card key={index} className="portfolio-card fade-in group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                      <Button asChild size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center portfolio-text-accent-gradient fade-in">
              Personal Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalProjects.map((project, index) => (
                <Card key={index} className="portfolio-card fade-in group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span>{project.title}</span>
                      <Button asChild size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-accent/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="portfolio-section">
        <div className="portfolio-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-text-gradient">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise across the full development stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Backend', 'Frontend', 'Database', 'DevOps', 'Cloud', 'Architecture'].map((category) => (
              <Card key={category} className="portfolio-card fade-in">
                <CardHeader>
                  <CardTitle className="text-xl portfolio-text-accent-gradient">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="portfolio-section">
        <div className="portfolio-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-text-gradient">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="portfolio-card fade-in">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center portfolio-text-accent-gradient fade-in">
              Certificates & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="portfolio-card fade-in">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-accent" />
                      <div>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <CardDescription className="text-primary font-semibold">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-section">
        <div className="portfolio-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-text-gradient">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities in software engineering and backend development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="portfolio-card fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:jathinlalam@gmail.com" className="text-primary hover:underline">
                        jathinlalam@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/jathin-lalam-0044b8194/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">GitHub</h4>
                      <a 
                        href="https://github.com/JathinLalam" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View my code
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="portfolio-card fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Let's Work Together</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    I'm always interested in discussing new opportunities, challenging projects, 
                    and innovative solutions in backend development and cybersecurity.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="portfolio-button-primary w-full">
                      <a href="mailto:jathinlalam@gmail.com?subject=Let's%20Connect&body=Hi%20Jathin,%0A%0AI'd%20like%20to%20discuss...">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button asChild className="portfolio-button-accent w-full">
                      <a href="https://www.linkedin.com/in/jathin-lalam-0044b8194/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
                      <a href="https://github.com/JathinLalam" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        View GitHub Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <Globe className="w-4 h-4" />
            <span>© 2025 Jathin Lalam | Built using React, TypeScript & Tailwind CSS</span>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/JathinLalam" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jathin-lalam-0044b8194/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:jathinlalam@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;