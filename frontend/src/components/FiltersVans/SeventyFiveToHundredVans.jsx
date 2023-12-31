import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureCars from '../StructureCars'
import PruebaDeNav from '../PruebaDeNav'
import Sidebar from '../Sidebar'


const SeventyFiveToHundredVans = () => {

    const [carsFilteredByKms, setCarsFilteredByKms] = useState([])
    const [noResults, setNoResults] = useState(false)
    
    
  useEffect(() => { 
      axios.get("/getAllCars")
           .then((res) => { 
             const allCars = res.data
             const lessThanFiftyFiveKms = allCars.filter(cars => cars.kilometres <= 100000 && cars.kilometres >= 75000 && cars.type === "van")
             console.log(lessThanFiftyFiveKms)
             if(lessThanFiftyFiveKms.length === 0) { 
              setNoResults(true)
             } else { 
              setCarsFilteredByKms(lessThanFiftyFiveKms)
             }
           })
           .catch((err) => { 
             console.log(err)
           })
  }, [])


  return (
 <div>
      <div>
        <div>
            <div>
      <PruebaDeNav/>
      <Sidebar/> 


      {noResults ? <p>We did not find results for your search <b>75,000 and 100,000  kilometers Vans.</b></p> 
        :
        <>
      <div className='mb-6'> 
         <h5>You are looking at Vans that have between 75,000 and 100,000  kilometers </h5>
      </div>
         {carsFilteredByKms.map((car) => <StructureCars car={car}/>)}  
        </>  
    }

      
    </div>
    </div>
    </div>
    </div>
  )
}

export default SeventyFiveToHundredVans
