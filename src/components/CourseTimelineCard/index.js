/* eslint-disable prettier/prettier */

// Write your code here
import { AiFillClockCircle } from "react-icons/ai";

const CourseTimelineCard = (props)=>{
    const {courseDetails}=props
    const {courseTitle,description,tagsList,duration}=courseDetails 
    return(
       <div>
           <h1>{courseTitle}</h1>
           <AiFillClockCircle/>
           <p>{duration}</p>
           <p>{description}</p>
           <ul>
               {tagsList.map(each=><li id={each.id}>{each.name}</li>)}
           </ul>
       </div> 
    )
}

export default CourseTimelineCard