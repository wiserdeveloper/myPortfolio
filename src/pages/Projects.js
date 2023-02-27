import NavBar from "../components/NavBar";
import projectsBackground from "../images/projectsBackground.mp4";

const Projects = () => {
  return (
    <div id="projects-container">
      <video autoPlay loop muted id="video">
        <source src={projectsBackground} type="video/mp4" />
      </video>
      <NavBar />
      <h1 id="projects-title">Functional Counter</h1>
      <div id="counter">
        <img id="project-photo" src={require("../images/counter.png")} alt="" />
      </div>
      <div id="text-content">
        This application was built using React. It allows the user to create a
        shopping list and keeps track of how many of the product they are
        needing.
      </div>
      <div id="button-container">
        <a
          id="source-code"
          href="https://github.com/KenzieAcademy-Students/fullstack-functional-counter-wiserdeveloper"
        >
          View Code
        </a>
      </div>
      <h1 id="projects-title">Find Anagrams</h1>
      <div id="counter">
        <img
          id="project-photo"
          src={require("../images/anagrams.png")}
          alt=""
        />
      </div>
      <div id="text-content">
        This website, built using JavaScript, will find the anagrams of any word
        possible.
      </div>
      <div id="button-container">
        <a
          id="source-code"
          href="https://github.com/KenzieAcademy-Students/challenge-anagrams-wiserdeveloper"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default Projects;
