import React from 'react'
import pic from '../../assets/back.png'


const index = () => {
  return (
    <>
     
      <div className='text-3xl mt-12 ml-12 '>
    
      Hi there🤚, I am a dedicated and passionate girl 👧 and extremely passionate about coding👩‍💻. 
Always seeking 🔍 an opportunity to work as a developer👩🏼‍💻 and designer🎨🖌️.
<br/>
<br/>
It’s not about perfect 👌, It’s all about effort 👍and I work well under pressure because I use the pressure to help me work more efficiently💯.
<br/>
<br/>
 I can use my knowledge🧠 and skills💡 for continuous improvement📈 .  </div>
    
<div class="pt-6">
      <table class="h-64 w-96 text-center m-auto  ">
  <thead>
    <tr>
      <th class="border border-slate-600">School</th>
      <th class="border border-slate-600">Year</th>
      <th class="border border-slate-600">Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-700 ...">St Xavier's High School</td>
      <td class="border border-slate-700 ...">2008-2018</td>
      <td class="border border-slate-700 ..."> 7.5 CGPA</td>
    </tr>
    <tr>
      <td class="border border-slate-700 ...">Gyan Niketan Girls School</td>
      <td class="border border-slate-700 ...">2018-2020</td>
      <td class="border border-slate-700 ...">9.5 CGPA</td>
    </tr>
    <tr>
      <td class="border border-slate-700 ...">Amity University Patna</td>
      <td class="border border-slate-700 ...">2020-2024</td>
      <td class="border border-slate-700 ..."> 9.2 CGPA</td>
    </tr>
  </tbody>
</table>
</div>
<img src={pic} alt="" class="h-full w-96"/>

    </>
  )
}

export default index
