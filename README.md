# OpenRobotics Learning Lab 🤖

## An Open-Source Robotics Learning Platform

OpenRobotics Lab is a community-driven platform designed to help robotics enthusiasts, students, and professionals learn and master robotics technologies. From beginner tutorials to advanced courses, we provide comprehensive resources for the entire robotics ecosystem.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## 🌟 Features

- **Comprehensive Tutorials**: Step-by-step guides from basic concepts to advanced implementations
- **Curated Books**: Essential reading materials for robotics theory and practice
- **Online Courses**: Links to high-quality robotics courses from top universities and platforms
- **Tools & Platforms**: Essential software and hardware tools for robotics development
- **Community Projects**: Real-world robotics projects with source code and documentation
- **Active Community**: Connect with fellow robotics enthusiasts and experts

## 🚀 Getting Started

### Prerequisites

Choose one of the following options:

#### Option 1: Traditional Setup
- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager
- Git

#### Option 2: Docker Setup
- Docker - [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose (included with Docker Desktop)

### Installation

#### Traditional Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SYED-M-HUSSAIN/openrobotics-lab.git
   cd openrobotics-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application running.

#### Docker Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SYED-M-HUSSAIN/openrobotics-lab.git
   cd openrobotics-lab
   ```

2. **Run with Docker Compose**

   For development:
   ```bash
   docker compose --profile dev up
   ```

   For production:
   ```bash
   docker compose up
   ```

3. **Access the application**
   - Development: `http://localhost:8080`
   - Production: `http://localhost:80`

#### Quick Docker Commands

```bash
# Build and run production
docker compose up --build

# Run in background
docker compose up -d

# View logs
docker compose logs -f

# Stop containers
docker compose down

# Rebuild after changes
docker compose up --build --force-recreate
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite with SWC for lightning-fast compilation
- **Styling**: Tailwind CSS with dark mode support
- **UI Components**: shadcn/ui component library
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React

## 🤝 Contributing

We welcome contributions from the robotics community! Whether you're fixing bugs, adding new features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork the repository**
   Click the "Fork" button at the top right of this repository.

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Add new tutorials, courses, or tools
   - Improve existing content
   - Fix bugs or enhance features
   - Update documentation

4. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   Go to the original repository and click "New Pull Request" 

### Contribution Guidelines

- **Code Style**: Follow the existing code style and conventions
- **Documentation**: Update documentation for any new features
- **Testing**: Test your changes thoroughly before submitting
- **Commit Messages**: Use clear and descriptive commit messages
- **Pull Request Description**: Provide a detailed description of your changes

### Areas for Contribution

#### 📚 Content Contributions
- Add new robotics tutorials
- Submit links to quality courses
- Share useful tools and platforms
- Write case studies or project showcases
- Translate content to other languages

#### 💻 Code Contributions
- Implement new features (search, filtering)
- Improve UI/UX design
- Add animations and interactions
- Optimize performance
- Fix bugs and issues

#### 📖 Documentation
- Improve README and setup guides
- Create API documentation
- Write contribution tutorials
- Add code comments

## 📁 Project Structure

```
openrobotics-lab/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Custom components
│   ├── pages/           # Route components
│   ├── contexts/        # React contexts (theme, etc.)
│   ├── lib/            # Utility functions
│   └── App.tsx         # Main application component
├── public/             # Static assets
├── index.html         # Entry HTML file
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── Dockerfile         # Docker production build
├── docker-compose.yml # Docker orchestration
├── nginx.conf        # Nginx configuration
└── .dockerignore     # Docker ignore patterns
```

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type check
npm run typecheck
```

### Docker Development

The project includes Docker configurations for both development and production environments:

#### Development with Docker
- Hot reload enabled
- Source code mounted as volume
- Runs on port 8080
- Node modules cached in Docker volume

#### Production with Docker
- Multi-stage build for optimized image size
- Nginx serving static files
- Gzip compression enabled
- Security headers configured
- Runs on port 80


### Adding New Content

1. **To add a new tutorial**: Edit `src/pages/Tutorials.tsx`
2. **To add a new course**: Edit `src/pages/Courses.tsx`
3. **To add a new tool**: Edit `src/pages/Tools.tsx`
4. **To add a new book**: Edit `src/pages/Books.tsx`

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please open an issue with:
- Clear description of the bug/feature
- Steps to reproduce (for bugs)
- Expected behavior
- Screenshots (if applicable)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Let's make robotics education accessible to everyone!*
