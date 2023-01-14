import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Education from "../assets/education.png";
import Security from "../assets/Security.jpg";
import Development from "../assets/development.jpg";
import Health from "../assets/Health.jpg";
import Administration from "../assets/Administration.jpg";
import ICT from "../assets/ICT.jpg";
import PublicService from "../assets/Public service.jpg";
import Agriculture from "../assets/Agriculture.jpg";
import Livestock from "../assets/livestock.jpg";
import Water from "../assets/Water.jpg";
import Enviroment from "../assets/Environment.jpg";
import Transport from "../assets/Transport.jpg";
import Tourism from "../assets/Tourism.jpg";
import Youth from "../assets/youth.jpg";
import Sports from "../assets/Sports.jpg";
import Municipality from "../assets/Municipality.jpg";

const data = [
  {
    id: "1",
    image: Education,
    title: "Education",
  },
  {
    id: "2",
    image: Security,
    title: "Security",
  },
  {
    id: "3",
    image: Development,
    title: "Development",
  },
  {
    id: "4",
    image: Health,
    title: "Health",
  },
  {
    id: "5",
    image: Administration,
    title: "Administration",
  },
  {
    id: "6",
    image: ICT,
    title: "ICT Technology",
  },
  {
    id: "7",
    image: PublicService,
    title: "Public Service",
  },
  {
    id: "8",
    image: Agriculture,
    title: "Agriculture",
  },
  {
    id: "9",
    image: Livestock,
    title: "Livestock",
  },
  {
    id: "10",
    image: Water,
    title: "Water",
  },
  {
    id: "11",
    image: Enviroment,
    title: "Environment",
  },
  {
    id: "12",
    image: Transport,
    title: "Transport",
  },
  {
    id: "13",
    image: Tourism,
    title: "Tourism",
  },
  {
    id: "14",
    image: Youth,
    title: "Youth",
  },
  {
    id: "15",
    image: Sports,
    title: "Sports",
  },
  {
    id: "16",
    image: Municipality,
    title: "Municipality",
  },
];

function GridExample() {
  return (
    <Row xs={1} md={4} className="g-4">
      {data.map((item) => {
        return (
          <Col key={item.id}>
            <Card>
              <Card.Img
                variant="top"
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                }}
                src={item.image}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{`This is the department that is in charge of ${item.title} in the county.`}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default GridExample;
