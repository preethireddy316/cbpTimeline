// Write your code here
/* eslint-disable prettier/prettier */

import {Chrono} from 'react-chrono'

import CourseTimelineCard from "../CourseTimelineCard"

import ProjectTimelineCard from "../ProjectTimelineCard"

const TimelineView=(props)=>{
    const {timelineItemsList}=props
    const items = timelineItemsList
return(
    <div className="chrono-container">
    <Chrono mode="VERTICAL_ALTERNATING" items = {items}>
            {timelineItemsList.map(each=>{
                if(each.categoryId==="COURSE"){
                    return(<CourseTimelineCard key={each.id} courseDetails={each}/>)
                }
                    return(<ProjectTimelineCard key={each.id} projectDetails={each}/>)
        
            })}
    </Chrono>
    </div>
    )
}

export default TimelineView