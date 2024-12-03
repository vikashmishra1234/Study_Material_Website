import React, { useState } from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import '@react-pdf-viewer/core/lib/styles/index.css';
import file from '../assets/test.pdf'
const PDF = () => {
  const [pdf,setPdf] = useState(null);
    const newPlugin = defaultLayoutPlugin(
    );
    
    const handleChange = (e)=>{
      const pdfFile = e.target.files[0];
      if (pdfFile.type === 'application/pdf') {
        const reader = new FileReader();
        reader.readAsDataURL(pdfFile);
        reader.onload = function (e) {
          const pdfData = e.target.result;
          setPdf(pdfData);
        };
      }
      else{
        alert("unable to select the file");
      }
    }
  return (
<div className='container'>
  <h2 className='text-center pt-4'>PDF Viewer</h2>
<input id='pdf' onChange={handleChange} type="file" style={{display:'none'}} />
{<div   style={{border:'1px dashed',cursor:'pointer',height:'8rem' }} className= ' mb-5 fs-3 mt-5 pt-3 text-center  '>
  <label htmlFor="pdf">

 <h3 className=''>+ Click or Drag pdf to view</h3>
  </label>
</div>}

{ pdf&&<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

<div className='' style={{height:'96vh',border:'2px solid red'}}>

    <Viewer theme={'dark'} fileUrl={pdf} plugins={[newPlugin]} />
</div>


</Worker> }
</div>
  )
}

export default PDF