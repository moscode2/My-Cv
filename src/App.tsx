import React from 'react';
import { Mail, Globe, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <header className="bg-blue-700 text-white px-8 py-6">
          <h1 className="text-3xl font-bold mb-2">Moses Onyango</h1>
          <p className="text-xl text-blue-100 mb-4">Full Stack Developer</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a 
              href="https://wa.me/254110626022" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
              title="WhatsApp: (555) 123-4567"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="mailto:moisesmoses002@gmail.com" 
              className="text-blue-100 hover:text-white transition-colors"
              title="Email: moisesmoses002@gmail.com"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/moses-onyango-007459298/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/moscode2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://my-portfolio-amber-three-37.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
              title="Portfolio Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-8 py-6">
          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-700 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Frontend Technologies</h3>
                <p className="text-gray-700">HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Vue.js, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Backend Technologies</h3>
                <p className="text-gray-700">Node.js, Express.js, Python, Django, REST APIs</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Databases & Cloud</h3>
                <p className="text-gray-700"> PostgreSQL, MySQL, AWS, Docker,  Firebase, Supabase</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Development Tools</h3>
                <p className="text-gray-700">Git, GitHub, VS Code, Webpack, Vite, Jest</p>
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
                  <h3 className="font-bold text-gray-800">Junior Full Stack Developer</h3>
                  <p className="text-blue-700 font-medium">CodSoft Limited</p>
                </div>
                <span className="text-gray-600 text-sm">January 2025 - July 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Assisted in developing and maintaining web applications using React.js and Node.js.</li>
                <li>Built responsive user interfaces with HTML, CSS, Tailwind CSS, and JavaScript/TypeScript.</li>
                <li>Collaborated with senior developers in code reviews, debugging, and feature deployment.</li>
                <li>Gained experience in Git/GitHub version control and Agile project management tools.</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">FrontEnd Developer</h3>
                  <p className="text-blue-700 font-medium">Safety Plus Consulting Limited-Rongai</p>
                </div>
                <span className="text-gray-600 text-sm">May 2024 - August 2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Designed and implemented responsive web pages using HTML, CSS, Tailwind CSS, and JavaScript.</li>
                <li>Optimized website performance and ensured cross-browser compatibility.</li>
                <li>Worked closely with designers to translate wireframes into functional web pages.</li>
                <li>Used Git/GitHub for version control and participated in Agile development sprints.</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">Graphics Designer</h3>
                  <p className="text-blue-700 font-medium">Digital Agency Pro</p>
                </div>
                <span className="text-gray-600 text-sm">January 2019 - May 2020</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Created visually appealing designs for logos, social media posts, and marketing materials using Adobe Photoshop, Illustrator, and Canva</li>
                <li>Collaborated with clients to understand brand identity and translate ideas into engaging visuals.</li>
                <li>Delivered projects on time while maintaining high quality and creativity.</li>
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
                <h3 className="font-bold text-gray-800">Budget Buddy-Financial Guidance</h3>
                <a href="https://budgetbuddy-mu.vercel.app/" className="text-blue-700 text-sm hover:underline">Live Demo</a>
              </div>
              <p className="text-gray-700 mb-2">
                Budget Buddy – A personal finance tracking web app that helps users monitor expenses, set savings goals, and visualize spending patterns through interactive charts and real-time updates.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tech Stack:</strong> React.js, Node.js, Socket.io, MongoDB, Typscript.
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">Task Management Web App</h3>
                <a href="https://github.com/mosocode2/Task Managemet App" className="text-blue-700 text-sm hover:underline">GitHub</a>
              </div>
              <p className="text-gray-700 mb-2">
                Real-time web app that helps in managing schedule of the task you want to perfom.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tech Stack:</strong> Next.js, TypeScript, Chart.js, PostgreSQL, Coinbase API
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">Family Website</h3>
                <a href="https://rajore-family.vercel.app" className="text-blue-700 text-sm hover:underline">Live Demo</a>
              </div>
              <p className="text-gray-700 mb-2">
                This is a family website,online family
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tech Stack:</strong> HTML,CSS and Javascript
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
                <h3 className="font-bold text-gray-800">Diploma In Science in Computer Science</h3>
                <p className="text-blue-700 font-medium">The Cooperative University of Kenya,Kenya</p>
                <p className="text-gray-600 text-sm">Graduated: December 2025</p>
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
                  <strong>Web Development</strong>
                  <br />
                  <span className="text-sm text-gray-600">Codsoft Limited - 2024</span>
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
