import { Card } from "react-bootstrap";

function MenuItem({image,name,content,price}) {
  return (
    <div className="menuItem">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="name">{name}</Card.Title>
          <Card.Text className="content">{content}</Card.Text>
          <Card.Text className="price">{price}&#8378;</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenuItem;
