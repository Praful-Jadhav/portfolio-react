export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Praful Jadhav</span>
          </h1>
          <p className="mb-8 text-xl text-muted sm:text-2xl">
            AI/ML Solution Architect
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground/80">
            Specializing in scalable AI systems, R&D, and cutting-edge technology solutions.
            Building the future with intelligent systems and innovative architecture.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="glass rounded-lg px-8 py-3 font-medium text-foreground transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project cards will be added here */}
            <div className="glass rounded-xl p-6 transition-all hover:scale-105">
              <h3 className="mb-3 text-xl font-semibold text-primary">AI Project 1</h3>
              <p className="text-foreground/70">Description of cutting-edge AI/ML project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {['AI/ML', 'Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'Node.js', 'Cloud Architecture'].map((skill) => (
              <div key={skill} className="glass rounded-lg p-4 text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="mb-8 text-lg text-foreground/70">
            Interested in collaborating or discussing innovative AI solutions?
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  )
}