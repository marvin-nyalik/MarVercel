import React from 'react';
import { SiRubyonrails, SiMongodb  } from "react-icons/si";
import Image from 'next/image';
import Modal from './Modal';
import "../about.css";

const About = () => {
  return (
    <section className="my-14" id="about">
      <div className=" py-5">
        <h2 className="text-center font-mono italic text-4xl py-3 sm:text-6xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Marv-in a Nutshell
        </h2>
        <div className="about-bio h-96 md:h-auto overflow-scroll">
          <p className="text-[#ADB7BE] w-full text-lg sm:text-xl text-center my-10">
            Post graduating with a degree in Computer Science, I joined the Nairobi Hight Court, Kenyas premier judicial outlet in Nairobi, Kenya.
            I worked as an I.T support technician for little over a year. By the end of 2022, I decided to pursue my passion for software programming.
            I enrolled at Microverse, an online school that offers a worldclass curriculum to learn full-stack web development. My favourite part of programming is the problem solving aspect. I love the feeling of
            figuring out a solution to highly technical problems. My core stack includes React JS, JavaScript, Ruby, Rails, and PostgreSQL. I am also familar with other general purpose programming languages such as Python and Java.
            When I am not coding, I enjoy hiking, watching documentaries, and discovering new things. I am always eager to collaborate and learn new technologies.
          </p>
        </div>
        <div className="flex flex-col mt-5 sm:flex-row justify-center align-center items-center py-3">
          <button className="resume-btn mb-10 sm:mb-0 w-fit px-8 py-3 sm:ml-0 rounded-full sm:mr-12 text-white">
            <a target="_blank" className="flex" href="https://docs.google.com/document/d/11NBCRUTTdZXym0cOoJyAzpTzDYZmDw4GhMXjc_ylmBg/edit?usp=sharing">
              <span className="text-lg mr-3">
                Resume
              </span>
              <Image
                src="/images/icons/download.png"
                alt="download-ico"
                width={30}
                height={30}
              />
            </a>
          </button>
        </div>
        <h3 className="text-center mx-[5%] my-10 text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          My Skills
        </h3>
        <div className="mx-[5%] flex flex-col justify-center items-center my-10">
          <h3 className="self-start text-xl sm:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-300">
            Language
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30">
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <Image
                  src="/images/icons/javascript.png"
                  alt="javascript-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-yellow-500">JavaScript</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/ruby.png"
                  alt="ruby-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-red-600">Ruby</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/python.png"
                  alt="python-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-500">Python</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/r-project.png"
                  alt="R-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-300">R</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/sql.png"
                  alt="sql-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-orange-500">SQL</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/bash.png"
                  alt="bash-ico"
                  width={80}
                  height={80}
                />
                <p className="hidden md:block text-xl font-semibold text-green-600">Bash Script</p>
              </span>
            </div>
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <Image
                  src="/images/icons/javascript.png"
                  alt="javascript-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-yellow-500">JavaScript</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/ruby.png"
                  alt="ruby-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-red-600">Ruby</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/python.png"
                  alt="python-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-500">Python</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/r-project.png"
                  alt="R-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-300">R</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/sql.png"
                  alt="sql-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-orange-500">SQL</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/bash.png"
                  alt="bash-ico"
                  width={80}
                  height={80}
                />
                <p className="hidden md:block text-xl font-semibold text-green-600">Bash Script</p>
              </span>
            </div>
          </div>
          <h3 className="self-end text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-300">
            Frontend
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30">
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <Image
                  src="/images/icons/html5.png"
                  alt="bash-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-orange-500">HTML5</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/css3.png"
                  alt="css3-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-400">CSS3</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/bootstrap.png"
                  alt="bootstrap-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-fuchsia-600">Bootstrap</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/tailwind-css.png"
                  alt="tailwind-css-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-cyan-400">Tailwindcss</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/react.png"
                  alt="react-ico"
                  width={80}
                  height={80}
                />            
                <p className="hidden md:block text-xl font-semibold text-sky-500">React.js</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/nextjs.png"
                  alt="nextjs-ico"
                  width={80}
                  height={80}
                />
                <p className="hidden md:block text-xl font-semibold text-cyan-50">NEXT.js</p>
              </span>
            </div>

            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <Image
                  src="/images/icons/html5.png"
                  alt="bash-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-orange-500">HTML5</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/css3.png"
                  alt="css3-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-400">CSS3</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/bootstrap.png"
                  alt="bootstrap-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-fuchsia-600">Bootstrap</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/tailwind-css.png"
                  alt="tailwind-css-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-cyan-400">Tailwindcss</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/react.png"
                  alt="react-ico"
                  width={80}
                  height={80}
                />            
                <p className="hidden md:block text-xl font-semibold text-sky-500">React.js</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/nextjs.png"
                  alt="nextjs-ico"
                  width={80}
                  height={80}
                />
                <p className="hidden md:block text-xl font-semibold text-cyan-50">NEXT.js</p>
              </span>
            </div>
          </div>
          <h3 className="self-start text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            Backend
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30 sm:my-2">
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <SiRubyonrails size={75} color="red" />
                <p className="hidden md:block text-xl font-semibold text-rose-700">Rails</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/node.png"
                  alt="node-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-green-400">Node.js</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/postgresql.png"
                  alt="postgresql-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-500">PostgreSQL</p>
              </span>
              <span className="slide items-center">
                <SiMongodb size={75} color="green" />
                <p className="hidden md:block text-xl font-semibold text-emerald-700">MongoDB</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/django.png"
                  alt="django-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-lime-200">django</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/express.png"
                  alt="express-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-cyan-100">Express.js</p>
              </span>
            </div>
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <SiRubyonrails size={75} color="red" />
                <p className="hidden md:block text-xl font-semibold text-rose-700">Rails</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/node.png"
                  alt="node-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-green-400">Node.js</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/postgresql.png"
                  alt="postgresql-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-500">PostgreSQL</p>
              </span>
              <span className="slide items-center">
                <SiMongodb size={75} color="green" />
                <p className="hidden md:block text-xl font-semibold text-emerald-700">MongoDB</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/django.png"
                  alt="django-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-lime-200">django</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/express.png"
                  alt="express-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-cyan-100">Express.js</p>
              </span>
            </div>
          </div>
          <h3 className="self-end text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-300">
            Tools
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30 sm:my-2">
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <Image
                  src="/images/icons/git.png"
                  alt="git-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-red-400">Git</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/github.png"
                  alt="github-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-black">GitHub</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/vscode.png"
                  alt="vscode-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-pink-500">Visual Studio</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/docker.png"
                  alt="docker-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-500">Docker</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/slack.png"
                  alt="slack-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-rose-400">Slack</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/linux.png"
                  alt="linux-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-yellow-300">Linux</p>
              </span>
            </div>
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <Image
                  src="/images/icons/git.png"
                  alt="git-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-red-400">Git</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/github.png"
                  alt="github-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-black">GitHub</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/vscode.png"
                  alt="vscode-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-pink-500">Visual Studio</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/docker.png"
                  alt="docker-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-sky-500">Docker</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/slack.png"
                  alt="slack-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-rose-400">Slack</p>
              </span>
              <span className="slide items-center">
                <Image
                  src="/images/icons/linux.png"
                  alt="linux-ico"
                  width={75}
                  height={75}
                />
                <p className="hidden md:block text-xl font-semibold text-yellow-300">Linux</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
