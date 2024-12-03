import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { GoArrowSwitch } from "react-icons/go";
import { MdColorLens } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const Navigate = useNavigate();
    const handleClick=(route)=>{
        Navigate(`/${route}`);
    }
  return (
    <main>
      <div className="container text-center pt-5  pb-3">
        <div>
          <h2 className="fs-1 fw-bolder">The <span className="text-danger">Best</span> Online Tools</h2>
          <h4 className="fs-5 pt-3 pb-3 ">
            {" "}
            Here are Some Best Free tools that can be used in working time.
          </h4>
          <div className="mb-3">

          <button className="btn btn-primary">Source code</button>
          </div>
        </div>

        <div style={{border:'.1px solid lightgray ',borderRadius:'13px'}} className="text-start p-2">
          <span className="fs-3">Conversions</span>
        <div className="d-flex pt-5 pb-5 flex-wrap gap-4 justify-content-around">
            
            <div onClick={()=>handleClick('css')} style={{cursor:'pointer',width:'fit-content',padding:'30px 50px 30px 50px'}} className=" rounded d-flex bg-dark  fs-4 flex-column align-items-center">
              <GoArrowSwitch color="brown" size={40} />
              <span>css unit converter</span>
            </div>

            <div onClick={()=>handleClick('color')} style={{width:'fit-content',padding:'30px 50px 30px 50px'}} className="rounded  d-flex bg-dark  fs-4 flex-column align-items-center">
              <MdColorLens color="#2196F3" size={40} />
              <span>color converter</span>
            </div>

            <div onClick={()=>handleClick('image')} style={{width:'fit-content',padding:'30px 50px 30px 50px'}} className="rounded  d-flex bg-dark  fs-4 flex-column align-items-center">
              <IoImageOutline color="lightgreen" size={40} />
              <span>image converter</span>
            </div>

          
        </div>
          
        </div>
        <div style={{cursor:'pointer'}} onClick={()=>handleClick('word')} className="bg-dark m-auto mb-4  style={{cursor:'pointer'}} rounded w-25 p-5 mt-5 gap-2 fs-5 d-flex align-items-center flex-column">
          <PiArrowCounterClockwiseBold size={40} color="#934ad6" />
          <span className="fw-bold">Word Counter</span>
        </div>

        <div style={{cursor:'pointer'}} onClick={()=>handleClick('pdf')} className="bg-dark m-auto rounded w-25 p-5 fs-5 gap-2 d-flex align-items-center flex-column">
          <AiOutlineFilePdf size={40} color="lightblue" />
          <span className="fw-bold">pdf viewer</span>
        </div>

        <div style={{cursor:'pointer'}} className="bg-dark m-auto mt-3 rounded w-25 p-5 fs-5 gap-2 d-flex align-items-center flex-column">
          <RiLockPasswordFill size={40} color="#de7d38" />
          <span className="fw-bold">Password Generater</span>
        </div>
      </div>
    </main>
  );
};

export default Home;
