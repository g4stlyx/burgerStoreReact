import banner from "../assets/banneryeni.jpg";
import "../styles/about.css"

function About() {
  return (
    <div className="about">
      <img
        className="aboutImage"
        src={banner}
      ></img>
      <h1 className="aboutTitle">About Us</h1>
      <p className="aboutContent">
        &nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        facilis dolorum corrupti necessitatibus eveniet? Modi, quaerat mollitia?
        Est assumenda, aliquid odit labore tenetur nemo magnam numquam,
        voluptatem non quia sed.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Provident facilis dolorum corrupti necessitatibus
        eveniet? Modi, quaerat mollitia? Est assumenda, aliquid odit labore
        tenetur nemo magnam numquam, voluptatem non quia sed.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Provident facilis dolorum
        corrupti necessitatibus eveniet? Modi, quaerat mollitia? Est assumenda,
        aliquid odit labore tenetur nemo magnam numquam, voluptatem non quia
        sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        facilis dolorum corrupti necessitatibus eveniet? Modi, quaerat mollitia?
        Est assumenda, aliquid odit labore tenetur nemo magnam numquam,
        voluptatem non quia sed.
      </p>
    </div>
  );
}

export default About;
