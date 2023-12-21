import React from 'react'
import Card from './components/Card'

function App() {
  let data=[{
    title:"Project one",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquamaspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem",
  },{
    title:"Project Two",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquamaspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem",
  },{
    title:"Project Three",
    description:" Amet numquamaspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem",
  },{
    title:"Project Four",
    description:" repellat sequi itaque deserunt,dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem",
  },{
    title:"Project Five",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquamaspernatur eum quasi sapiente nesciunt? Voluptatibus  dolorem",
  },{
    title:"Project Six",
    description:" Amet numquamaspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem",
  },
]
  return <>
    <div className="container">

  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>

  <div className="row">
   {
    data.map((e,i)=>{
      return <Card CardData={e} key={i}/>

    })
   }
    
  </div>
  
</div>
  </>
}

export default App
