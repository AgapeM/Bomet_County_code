import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth } from "../firebase";

import NewProject from "./NewProject";

function WithHeaderExample() {
  const [data, setData] = useState([]);

  const [session] = useAuthState(auth);

  useEffect(() => {
    db.collection("Progress")
      // .where("state", "==", "All")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const updateComplete = (refId) => {
    db.collection("Progress").doc(refId).update({
      state: "Complete",
    });
  };

  const updateOngoing = (refId) => {
    db.collection("Progress").doc(refId).update({
      state: "Ongoing",
    });
  };

  return (
    <div>
      {session && (
        <div
          style={{
            margin: 20,
          }}
        >
          <NewProject />
        </div>
      )}
        <table>
          <tr>
            <th>Name</th>
            <th>Sub County</th>
            <th>Ward</th>
            <th>Department</th>
            <th>Rating</th>
            <th>Progress</th>
          </tr>
      {data.map((item) => {
        return (
          <tr>
            <td>{item.data.name}</td>
            <td>{item.data.sub_county}</td>
            <td>{item.data.ward}</td>
            <td>{item.data.department || "<<missing>>"}</td>
            <td>{item.data.rating}</td>
            <td>{item.data.progress || "<<missing>>"}</td>
          </tr>
        );
      })}
        </table>
    </div>
  );
}

export default WithHeaderExample;
