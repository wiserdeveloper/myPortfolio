import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
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
            src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png"
            alt=""
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/alyssa-wiser/">
          <img
            id="linkedIn-icon"
            src="https://www.tebu-bio.com/blog/wp-content/uploads/2018/08/LinkedIn-icon-grey-RGB.png"
            alt=""
          ></img>
        </a>
      </div>
    </>
  );
};

export default Home;
