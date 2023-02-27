import NavBar from "../components/NavBar";
import aboutBackground from "../images/aboutBackground.mp4";

const About = () => {
  return (
    <body id="about">
      <video autoPlay loop muted id="video">
        <source src={aboutBackground} type="video/mp4" />
      </video>
      <NavBar />
      <div id="about-me">
        <h1 id="page-title">About Me</h1>
        <div id="p1">
          Hello! My name is Alyssa Wiser and I am a web developer with a passion
          of designing and building websites. I am great at working under
          pressure and thrive in a competitive enviroment. I'm looking forward
          to putting my skills and knowledge towards being a professional web
          developer in the work force!
        </div>
      </div>
      <div id="p1">
        My passion for tech began in early highschool but never thought to make
        a career out of it. I wanted to join the trades right after high school
        and so when I graduated, I joined the Union Ironworkers and for 9 months
        I went to work everyday erecting steel beams to build a Chrysler Plant.
        I would put on my harness and go 50ft into the air bolting together the
        beams. I woke up one day and questioned why I was doing this and not
        something I can really use my knowledge and passion towards. That is
        when I began looking for my break into the techforce and found Kenzie
        Academy.
      </div>
      <div id="about-me">
        <div id="p1">
          I joined Kenzie Academy with a clear goal in mind, to learn to code
          and to make a life-lasting career out of it. I spent 12 months in the
          Fullstack Web Development (MERN) program and all the sacrifices and
          effort I spent into learning what they provided me, rewarded me into
          having the confidence and knowledge I need to thrive in a React Web
          Development role.
        </div>
      </div>
      <div id="about-me">
        <div id="p1">
          When I'm not behind my monitors, I like to spend my time hiking with
          my dog, watching movies, reading, and traveling. I enjoy being outside
          as much as I can and experiencing all that life has to offer. I am
          also a huge film buff and will watch any movie that comes out. My
          favorite genre is Science Fiction and Horror. Some of my favorite
          movies are Blade Runner (1982), The Thing, Her, and The Shining. I am
          a really big Dune fan and will spend hours talking about the lore of
          the books if given the chance!
        </div>
        <div class="row">
          <div class="column">
            <img id="photos" src={require("../images/me.jpg")} alt="" />
          </div>
          <div class="column">
            <img id="photos" src={require("../images/murphy.JPG")} alt="" />
          </div>
          <div class="column">
            <img id="photos" src={require("../images/me4.JPG")} alt="" />
          </div>
        </div>
      </div>
    </body>
  );
};

export default About;
