// ============================================================
// PROJECTS DATA — MANETH NANAYAKKARA
// ============================================================

export const projects = [
  {
    id: 1,
    number: "01",
    slug: "driving-school",
    title: "Driving School Management System",
    subtitle: "Web & Mobile Applications",
    type: "Full-Stack Web + Mobile",
    featured: true,
    description:
      "A comprehensive full-stack Driving School Management System consisting of a web application and cross-platform mobile application, both powered by a shared Node.js backend.",
    longDescription:
      "Developed a full-stack Driving School Management System to digitize and streamline driving school operations. The system includes a React.js web platform for administrative and instructor management and a React Native mobile application for students — all sharing a single Node.js/MongoDB backend deployed on Railway.",
    problem:
      "Driving schools typically rely on manual scheduling, paper records and phone-based communication, leading to booking conflicts, payment tracking errors and poor visibility into student progress.",
    solution:
      "A unified web and mobile platform with role-based dashboards for Admins, Instructors and Students, providing real-time booking, payment tracking and progress visibility across devices.",
    technologies: [
      "React.js",
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Railway",
    ],
    architecture: ["MVC", "3-Tier Architecture", "RESTful APIs"],
    roles: ["Admin", "Instructor", "Student"],
    features: [
      "Role-based dashboards for Admin, Instructor and Student",
      "User registration and authentication",
      "Student and instructor management",
      "Lesson booking and booking management",
      "Payment tracking and history",
      "RESTful API for frontend-backend communication",
      "Cross-platform mobile application (iOS & Android)",
      "Backend deployed on Railway",
    ],
    contribution:
      "Designed and developed the full-stack architecture, implemented all RESTful APIs, built role-based dashboards on the web app, and developed the React Native mobile application connected to the shared backend.",
    githubUrl: "", // TODO: Add GitHub URL
    liveUrl: "",   // TODO: Add live demo URL if available
    color: "from-blue-600/20 to-cyan-600/20",
    accentColor: "#38bdf8",
    tags: ["React.js", "Node.js", "MongoDB", "React Native"],
  },
  {
    id: 2,
    number: "02",
    slug: "course-registration",
    title: "Student Course Registration System",
    subtitle: "Java / Spring Boot Application",
    type: "Full-Stack Web Application",
    featured: false,
    description:
      "A full-stack course registration system built with Java and Spring Boot, supporting role-based dashboards for administrators, lecturers and students.",
    longDescription:
      "Developed a full-stack Student Course Registration System using Java and Spring Boot, following MVC and 3-tier architectural principles. The system provides secure, role-based access for three user types, with comprehensive course management, timetable scheduling and enrollment tracking capabilities.",
    problem:
      "Manual course registration processes are error-prone, time-consuming and provide limited visibility into enrollment status for students, lecturers and administrators.",
    solution:
      "A structured Spring Boot application with role-based access control, delivering tailored dashboards and functionality for each user type, backed by a well-integrated MySQL database.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "REST APIs",
      "MySQL",
      "IntelliJ IDEA",
    ],
    architecture: ["MVC", "3-Tier Architecture", "REST APIs"],
    roles: ["Administrator", "Lecturer", "Student"],
    features: [
      "Role-based dashboards for Administrator, Lecturer and Student",
      "Student registration and management",
      "Course enrollment and management",
      "Timetable scheduling",
      "Enrollment status tracking",
      "CRUD operations for students, courses, schedules and registrations",
      "MySQL database integration with structured data management",
      "Input validation and exception handling",
      "Authentication-based access control",
    ],
    contribution:
      "Designed and developed the complete system using Java and Spring Boot, implemented all CRUD operations, role-based access control, and integrated MySQL for persistent data management.",
    githubUrl: "", // TODO: Add GitHub URL
    liveUrl: "",
    color: "from-violet-600/20 to-purple-600/20",
    accentColor: "#a78bfa",
    tags: ["Java", "Spring Boot", "MySQL", "MVC"],
  },
  {
    id: 3,
    number: "03",
    slug: "nic-issuing",
    title: "Web-Based NIC Issuing Service",
    subtitle: "Java / Spring Boot Government Service",
    type: "Full-Stack Web Application",
    featured: false,
    description:
      "A web-based NIC (National Identity Card) issuing service built with Java and Spring Boot, featuring role-based dashboards and a complete application review workflow.",
    longDescription:
      "Developed a web-based NIC Issuing Service simulating a government digital service platform. The system enables applicants to submit NIC applications and documents online, while officers review and process applications and administrators manage the overall system — all through secure, role-based dashboards.",
    problem:
      "Traditional NIC issuing processes require physical visits, paper forms and manual tracking, leading to delays, lost documents and limited transparency for applicants.",
    solution:
      "A secure web platform allowing online application submission, document upload, workflow-based review by officers, and real-time status tracking for applicants — backed by Spring Boot and SQL.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "SQL",
      "REST APIs",
      "IntelliJ IDEA",
    ],
    architecture: ["MVC", "3-Tier Architecture", "REST APIs"],
    roles: ["Admin", "Officer", "Applicant"],
    features: [
      "Authentication and role-based dashboards",
      "NIC application submission by applicants",
      "Document submission and management",
      "Application review workflow for officers",
      "Application status tracking",
      "CRUD operations with validation",
      "Secure database management with SQL",
      "Exception handling and input validation",
    ],
    contribution:
      "Designed the full-stack architecture, implemented authentication, role-based access, the complete application-review workflow, and integrated SQL for secure data management.",
    githubUrl: "", // TODO: Add GitHub URL
    liveUrl: "",
    color: "from-emerald-600/20 to-teal-600/20",
    accentColor: "#34d399",
    tags: ["Java", "Spring Boot", "SQL", "Spring MVC"],
  },
  {
    id: 4,
    number: "04",
    slug: "arduino-learning-tool",
    title: "Interactive Learning Tool for Children",
    subtitle: "Arduino / Embedded Systems Project",
    type: "Embedded Systems / Educational Technology",
    featured: false,
    description:
      "An interactive educational device built on Arduino to help children improve color recognition through real-time sensor feedback using LEDs, audio, display and motor outputs.",
    longDescription:
      "Developed an interactive learning tool for children using an Arduino Uno microcontroller and a variety of sensors and actuators. The device detects colors and objects in real-time, providing multi-modal feedback through LEDs, a buzzer, an LCD/OLED display and a servo motor to create an engaging educational experience.",
    problem:
      "Young children often struggle with color recognition and benefit from hands-on, multi-sensory learning experiences that are difficult to deliver through traditional tools.",
    solution:
      "A standalone hardware device that detects colors and proximity using sensors, provides instant multi-modal feedback (visual, audio, movement), and makes learning interactive and engaging for children.",
    technologies: [
      "Arduino Uno",
      "Arduino IDE",
      "Embedded C/C++",
      "Color Sensor",
      "HC-SR04 Ultrasonic Sensor",
      "IR Sensor",
      "LEDs",
      "Buzzer",
      "LCD/OLED Display",
      "Servo Motor",
    ],
    architecture: ["Input → Process → Output"],
    roles: [],
    features: [
      "Real-time color detection using color sensor",
      "Object and distance sensing with HC-SR04 ultrasonic sensor",
      "IR sensor for object detection",
      "LED visual feedback system",
      "Buzzer audio feedback",
      "LCD/OLED display output",
      "Servo motor movement feedback",
      "Interactive color-learning experience for children",
      "Tested for sensor accuracy, response time and usability",
    ],
    contribution:
      "Designed and assembled the hardware circuit on a breadboard, wrote all Embedded C/C++ firmware in Arduino IDE, integrated all sensors and actuators, and conducted usability testing with children.",
    githubUrl: "", // TODO: Add GitHub URL
    liveUrl: "",
    color: "from-orange-600/20 to-amber-600/20",
    accentColor: "#fb923c",
    tags: ["Arduino", "Embedded C/C++", "Sensors", "Hardware"],
  },
];
