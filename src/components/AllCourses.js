import React, { useState } from 'react';
import Course from './Course';

const AllCourses=()=>{

    const [courses, setCourses] = useState([
        {title:"Java Course", description:"This is demo course"},
        {title:"C++ Course", description:"This is demo course"},
        {title:"Django Course", description:"This is demo course"},
        {title:"Reactjs Course", description:"This is demo course"},
    ])
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {
                courses.length > 0 ? courses.map((course) => (
                    <Course course={course}/>
                )): "No course"
            }
        </div>
    )
}

export default AllCourses;