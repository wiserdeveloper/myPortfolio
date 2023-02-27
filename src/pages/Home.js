import NavBar from "../components/NavBar";
import background from "../images/background.mp4";

const Home = () => {
  return (
    <>
      <video autoPlay loop muted id="video">
        <source src={background} type="video/mp4" />
      </video>
      <NavBar />
      <div id="home-content">
        <div id="greeting">Hello, my name is</div>
        <h1 id="name">Alyssa Wiser</h1>
        <h1 id="content">I like to create things for the web.</h1>
      </div>
      <div id="home-text-content">
        I am a solution-driven web developer experienced in JavaScript and
        React. I'm focused on building creative and functional websites.
      </div>
      <div id="social">
        <a href="https://github.com/wiserdeveloper">
          <img
            id="github-icon"
            src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
            alt=""
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/alyssa-wiser/">
          <img
            id="linkedIn-icon"
            src="https://ytpr.co.ke/wp-content/uploads/2020/06/linkedin-icon-png-transparent-background-8.png"
            alt=""
          ></img>
        </a>
      </div>
    </>
  );
};

export default Home;
