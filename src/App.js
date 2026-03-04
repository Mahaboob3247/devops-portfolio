import React from "react";

export default function App() {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-blue-500">
          Mahaboob Shaik
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Cloud & DevOps Engineer | AWS | Linux | CI/CD | Automation
        </p>
        <div className="mt-6">
          <a
            href="https://github.com/Mahaboob3247"
            className="bg-blue-600 px-6 py-3 rounded-xl mr-4 hover:bg-blue-700"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-mahaboob-devops1/"
            className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-gray-700"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">About Me</h2>
        <p className="text-gray-400 leading-7">
          Cloud & DevOps Engineer with 1.3 years of enterprise experience 
          supporting large-scale IT infrastructure at a PwC client location. 
          Strong background in Linux administration, AWS cloud services, 
          incident management, and CI/CD automation using Jenkins and Docker.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-900 px-10">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-10">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-3">Cloud</h3>
            <p>AWS (EC2, IAM, S3), Azure Fundamentals</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">DevOps</h3>
            <p>Jenkins, Docker, CI/CD, Ansible, Vagrant</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Systems</h3>
            <p>Linux (RHEL), Windows Admin, Active Directory, ITIL</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-10">
          DevOps Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-500">
              CI/CD Pipeline on AWS
            </h3>
            <p className="mt-3 text-gray-400">
              Built automated deployment pipeline using Jenkins, Docker, 
              and AWS EC2. Implemented Docker image build, push to registry, 
              and automated deployment to production server.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-500">
              Automated Website Deployment
            </h3>
            <p className="mt-3 text-gray-400">
              Automated HTML application deployment on Apache HTTPD server 
              using shell scripting and configuration management practices.
            </p>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-900 px-10">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-10">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold">
            System Engineer – Unaxo Solutions (Client: PwC)
          </h3>
          <p className="text-gray-400 mt-2">
            Provided enterprise IT support, managed OS installations, 
            handled SLA-based incident resolution, and worked under ITIL 
            service management processes.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-500">Contact</h2>
        <p className="mt-4 text-gray-400">
          shaikmahaboob3247@gmail.com
        </p>
      </section>

    </div>
  );
}