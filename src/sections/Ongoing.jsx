import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth } from "../firebase";

function WithHeaderExample() {
  const [data, setData] = useState([]);

  const [session] = useAuthState(auth);

  useEffect(() => {
    db.collection("projects")
      .where("state", "==", "Ongoing")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const updateRecord = (refId) => {
    db.collection("projects").doc(refId).update({
      state: "Complete",
    });
  };

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
              {session && (
                <Button
                  onClick={() => {
                    updateRecord(item.id);
                  }}
                  variant="danger"
                >
                  Set as Complete
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default WithHeaderExample;
