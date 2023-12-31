import React from 'react'
import Footer from './Main/Footer'
import { Link } from 'react-router-dom'
import fav from "../img/fav.png"
import axios from "axios"
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';



const StructureCars = ({car}) => { 

  const userCtx = useContext(UserContext)
  console.log(userCtx.userId)

   const saveCarInFavs = () => { 
    const newCar = { 
      carId: car.id,
      userId: userCtx.userId,
      carName: car.name,
      carBrand: car.brand,
      carKms: car.kilometres,
      carImg: car.img[0],
      carSeller: car.seller,
      carPrice: car.price
    }
    axios.post("/setFav", newCar)
         .then((res) => { 
          console.log(res.data)
         })
         .catch((err) => { 
          console.log(err)
         })
   }

  const addNewVisitToPublication = () => {
    const data = ( { 
      publicationId: car._id
    })
    axios.post("/addVisit", data)
         .then((res) => { 
          console.log(res.data)
         })
         .catch((err) => console.log(err))
  }


  return (
    <div className='flex justify-center items-center mt-3 2xs:ml-[15px] xxxs:ml-[15px] xxs:ml-[25px] sm:ml-[20px] md:ml-[20px] lg:ml-[15px]'>
                      
                <div>
                      <div className="card card-compact flex w-96 2xl:h-[500px] xl:h-[500px]  shadow-2xl mt-5 xxxs:w-[300px] xxs:w-[320px] sm:w-[350px] md:w-[340px] lg:w-[340px] xl:w-[340px] 2xl:w-[340px]">
                        <div classname="float-right">
                        <img src={fav} alt="" className='w-8 h-8 mb-4  justify-center float-right cursor-pointer x' title="Save as Favorite" onClick={() => saveCarInFavs()}/>
                        </div>
                          <div className='float-left'>
                            <figure><img className="h-[240px] xxxs:w-[200px] xxs:w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl-w-[290px] 2xl:w-[310px]" src={car.img[0]} /></figure>
                          </div>
                          
                              <div className="card-body">
                                    <h2 className="card-title flex justify-center">{car.name}</h2>
                                    <div className="flex-none">                               
                                      <p>Kilometres: {car.kilometres}</p>
                                      <p> Location: {car.location}</p>
                                    </div>
                                      <div className="card-actions flex justify-center">
                                    <Link to={`/carDetail/${car.id}`}><button className="btn btn-primary" onClick={() => addNewVisitToPublication()}>View More</button> </Link>
                                      </div>
                              </div>
                      </div>
                  </div>
      </div>
                
  )
}

export default StructureCars

