import Card from 'react-bootstrap/Card';

function BackgroundImg() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="background-img.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Order groceries for delivery or pickup today</Card.Title>
        <Card.Text>
          Whatever you want from local stores, brought right to your door.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default BackgroundImg;