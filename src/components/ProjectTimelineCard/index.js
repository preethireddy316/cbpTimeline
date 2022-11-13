// Write your code here
/* eslint-disable prettier/prettier */
import { AiFillCalendar } from "react-icons/ai";


const ProjectTimelineCard = (props)=>{
    const {projectDetails}=props
    const {imageUrl,projectTitle,description,duration,projectUrl}= projectDetails
    return(
       <div>
           <img src={imageUrl} alt="image1"/>
           <h1>{projectTitle}</h1>
           <AiFillCalendar/>
           <p>{duration}</p>
           <p>{description}</p>
           <a href={projectUrl}>Visit</a>
       </div> 
    )
}

export default ProjectTimelineCard
