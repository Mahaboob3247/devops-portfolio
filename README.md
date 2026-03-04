<<<<<<< HEAD
# 🚀 End-to-End CI/CD Pipeline for DevOps Portfolio Application

## 📌 Project Overview

This project demonstrates a production-style CI/CD pipeline for a React-based portfolio application.  
The pipeline automates build, containerization, image push, and deployment using Jenkins and Docker on AWS EC2.

The objective of this project is to simulate a real-world DevOps workflow used in enterprise environments.

---

## 🏗️ Architecture Flow

Developer → GitHub → Jenkins → Docker Build → DockerHub → EC2 Deployment → Live Application

---

## 🛠️ Tech Stack

### Application
- React (Vite / CRA)
- Nginx (Production server)

### DevOps Tools
- Git
- GitHub
- Jenkins
- Docker
- DockerHub

### Cloud Platform
- AWS EC2 (Ubuntu)

---

## ⚙️ CI/CD Pipeline Stages

The Jenkins pipeline performs the following automated steps:

1. Checkout source code from GitHub
2. Build Docker image
3. Tag Docker image
4. Push image to DockerHub
5. Stop existing container (if running)
6. Deploy new container automatically

Pipeline is defined using a Jenkinsfile (Declarative Pipeline).

---

## 🐳 Docker Implementation

Multi-stage Docker build:

- Stage 1: Node build environment
- Stage 2: Nginx production server

Application is served on port 80 inside container.

---

## 📂 Project Structure
devops-portfolio/
│
├── src/
├── public/
├── Dockerfile
├── Jenkinsfile
├── package.json
└── README.md


---

## 🚀 How to Run Locally

### Clone Repository
git clone https://github.com/YOUR\_USERNAME/devops-portfolio.git

cd devops-portfolio


### Build Docker Image

docker build -t devops-portfolio .


### Run Container

docker run -p 8080:80 devops-portfolio

Access application:

http://localhost:8080

---

## ☁️ AWS Deployment

- Jenkins installed on EC2
- Docker installed on EC2
- Security Group ports open:
  - 22 (SSH)
  - 8080 (Jenkins)
  - 80 (Application)

Application accessible via:

http://EC2_PUBLIC_IP

---

## 🔐 Security Considerations

- DockerHub credentials stored securely in Jenkins Credentials Manager
- No hardcoded secrets in repository
- CI/CD pipeline uses environment variables

---

## 📈 Future Enhancements

- Terraform for Infrastructure as Code
- Kubernetes deployment
- Blue-Green deployment strategy
- GitHub Webhook auto trigger
- SSL with Nginx reverse proxy
- Monitoring using Prometheus & Grafana

---

## 🏆 Resume Highlight

Designed and implemented an end-to-end CI/CD pipeline using Jenkins, Docker, and AWS EC2 with automated containerized deployment and DockerHub integration.

---

## 👨‍💻 Author

Mahaboob Shaik  
Cloud & DevOps Engineer  
AWS | Linux | CI/CD | Automation

GitHub: https://github.com/YOUR_USERNAME  
LinkedIn: https://www.linkedin.com/in/shaik-mahaboob-devops1/
=======
# devops-portfolio
devops-portfolio
>>>>>>> 29a5775 (Initial commit)
