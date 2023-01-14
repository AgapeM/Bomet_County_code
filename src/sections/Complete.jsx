import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import db from "../firebase";

function WithHeaderExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("projects")
      .where("state", "==", "Complete")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            style={{
              marginBottom: 20,
            }}
          >
            <Card.Header>{item.data.author}</Card.Header>
            <Card.Body>
              <Card.Title>{item.data.title}</Card.Title>
              <Card.Text>{item.data.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default WithHeaderExample;
