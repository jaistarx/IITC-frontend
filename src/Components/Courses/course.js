import React, { useEffect, useState } from "react";
import "./course.css";
import { Courses } from "../../functions/user";

export default function Crs() {
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(0);
  const handle = async () => {
    let result;
    try {
      result = await Courses();
      console.log(result)
      setRes(result.courses);
    } catch (err) {
      alert("Wrong username or password");
    }
  };

  useEffect(() => {
    handle();
  }, []);
  return (
    <div>
      <div className="flexes cd">
        <div className="coursehead">
          <div>
            <img src="images\undraw_Graduation_ktn0.png" alt="courses"></img>
          </div>
          <div className="ch">
            <h1>Our Courses</h1>
          </div>
        </div>
        <div>
          <img src="images\undraw_teacher_35j2.png" alt="courses"></img>
        </div>
      </div>
      <div>
        {res.map((course) => (
          <div className="bb flexes mt">
            {/* <div>
              <img src={course.img} alt="book"></img>
            </div> */}
            <div className="cc">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <button className="redbn">Click Here to know more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
