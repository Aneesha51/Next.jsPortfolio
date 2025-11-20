"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Profile from "../../public/profile.png";
import { Code, Smartphone, Rocket, Users } from "lucide-react";
import projects from "./data/projects";

export default function Home() {
  const router = useRouter();

   const skills = [
    {
      title: "Java Development",
      desc: "Building robust applications and backend logic with Java, focusing on clean, maintainable code.",
    },
    {
      title: "Web Development",
      desc: "Creating responsive, user-friendly web applications using React, Next.js, Tailwind CSS, and Firebase.",
    },
    {
      title: "Mobile Development",
      desc: "Developing cross-platform mobile apps with React Native (Expo) to deliver seamless user experiences.",
    },
    {
      title: "Agile & SDLC",
      desc: "Experienced across the Software Development Life Cycle (SDLC) and thriving in Agile, collaborative environments.",
    },
    {
      title: "Problem Solving",
      desc: "Strong analytical problem-solving skills, with a focus on creating practical, impactful solutions.",
    },
  ];

 


  return (
    <main>
      {/* Hero Section */}
      <div id="home" className="flex items-center justify-center py-20 px-5">
        <div className="w-full max-w-xl text-center space-y-5">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src={Profile}
              alt="Profile image"
              width={202}
              height={197}
              className="rounded-full shadow-lg"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold">Aneesha Ashwari Rangan</h1>

          {/* Role */}
          <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
            Developer
          </p>

          {/* Short Intro */}
          <p className="text-lg text-gray-600 leading-relaxed">
            I’m a passionate developer with experience in building responsive web
            and mobile applications. I enjoy transforming designs into functional,
            user-friendly solutions using modern technologies like React, React
            Native, and Java.
          </p>

          {/* Contact Button */}
          <button
            onClick={() => router.push("#contact")}
            className="px-6 py-2 border rounded-full font-medium text-gray-700 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:text-white transition"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-600">
          Hi, I’m{" "}
          <span className="font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
            Aneesha
          </span>
          , a developer with a passion for creating user-friendly, responsive web
          and mobile applications. I enjoy turning ideas into seamless digital
          experiences using{" "}
          <span className="font-medium">
            Java, JavaScript, React, React Native (Expo), Tailwind CSS, Firebase,
            and Next.js
          </span>
          .
        </p>

        <p className="text-lg leading-relaxed text-gray-600">
          With experience across the{" "}
          <span className="font-medium">Software Development Life Cycle (SDLC)</span>,
          I thrive in <span className="font-medium">Agile environments</span>,
          where collaboration, problem-solving, and adaptability are key. Beyond
          coding, I value communication, teamwork, and continuous learning, always
          looking for new ways to grow and contribute.
        </p>

        <p className="text-lg leading-relaxed text-gray-600">
          When I’m not building projects, you’ll probably find me exploring new
          design trends, experimenting with fresh technologies, or brainstorming
          creative solutions to everyday problems. My goal is simple: to craft
          impactful digital solutions that make life easier and more enjoyable for
          users.
        </p>
      </div>

      <div id="service" >
         <div className="max-w-5xl mx-auto px-6 py-16 ">
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
        What I Do
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition p-5 rounded-2xl ">
            <div>
              <div className="flex items-center mb-4">
                {index === 0 && <Code className="text-blue-500 mr-2" />}
                {index === 1 && <Rocket className="text-blue-500 mr-2" />}
                {index === 2 && <Smartphone className="text-blue-500 mr-2" />}
                {index === 3 && <Users className="text-blue-500 mr-2" />}
                {index === 4 && <Code className="text-blue-500 mr-2" />}
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-gray-600">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>


       <section className="max-w-6xl mx-auto px-6 py-12" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((projects, idx) => (
          <div key={idx} className="shadow-md hover:shadow-lg transition rounded-2xl">
            <div className="h-48 w-full relative">
              <Image
              src={projects.image || Profile}
              alt={projects.title}
              fill
              style={{ objectFit: "fill" }}
              className="rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{projects.title}</h3>
              <p className="text-gray-600 mb-3">{projects.desc}</p>
              <p className="text-sm text-gray-500 mb-4">⚡ {projects.tech}</p>
              <button variant="outline" className="rounded-full">
                <a href={projects.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-center mt-10">
          <button  className="px-6 py-2 border rounded-full font-medium text-gray-700 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:text-white transition">
            View More
          </button>
        </div>
      </div>
    </section>


    <section className="max-w-6xl mx-auto px-6 py-12" id="contact">
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
        Get In Touch
        </h2>
      </div>

      <div className="flex justify-center">
        {/* Form */}
        <form className="w-2/3 space-y-6 ">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full border font-medium py-3 rounded-lg  text-gray-700 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:text-white transition"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>
    </main>
  );
}
