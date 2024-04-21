import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

function ShopCards() {
  return (
    <Container>
      <div>
        <div
          className="horizontal-scroll-wrapper"
          style={{ overflow: "scroll" }}
        >
          <Card
            className="card-scroll"
            style={{ margin: "30px 0", width: "400px" }}
          >
            <Card.Img variant="top" src="images/hunterwhite.webp" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Hunter 350
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="card-scroll"
            style={{ margin: "30px 0", width: "400px" }}
          >
            <Card.Img variant="top" src="images/himalayan450white.webp" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Himalayan 450
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="card-scroll"
            style={{ margin: "30px 0", width: "400px" }}
          >
            <Card.Img variant="top" src="images/meteor350white.webp" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Meteor 350
              </Card.Title>
            </Card.Body>
          </Card>

          <Card
            className="card-scroll"
            style={{ margin: "30px 0", width: "400px" }}
          >
            <Card.Img variant="top" src="images/triumphwhite.webp" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Triumph Speed 400
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="card-scroll"
            style={{ margin: "30px 0", width: "400px" }}
          >
            <Card.Img variant="top" src="images/mt15white.webp" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>MT 15</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="card-scroll"
            style={{ margin: "30px 0", width: "400px" }}
          >
            <Card.Img variant="top" src="images/r15white.webp" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>R 15</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default ShopCards;
