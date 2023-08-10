import teamData from '../data.json'
import { useState } from 'react'
 

export default function MyProjects () {
    const [index, setIndex] = useState(0);
    let projects = teamData.projects[index]


    function handleClick() {
        if (index < teamData.projects.length -1)
    {
        setIndex(index + 1);
    } else {
        setIndex(0);
    }
    
}

    return (
        
        <div>
        <button id="clickedButton" onClick={handleClick}>
            Next
        </button>
        
        <h3> Team Name: {projects.Team}</h3>
        <ul> 
            <li>Team City: {projects.Location}</li>
           
            <li>Team Division: {projects.Division}</li>
            <li> <img className="logo" src={projects.Logo}></img></li>
        </ul>
        </div>

    )
}