import React, { useState, useEffect } from "react";
import db from "../firebase";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import chart from "chart.js/auto";


const CostGraph = ()=>{
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    db.collection("Progress").onSnapshot((snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const labels = projects.map((val) => val.data.name);
  let counts = projects.map((val) => val.data.cost);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Projects Cost",
        backgroundColor: "rgb(255, 0, 0)",

        borderColor: "rgb(0,0,255)",
        data: counts,
      },
    ],
  };

  return (
    <div>
    <Line data={data} />
  </div>
  )
}



const RatingsGraph = ()=>{
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    db.collection("Progress").onSnapshot((snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const labels = projects.map((val) => val.data.name);
  let counts = projects.map((val) => val.data.rating);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Project Ratings",
        backgroundColor: "rgb(0,0,255)",
        borderColor: "rgb(255, 99, 132)",
        data: counts,
      },
    ],
  };

  return (
    <div>
    <Bar data={data}/>
  </div>
  )
}

const DepartmentsGraph = ()=>{
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    db.collection("Progress").onSnapshot((snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const labels = projects.map((val) => val.data.department);
  let counts = projects.map((val) => val.data.rating);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Department ",
        backgroundColor: "rgb(0,0,255)",

        borderColor: "rgb(0,128,128 )",
        data: counts,
      },
    ],
  };

  return (
    <div>
    <Line data={data} />
  </div>
  )
}

const Analytics = () => {


  return (
    <><div>
      <CostGraph />
      <br />
      <br />
      <RatingsGraph />
    </div><br /><br /><DepartmentsGraph /></> 
  );
  
};

export default Analytics;
