import React from 'react';
import ProjectCard from './ProjectCard';
import "../projectpage.css";
import { IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { SiWebpack, SiJest, SiBabel, SiEslint, SiStylelint, SiBootstrap, SiRedux } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "News Pulse",
    description: "NewsPulse is a digital platform that provides up-to-date and relevant information on current events, developments, and worldwide stories.",
    image: "/images/projects/NewsPulse.png",
    gitUrl: "https://github.com/marvin-nyalik/NewsPulse",
    previewUrl: "https://github.com/marvin-nyalik/NewsPulse",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"],[<SiRedux key={2} size={33} />, "https://redux.js.org/"], [<IoLogoCss3 key={2} size={25} />,"https://www.w3.org/Style/CSS/Overview.en.html"], [<TbBrandJavascript key={3} size={30} />,"https://www.javascript.com/"]]
  },
  {
    id: 2,
    title: "I-Movies",
    description: "IMovies is a Single-page Web Application built with JavaScript ES6. It uses the free TVMAZE-API to showcase information about movies and Television shows.",
    image: "/images/projects/IMoviesShowcase.png",
    gitUrl: "https://github.com/marvin-nyalik/IMovies",
    previewUrl: "https://marvin-nyalik.github.io/IMovies/dist/",
    techStack: [[<TbBrandJavascript key={1} size={30} />,"https://www.javascript.com/"], [<SiWebpack key={2} size={30} />,"https://webpack.js.org/"],[<SiJest key={3} size={25} />,"https://jestjs.io/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"]]
  },
  {
    id: 3,
    title: "Math Magicians",
    description: "This is a fully responsive calculator built in React, Coupled with interesting, randomly generated Mathematics quotes.",
    image: "/images/projects/3.JPG",
    gitUrl: "https://github.com/marvin-nyalik/mathmagicians",
    previewUrl: "https://mathematics-magicians.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiBabel key={2} size={27} />, "https://babeljs.io/"], [<SiStylelint key={3} size={27} />, "https://stylelint.io/"], [<SiEslint key={4} size={30} />, "https://eslint.org/"]]
  },
  {
    id: 4,
    title: "Space-Travelers Hub",
    description: "This is an app for Space X that provides commercial and scientific space travel services. Built with React and Redux, The app allows users to reserve rockets and join selected space missions.",
    image: "/images/projects/4.JPG",
    gitUrl: "https://github.com/marvin-nyalik/space-travelers-hub",
    previewUrl: "https://space-travellers-hub-8qpe.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiRedux key={2} size={33} />, "https://redux.js.org/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"], [<SiBootstrap key={4} size={33} />, "https://getbootstrap.com/" ]]
  },
  {
    id: 5,
    title: "Book Store",
    description: "A simple webapp built with react that provides information about different generes of books, progress report on the book with comment and edit features.",
    image: "/images/projects/5.JPG",
    gitUrl: "https://github.com/marvin-nyalik/bookstore-redux",
    previewUrl: "https://final-bookstore.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiBabel key={2} size={27} />, "https://babeljs.io/"], [<SiStylelint key={3} size={27} />, "https://stylelint.io/"], [<SiEslint key={4} size={30} />, "https://eslint.org/"]]
  },
  {
    id: 6,
    title: "Leaderboard",
    description: "A Gamer's haven, the Leadeboard ranks gamer's based on their score in a Casino game, crowning the king, and rewarding the runner up positions.",
    image: "/images/projects/leaderboard.png",
    gitUrl: "https://github.com/marvin-nyalik/Leaderboard",
    previewUrl: "https://marvin-nyalik.github.io/Leaderboard/dist/",
    techStack: [[<TbBrandJavascript key={1} size={30} />,"https://www.javascript.com/"], [<SiWebpack key={2} size={30} />,"https://webpack.js.org/"],[<SiJest key={3} size={25} />,"https://jestjs.io/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"]]
  }
];

const Project = () => {
  return (
    <section id="projects">
      <div className="project-container mt-10">
        <h2 className="text-center font-mono italic text-4xl py-3 sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Featured Projects
        </h2>
        <br />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
          {projectsData.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Project; 
