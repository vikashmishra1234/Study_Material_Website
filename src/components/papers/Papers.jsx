import React from 'react'
import FirstYear from './FirstYear'
import FourthYear from './FourthYear'
import { useQuery } from 'react-query'
import fetchQuantums from '../utills/getPdfs'
import ThirdYear from './ThirdYear'
import SecondYear from './SecondYear'


const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY66TQSQwmm03gGA-fY2FLt-9xpDAztW23KQ&s'
const Papers = () => {
    const { data } = useQuery('quantums', fetchQuantums,{staleTime: 1000 * 60 * 5,});
    const fourthYear = data?.filter((item)=>item.type==='paper' && item.year=='4')
    const thirdYear = data?.filter((item)=>item.type==='paper' && item.year=='3')
    const secondYear = data?.filter((item)=>item.type==='paper' && item.year=='2')
    const firstYear = data?.filter((item)=>item.type==='paper' && item.year=='1')
  return (
    <div>
        <h2 className='text-3xl md:text-5xl underline text-blue-400 '>#Papers</h2>
        {data&&<FourthYear data={fourthYear} defaultImage={defaultImage}/>}
        {firstYear?.length>0&&<FirstYear data={firstYear} defaultImage={defaultImage}/>}
        {data&&<ThirdYear data={thirdYear} defaultImage={defaultImage}/>}
        {data&&<SecondYear data={secondYear} defaultImage={defaultImage}/>}
    </div>
  )
}

export default Papers