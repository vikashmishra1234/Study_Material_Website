import React, { useState } from "react";

const Unit = () => {
    const [em,setEm] = useState(0);
    const [rem,setRem] = useState(0);
    const [cent,setCent] = useState(0);
    const [px,setPx] = useState(0);

 const handleChange=(e)=>{
    const value = e.target.value;
    setEm((value*0.06));
    setRem((value*0.06));
    setCent((value*6.25));
    setPx(value);
  

 }
 const handleEm=(e)=>{
    const value = e.target.value;
    setEm((value));
    setRem((value));
    setCent((value*100));
    setPx(value*16);
  

 }
 const handleCent = ()=>{
  const value = e.target.value;
  setEm((value/100));
  setRem((value/100));
  setCent(value);
  setPx(value/6.25);
 }


  return (
    <main>
      <section className="container w-75 pt-4">
            <h3>Converte Css units</h3>
        <div style={{width:'fit-content',border:'.3px solid lightgray',borderRadius:"15px"}} className="d-flex m-auto mt-4 p-5 flex-column gap-4   align-items-center ">
          <div>
            <input value={px} onChange={handleChange} placeholder="enter value" type="number" className="text-light bg-dark border w-75 rounded bg-dark" /> px
          </div>
          <div>
            <input onChange={handleEm} value={em} placeholder="enter value" type="number" className="text-light w-75 rounded bg-dark" /> em
          </div>
          <div>
            <input onChange={handleEm} value={rem}  placeholder="enter value" type="number" className="text-light w-75 rounded bg-dark" /> rem
          </div>
          <div>
            <input onChange={handleCent} value={cent}  placeholder="enter value" type="number" className="text-light w-75 rounded bg-dark" /> %
          </div>
          </div>
        
      </section>
    </main>
  );
};

export default Unit;
