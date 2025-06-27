import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Github, Mail, MessageCircle, Code, Database, Smartphone, Wifi, Server, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    { name: "React.js", level: 85, icon: <Code className="w-4 h-4" /> },
    { name: "Next.js", level: 80, icon: <Server className="w-4 h-4" /> },
    { name: "Node.js", level: 70, icon: <Database className="w-4 h-4" /> },
    { name: "Flutter", level: 70, icon: <Smartphone className="w-4 h-4" /> },
  ]

  const projects = [
    {
      title: "Inventory Management System",
      description: "A comprehensive system for managing inventory with real-time tracking and analytics.",
      technologies: ["React.js", "Node.js", "Database"],
      status: "Completed",
    },
    {
      title: "E-link Marketplace",
      description: "A modern marketplace application connecting buyers and sellers with advanced features.",
      technologies: ["Next.js", "React.js", "API Integration"],
      status: "Completed",
    },
    {
      title: "IoT Projects",
      description: "Various IoT solutions involving networking and hardware integration.",
      technologies: ["IoT", "Networking", "Hardware"],
      status: "In Progress",
    },
  ]

  const expertise = [
    { area: "Software Development", icon: <Code className="w-5 h-5" /> },
    { area: "IoT Solutions", icon: <Wifi className="w-5 h-5" /> },
    { area: "Networking", icon: <Server className="w-5 h-5" /> },
    { area: "System Analysis", icon: <Database className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Software Developer
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
                  ISHIMWE KARANGWA
                  <span className="block text-3xl sm:text-4xl lg:text-5xl text-slate-600 mt-2">Cyrille</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Passionate software developer with 2 years of experience building innovative solutions in web
                  development, IoT, and networking. I love taking on new challenges and creating impactful digital
                  experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://github.com/EngKARANGWA" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/images/cyrille-photo.jpg"
                    alt="Cyrille ISHIMWE KARANGWA"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              I'm a dedicated software developer with expertise across multiple domains, always eager to learn and
              implement cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-slate-600">{item.icon}</div>
                  <h3 className="font-semibold text-slate-900">{item.area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600">My proficiency levels in various technologies and frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-semibold text-slate-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-slate-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">Some of the projects I've worked on and currently developing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
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

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-slate-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Software Developer</h3>
                  <p className="text-slate-600 mb-4">2+ Years of Experience</p>
                  <p className="text-slate-700 leading-relaxed">
                    Specialized in full-stack development with expertise in modern web technologies, IoT solutions, and
                    system analysis. Successfully delivered multiple projects including inventory management systems and
                    marketplace applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-300">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-slate-300" />
                <h3 className="font-semibold mb-2 text-white">Email</h3>
                <Link
                  href="mailto:karangwacyrille@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  karangwacyrille@gmail.com
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-4 text-slate-300" />
                <h3 className="font-semibold mb-2 text-white">WhatsApp</h3>
                <Link
                  href="https://wa.me/250781430333?text=Hi%20Cyrille,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  className="text-slate-300 hover:text-white transition-colors"
                  target="_blank"
                >
                  +250 781 430 333
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6 text-center">
                <Github className="w-8 h-8 mx-auto mb-4 text-slate-300" />
                <h3 className="font-semibold mb-2 text-white">GitHub</h3>
                <Link
                  href="https://github.com/EngKARANGWA"
                  className="text-slate-300 hover:text-white transition-colors"
                  target="_blank"
                >
                  EngKARANGWA
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Cyrille ISHIMWE KARANGWA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
