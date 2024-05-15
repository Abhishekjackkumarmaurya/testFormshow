import { useState } from "react";


function App() {

  const [Name,nameHandler] =useState("")
  const [Email,emailHandler] =useState("")
  const [Contact,contactHandler] =useState("")
  const [ID,idHandler] =useState("")
  const submithandler=(event)=>{
    event.preventDefault();


    console.log(Name,Email,Contact,ID);
  }

 return(
  <div>
    <form onSubmit={submithandler}>
      <input  onChange={(e)=>nameHandler(e.target.value)} value={Name} type="text" placeholder="name" />
      <br />
      <br />
      <input onChange={(e)=>emailHandler(e.target.value)}  value={Email} type="email" placeholder="email"/>
      <br />
      <br />
      <input onChange={(e)=>contactHandler(e.target.value)} value={Contact} type="text"  placeholder="contact"/>
      <br />
      <br />
      {/* <input onChange={(e)=>idHandler(e.target.value)} value={ID} type="text" placeholder="id" />
      <br />
      <br /> */}
      <button>submit</button>
    </form>
  </div>
 )
}

export default App
