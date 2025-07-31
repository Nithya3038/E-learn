const mockCourse = [
  {
    id: "1",
    title: "React Basics",
    description: "Intro to React, JSX, props and state.",
    details: "Learn the fundamentals of React including components, props, state, and hooks.",
    videoURL: "https://www.youtube.com/embed/SqcY0GlETPk",
    instructor: "Jane Doe",
    thumbnail: "https://img.youtube.com/vi/SqcY0GlETPk/hqdefault.jpg",
    progress: 70,
    completed: false
  },
  {
    id: "2",
    title: "JavaScript Essentials",
    description: "Learn variables, functions, loops and ES6.",
    details: "Master JavaScript basics with hands-on examples and real-world exercises.",
    videoURL: "https://www.youtube.com/embed/W6NZfCO5SIk",
    instructor: "John Smith",
    thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    progress: 80,
    completed: false
  },
  {
    id: "3",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for modern UI.",
    details: "Build beautiful responsive user interfaces using Tailwind CSS classes and layout utilities.",
    videoURL: "https://www.youtube.com/embed/6biMWgD6_JY",
    instructor: "Emily Zhang",
    thumbnail: "https://img.youtube.com/vi/6biMWgD6_JY/hqdefault.jpg",
    progress: 100,
    completed: true
  },
  {
    id: "4",
    title: "Node.js Fundamentals",
    description: "Backend development with Node.js.",
    details: "Understand core Node.js concepts like modules, streams, and building HTTP servers.",
    videoURL: "https://www.youtube.com/embed/TlB_eWDSMt4",
    instructor: "Raj Patel",
    thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
    progress: 0,
    completed: false
  },
  {
    id: "5",
    title: "Express.js for APIs",
    description: "Build REST APIs using Express.js.",
    details: "Create robust RESTful APIs and route handling using Express and middleware.",
    videoURL: "https://www.youtube.com/embed/-MTSQjw5DrM",
    instructor: "Sarah Lee",
    thumbnail: "https://img.youtube.com/vi/-MTSQjw5DrM/hqdefault.jpg",
    progress: 20,
    completed: false
  },
  {
    id: "6",
    title: "MongoDB for Beginners",
    description: "NoSQL database fundamentals.",
    details: "Learn CRUD operations, schema design, and data modeling in MongoDB.",
    videoURL: "https://www.youtube.com/embed/c2M-rlkkT5o",
    instructor: "Ahmed Khan",
    thumbnail: "https://img.youtube.com/vi/c2M-rlkkT5o/hqdefault.jpg",
    progress: 60,
    completed: false
  },
  {
    id: "7",
    title: "HTML & CSS Crash Course",
    description: "Start building websites from scratch.",
    details: "Covers semantic HTML, styling with CSS, and responsive design with flexbox/grid.",
    videoURL: "https://www.youtube.com/embed/UB1O30fR-EE&t=28s",
    instructor: "Nina Patel",
    thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
    progress: 100,
    completed: true
  },
  {
    id: "8",
    title: "Advanced JavaScript",
    description: "Deep dive into JS concepts.",
    details: "Understand closures, promises, async/await, this keyword, and ES6+ features.",
    videoURL: "https://www.youtube.com/embed/R9I85RhI7Cg",
    instructor: "Tom Gregory",
    thumbnail: "https://img.youtube.com/vi/R9I85RhI7Cg/hqdefault.jpg",
    progress: 35,
    completed: false
  },
  {
    id: "9",
    title: "Git & GitHub",
    description: "Version control made simple.",
    details: "Learn Git basics, branching, commits, merging and pushing to GitHub repositories.",
    videoURL: "https://www.youtube.com/embed/S7XpTAnSDL4",
    instructor: "Anna Lee",
    thumbnail: "https://img.youtube.com/vi/S7XpTAnSDL4/hqdefault.jpg",
    progress: 55,
    completed: false
  },
  {
    id: "10",
    title: "TypeScript Essentials",
    description: "Typed JavaScript for scalable apps.",
    details: "Understand types, interfaces, generics, and working with TypeScript in React.",
    videoURL: "https://www.youtube.com/embed/ahCwqrYpIuM",
    instructor: "Chris Miller",
    thumbnail: "https://img.youtube.com/vi/ahCwqrYpIuM/hqdefault.jpg",
    progress: 0,
    completed: false
  },
  {
    id: "11",
    title: "React Router",
    description: "Client-side routing in React.",
    details: "Build single-page applications using React Router with dynamic routes and navigation.",
    videoURL: "https://www.youtube.com/embed/943D7U74_sQ",
    instructor: "Monica Green",
    thumbnail: "https://img.youtube.com/vi/943D7U74_sQ/hqdefault.jpg",
    progress: 10,
    completed: false
  },
  {
    id: "12",
    title: "Redux for State Management",
    description: "Manage global state in React apps.",
    details: "Implement Redux, actions, reducers, and Redux Toolkit in real-world apps.",
    videoURL:"https://www.youtube.com/embed/1rP_yHj2dqg",
    instructor: "Samuel Osei",
    thumbnail: "https://img.youtube.com/vi/1rP_yHj2dqg/hqdefault.jpg",
    progress: 25,
    completed: false
  },
  {
    id: "13",
    title: "Firebase Integration",
    description: "Real-time backend with Firebase.",
    details: "Authenticate users, store data in Firestore, and deploy React apps with Firebase.",
    videoURL:"https://www.youtube.com/embed/9kRgVxULbag&t=282s",
    instructor: "Linda Jones",
    thumbnail: "https://img.youtube.com/vi/9kRgVxULbag/hqdefault.jpg",
    progress: 65,
    completed: false
  },
  {
    id: "14",
    title: "Next.js Crash Course",
    description: "React framework for production.",
    details: "Server-side rendering, static site generation, API routes, and file-based routing with Next.js.",
    videoURL:"https://www.youtube.com/embed/Zq5fmkH0T78",
    instructor: "Kevin Wu",
    thumbnail: "https://img.youtube.com/vi/Zq5fmkH0T78/hqdefault.jpg",
    progress: 70,
    completed: false
  },
  {
    id: "15",
    title: "Building Full-Stack MERN App",
    description: "React, Node, Express, and MongoDB.",
    details: "Combine frontend and backend technologies to build and deploy a complete web application.",
    videoURL:"https://www.youtube.com/embed/O3BUHwfHf84",
    instructor: "Alex Rivera",
    thumbnail: "https://img.youtube.com/vi/O3BUHwfHf84/hqdefault.jpg",
    progress: 90,
    completed: false
  }
];
export default mockCourse;
