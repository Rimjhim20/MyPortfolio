import React from 'react'
import pic from '../../assets/p1.PNG'
import pic1 from '../../assets/p2.PNG'
import pic2 from '../../assets/p3.PNG'
import pic3 from '../../assets/p4.PNG'
import pic4 from '../../assets/m1.PNG'
import pic5 from '../../assets/fl.png'
import pic6 from '../../assets/ss.png'
import pic7 from '../../assets/tindog.png'
import pic8 from '../../assets/3.PNG'
import pic9 from '../../assets/net.png'
const Project = () => {
    return (
        <>
        <div class=" flex flex-row pb-8 ">
        <div class=" container h-64 w-96 shadow-lg shadow-indigo-500/40  ml-14 rounded-lg  ">
            <img src= {pic} alt="projectpic"/>
        </div>
        <div class="container h-44 w-96   ml-24  rounded-lg  border-purple-900">
            <img src= {pic1} alt="projectpic"/>
        </div>
        <div class="container h-68 w-96  ml-12 rounded-lg  border-purple-900">
            <img src= {pic2} alt="projectpic"/>
        </div>
        
        </div>
    <div class=" flex flex-row pb-8">
        <div class="container h-68 w-96  ml-12 rounded-lg  border-purple-900">
            <img src= {pic3} alt="projectpic"/>
        </div>
        <div class="container h-44 w-96  ml-24  rounded-lg  border-purple-900">
            <img src= {pic4} alt="projectpic" />
        </div>

        <div  class="container h-48 w-96 ml-24 rounded-lg  border-purple-900 ">
            <img src= {pic5} alt="projectpic"/>
        </div>
</div>
   <div class=" flex flex-row pb-8">
        <div class="container  ml-24 rounded-lg  border-purple-900 ">
            <img src= {pic6} alt="projectpic"/>
        </div>

        <div class="container  ml-24 rounded-lg  border-purple-900 ">
            <img src= {pic7} alt="projectpic"/>
        </div>

        <div class="container h-58 w-96 ml-24 rounded-lg  border-purple-900 ">
            <img src= {pic8} alt="projectpic"/>
        </div>
        
    </div>
    <div class=" flex flex-row pb-8">
        <div class="container h-48 w-96 ml-24 rounded-lg  border-purple-900 " >
            <img src= {pic9} alt="projectpic"/>
        </div>
        </div>
        </>
    )
}

export default Project
