import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../styles/home.css"
import homeBanner from "../assets/banneryeni.jpg"

function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${homeBanner})`}}>
      <div className="order">
        <Link to="/menu">
          <Button className="order-button">Order Now!</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home