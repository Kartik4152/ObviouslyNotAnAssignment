import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cake from "../../assets/images/Birthday_cake.png";
import { BsCalendarEvent } from "react-icons/bs";
import { GoLocation } from "react-icons/go";


const EventPage = () => {
  const navigate = useNavigate();
 
  const eventDetails = JSON.parse(window.localStorage.getItem("eventDetails"));
 
  useEffect(()=>{
    if(!eventDetails) {
      navigate("/create");
    }
  }, [eventDetails, navigate]);

  return (
    <div className='min-h-screen w-full md:pt-[5.5rem] bg-neutral-100 flex flex-col items-center'>
      <div className='w-full h-full aspect-square max-w-sm md:max-w-[593px] mx-auto mb-3 xl:mb-0 xl:order-2'>
          <img src={Cake} alt="cake" className='object-contain'/>
      </div>
      <div className='xl:order-1 flex flex-col px-5 max-w-sm md:max-w-[593px] w-full'>
        <div className='text-primary-400 font-bold text-[1.75rem] leading-8 mb-1'>{eventDetails.name}</div>
        <div className='text-neutral-500 text-sm leading-4 mb-8'>Hosted By <span className='font-bold'>{eventDetails.host}</span></div>
        <div className='flex items-center'>
          <div className='h-12 w-12 rounded-[0.625rem] bg-white mr-5 flex items-center justify-center'>
            <BsCalendarEvent className='h-5 w-5 text-primary-200'/>
          </div>
        </div>
        <divc className="flex items-center">
          <div className='h-12 w-12 rounded-[0.625rem] bg-white mr-5 flex items-center justify-center'>
            <GoLocation className='h-5 w-5 text-primary-200'/>
          </div>
        </divc>
      </div>
    </div>
  )
}

export default EventPage;