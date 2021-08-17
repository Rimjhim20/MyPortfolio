import React from 'react'
import pic from '../../assets/p1.PNG'
import pic1 from '../../assets/p2.PNG'
import pic2 from '../../assets/p3.PNG'
import pic3 from '../../assets/p4.PNG'
import pic4 from '../../assets/m1.PNG'
const Project = () => {
    return (
        <>
        <div class=" flex flex-row">
        <div class="container h-64 w-96 border-4 ml-14 rounded-lg  border-purple-900">
            <img src= {pic} alt="projectpic"/>
        </div>
        <div class="container h-44 w-96 border-4 ml-24  rounded-lg  border-purple-900">
            <img src= {pic1} alt="projectpic"/>
        </div>
        <div class="container h-68 w-96 border-4 ml-12 rounded-lg  border-purple-900">
            <img src= {pic2} alt="projectpic"/>
        </div>
        
        </div>
        <div class=" flex flex-row">
        <div class="container h-68 w-96 border-4 ml-12 rounded-lg  border-purple-900">
            <img src= {pic3} alt="projectpic"/>
        </div>
        <div class="container h-44 w-96 border-4 ml-12 rounded-lg  border-purple-900">
            <img src= {pic4} alt="projectpic"/>
        </div>
        </div>
        </>
    )
}

export default Project
