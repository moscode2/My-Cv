import React from 'react';
import { Mail, Phone, Globe, Github, Linkedin, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <header className="bg-blue-700 text-white px-8 py-6">
          <h1 className="text-3xl font-bold mb-2">John Smith</h1>
          <p className="text-xl text-blue-100 mb-4">Full Stack Developer</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>john.smith@email.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/johnsmith</span>
            </div>
            <div className="flex items-center gap-1">
              <Github className="w-4 h-4" />
              <span>github.com/johnsmith</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>johnsmith.dev</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </header>

        <div className="px-8 py-6">
          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-700 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Experienced Full Stack Developer with 5+ years developing scalable web applications using modern technologies. 
              Proven track record of delivering high-quality solutions that increased user engagement by 40% and reduced load times by 60%. 
              Strong problem-solving abilities with expertise in both front-end user experience and back-end architecture. 
              Passionate about clean code, performance optimization, and collaborative development practices.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-700 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Frontend Technologies</h3>
                <p className="text-gray-700">HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Vue.js, Tailwind CSS, Bootstrap, Sass</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Backend Technologies</h3>
                <p className="text-gray-700">Node.js, Express.js, Python, Django, REST APIs, GraphQL, Microservices Architecture</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Databases & Cloud</h3>
                <p className="text-gray-700">MongoDB, PostgreSQL, MySQL, Redis, AWS, Docker, Kubernetes, Firebase, Supabase</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Development Tools</h3>
                <p className="text-gray-700">Git, GitHub, VS Code, Webpack, Vite, Jest, Cypress, Agile/Scrum, CI/CD Pipelines</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-700 pb-1">
              Professional Experience
            </h2>
            
            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">Senior Full Stack Developer</h3>
                  <p className="text-blue-700 font-medium">TechCorp Solutions</p>
                </div>
                <span className="text-gray-600 text-sm">March 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Led development of customer portal serving 10,000+ users, improving user satisfaction by 35%</li>
                <li>Architected and implemented microservices infrastructure reducing deployment time by 50%</li>
                <li>Mentored 3 junior developers and established code review processes improving code quality metrics by 40%</li>
                <li>Optimized database queries and caching strategies, reducing API response times by 60%</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">Full Stack Developer</h3>
                  <p className="text-blue-700 font-medium">StartupXYZ</p>
                </div>
                <span className="text-gray-600 text-sm">June 2020 - February 2022</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Built responsive e-commerce platform from scratch, generating $2M+ in annual revenue</li>
                <li>Implemented real-time chat system using WebSocket technology, increasing user engagement by 45%</li>
                <li>Developed automated testing suite achieving 90% code coverage and reducing bugs by 65%</li>
                <li>Collaborated with design team to implement pixel-perfect UI components using React and Tailwind CSS</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">Junior Web Developer</h3>
                  <p className="text-blue-700 font-medium">Digital Agency Pro</p>
                </div>
                <span className="text-gray-600 text-sm">January 2019 - May 2020</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Developed 15+ client websites using WordPress, HTML/CSS, and JavaScript</li>
                <li>Implemented SEO best practices resulting in 25% average increase in organic traffic</li>
                <li>Created custom WordPress plugins and themes, reducing development time by 30%</li>
                <li>Maintained and updated existing client websites ensuring 99.9% uptime</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-700 pb-1">
              Key Projects
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">TaskFlow - Project Management Tool</h3>
                <a href="https://taskflow-demo.com" className="text-blue-700 text-sm hover:underline">Live Demo</a>
              </div>
              <p className="text-gray-700 mb-2">
                Full-featured project management application with real-time collaboration, file sharing, and team analytics dashboard.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tech Stack:</strong> React.js, Node.js, Socket.io, MongoDB, AWS S3, JWT Authentication
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">CryptoTracker - Cryptocurrency Dashboard</h3>
                <a href="https://github.com/johnsmith/cryptotracker" className="text-blue-700 text-sm hover:underline">GitHub</a>
              </div>
              <p className="text-gray-700 mb-2">
                Real-time cryptocurrency tracking platform with portfolio management, price alerts, and advanced charting features.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tech Stack:</strong> Next.js, TypeScript, Chart.js, Redis, PostgreSQL, Coinbase API
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">EcoShop - Sustainable E-commerce Platform</h3>
                <a href="https://ecoshop-demo.netlify.app" className="text-blue-700 text-sm hover:underline">Live Demo</a>
              </div>
              <p className="text-gray-700 mb-2">
                E-commerce platform focusing on sustainable products with carbon footprint calculator and eco-friendly shipping options.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tech Stack:</strong> Vue.js, Express.js, Stripe API, Docker, GraphQL, Supabase
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-700 pb-1">
                Education
              </h2>
              <div className="mb-3">
                <h3 className="font-bold text-gray-800">Bachelor of Science in Computer Science</h3>
                <p className="text-blue-700 font-medium">University of California, Berkeley</p>
                <p className="text-gray-600 text-sm">Graduated: May 2018</p>
                <p className="text-gray-700 text-sm mt-1">
                  Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering
                </p>
              </div>
            </section>

            {/* Certifications & Awards */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-700 pb-1">
                Certifications & Awards
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>AWS Certified Solutions Architect</strong>
                  <br />
                  <span className="text-sm text-gray-600">Amazon Web Services - 2023</span>
                </li>
                <li>
                  <strong>Google Cloud Professional Developer</strong>
                  <br />
                  <span className="text-sm text-gray-600">Google Cloud - 2022</span>
                </li>
                <li>
                  <strong>Employee of the Year</strong>
                  <br />
                  <span className="text-sm text-gray-600">TechCorp Solutions - 2023</span>
                </li>
                <li>
                  <strong>Hackathon Winner - Best Full Stack App</strong>
                  <br />
                  <span className="text-sm text-gray-600">SF TechWeek - 2022</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;