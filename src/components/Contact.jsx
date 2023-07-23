import "../styles/contact.css";
import banner from "../assets/banner.png";
import { Button, Form } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide">
        <img src={banner} width="" height=""></img>
      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <Form>
        
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="name@email.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
          </Form.Group>

          <Button className="contact-button">Submit</Button>
        
        </Form>

      </div>
    </div>
  );
}

export default Contact;
