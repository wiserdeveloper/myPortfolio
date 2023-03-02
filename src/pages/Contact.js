import NavBar from "../components/NavBar";
import contactBackground from "../images/contactBackground.mp4";

const Contact = () => {
  return (
    <div id="about">
      <video autoPlay loop muted id="contact-video">
        <source src={contactBackground} type="video/mp4" />
      </video>
      <NavBar />
      <h1 id="page-title">Contact Me</h1>
      <div>
        <div id="text-content">Email: wiserdeveloper@gmail.com</div>
      </div>
      <div>
        <div id="text-content">Phone Number: (317) 809-4514</div>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/alyssa-wiser/">
          <div id="text-content-link">LinkedIn</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
