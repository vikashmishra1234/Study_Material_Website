
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {createOrder} from '../utills/rozarpay'
import { Link, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import fetchQuantums from '../utills/getPdfs'
import { useNavigate } from "react-router-dom";





const BuyQuantum = () => {
  const Navigate = useNavigate();
  const [defaultImage,setDefaultImage] = useState('https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75')
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked,setChecked] = useState(false);
  const [loading,setLoading] = useState(false);
  const [shouldNavigate,setNavigate] = useState(false);
  const [searchParams] = useSearchParams();
  const quantumId = searchParams.get("qauntumId");
  const {data} = useQuery('quantums',fetchQuantums,{staleTime: 1000 * 60 * 5,});
  const [quantum,setQuantum] = useState()
  useEffect(()=>{
    
    if(quantum?.type=='paper'){
      setDefaultImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY66TQSQwmm03gGA-fY2FLt-9xpDAztW23KQ&s')
    }
    if(shouldNavigate){
      Navigate('/collections')
    }
  },[shouldNavigate,quantum])
  useEffect(() => {
    setQuantum((data?.filter((item)=>item.$id == quantumId)[0]))
    
    setIsVisible(true)
  }, [data])
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0 px-8 m-auto">
            <img className="h-52 w-full object-contain  md:w-48" src={quantum?.image?quantum.image:defaultImage} alt={quantum?.title} />
          </div>
          <div className="p-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-gray-800 mb-2"
            >
              Thanks For Choosing {quantum?.title}
            </motion.h2>
            <p className="text-sm text-gray-600 ">Code: {quantum?.code}, {quantum?.Date}</p>
            <p className="text-lg  my-3 text-red-500 text-uppercase"> {(quantum?.type)?quantum.type:'Quntum'}</p>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Key Features:</h3>
            <p className="text-gray-700 mb-6">{quantum?.about}</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-gray-800">₹{quantum?.price}</p>
              <motion.button
              onClick={async()=>{
                await createOrder(quantum?.price,quantumId,setLoading,setNavigate);
              
              }}
              disabled={!isChecked || loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${!isChecked?'bg-[#bdbbbb]':'bg-blue-500 '}  text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1`}
              >
               {
                loading?'processing...':`Pay ₹${quantum?.price}`
               }
                
              </motion.button>
            </div>

            <input type='checkbox' className='mr-2'  onChange={(e)=>{
              setChecked(!isChecked)
            }} />I agreed to the <Link className='text-blue-400' to='/privacy-policy'>Privacy Policy</Link> and <Link className='text-blue-400' to='/terms-conditions'>Terms-Conditions</Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default BuyQuantum

