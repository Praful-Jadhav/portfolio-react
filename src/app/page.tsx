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
            Based in Pune, India | Specializing in scalable AI systems, R&D, and cutting-edge technology solutions.
            Building the future with intelligent systems and innovative architecture. Experienced in JavaScript/Vue.js, React, Next.js, Django (Python), Node.js, Cloud Architecture, TensorFlow, and PyTorch.
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
            {/* Project 1 - MuscleWiki Clone */}
            <div className="glass rounded-xl p-6 transition-all hover:scale-105">
              <h3 className="mb-3 text-xl font-semibold text-primary">MuscleWiki Clone</h3>
              <p className="text-foreground/70">Full-stack fitness application with exercise database, workout tracking, and user authentication. Built with React and Django.</p>
            </div>
            
            {/* Project 2 - Multi-Agent AI System */}
            <div className="glass rounded-xl p-6 transition-all hover:scale-105">
              <h3 className="mb-3 text-xl font-semibold text-primary">Multi-Agent AI System</h3>
              <p className="text-foreground/70">Advanced multi-agent system leveraging TensorFlow and PyTorch for intelligent task automation and decision-making.</p>
            </div>
            
            {/* Project 3 - AI-Powered Tools */}
            <div className="glass rounded-xl p-6 transition-all hover:scale-105">
              <h3 className="mb-3 text-xl font-semibold text-primary">AI-Powered Tools</h3>
              <p className="text-foreground/70">Suite of AI tools for data analysis, natural language processing, and predictive modeling using modern ML frameworks.</p>
            </div>
            
            {/* Project 4 - Portfolio Website */}
            <div className="glass rounded-xl p-6 transition-all hover:scale-105">
              <h3 className="mb-3 text-xl font-semibold text-primary">Portfolio Website</h3>
              <p className="text-foreground/70">Modern, responsive portfolio built with Next.js 14, React, and Tailwind CSS showcasing projects and technical expertise.</p>
            </div>
            
            {/* Project 5 - Full-Stack AI Applications */}
            <div className="glass rounded-xl p-6 transition-all hover:scale-105">
              <h3 className="mb-3 text-xl font-semibold text-primary">Full-Stack AI Applications</h3>
              <p className="text-foreground/70">End-to-end AI applications integrating React frontends with Django/Node.js backends and ML model deployment.</p>
            </div>
            
            {/* Project 6 - Cloud Architecture Solutions */}
            <div className="glass rounded-xl p-6 transition-all hover:scale-105">
              <h3 className="mb-3 text-xl font-semibold text-primary">Cloud Architecture Solutions</h3>
              <p className="text-foreground/70">Scalable cloud infrastructure designs for AI/ML workloads with containerization and microservices architecture.</p>
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
            {['AI/ML', 'Python', 'Django', 'TensorFlow', 'PyTorch', 'JavaScript', 'Vue.js', 'React', 'Next.js', 'Node.js', 'Cloud Architecture', 'Docker', 'Microservices', 'NLP', 'Computer Vision', 'Data Analysis'].map((skill) => (
              <div key={skill} className="glass rounded-lg p-4 text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education & Certifications */}
      <section id="education" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass rounded-xl p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary">Polytechnic</h3>
              <p className="text-foreground/70">Technical education foundation in engineering and technology</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary">MSCIT</h3>
              <p className="text-foreground/70">Maharashtra State Certificate in Information Technology</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary">Tally Certification</h3>
              <p className="text-foreground/70">Professional accounting and business software expertise</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary">Generative AI</h3>
              <p className="text-foreground/70">Advanced certification in Generative AI technologies and applications</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary">Sarthi BSIF</h3>
              <p className="text-foreground/70">Banking and financial services certification</p>
            </div>
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
            Interested in collaborating on AI/ML solutions or discussing innovative technology projects?
            Open to opportunities as a developer and for independent tech ecosystem collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Praful-Jadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              GitHub Profile
            </a>
            <a
              href="#contact"
              className="inline-block glass rounded-lg px-8 py-3 font-medium text-foreground transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </div>
          <p className="mt-6 text-sm text-foreground/60">
            Location: Pune, India (Kharadi area)
          </p>
        </div>
      </section>
    </main>
  )
}