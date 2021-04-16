import React from 'react';
import './course.css';
export default function Crs(){
    const c=[
        {
            img:"images\\undraw_Bookshelves_re_lxoy 1.png",
            course:"Course 1",
            content:"Some description about !st the course 1.Some description about the course..Some description about the course.Some description about the course.Some description about the course..Some description about the course..Some description about the course..Some description about the course. ",

        },
        {
            img:"images\\undraw_Bookshelves_re_lxoy 1.png",
            course:"Course 2",
            content:"Some description about 2 the course 2.Some description about the course..Some description about the course.Some description about the course.Some description about the course..Some description about the course..Some description about the course..Some description about the course. ",

        },
        {
            img:"images\\undraw_Bookshelves_re_lxoy 1.png",
            course:"Course 3",
            content:"Some description about the course3.Some description about the course..Some description about the course.Some description about the course.Some description about the course..Some description about the course..Some description about the course..Some description about the course. ",

        }
    ]
    return(
        <div>
            <div className="flexes cd">
            <div className="coursehead">
                <div>
                    <img src="images\undraw_Graduation_ktn0.png" alt="courses"></img>
                </div>
                <div className="ch"><h1>Our Courses</h1></div>
            </div>
            <div>
                <img src="images\undraw_teacher_35j2.png" alt="courses"></img>
            </div>
            </div>
            <div>
                {c.map((course)=>
                <div className="bb flexes mt">
                    <div>
                        <img src={course.img} alt ="book"></img>
                    </div>
                    <div className="cc">
                        <h3>{course.course}</h3>
                        <p>{course.content}</p>
                        <button className="redbn">Click Here to know more</button>
                    </div>
                </div>)}
            </div>
        </div>
    );
}