import React from 'react';
import heroImage from "../assets/images/Landing_page_image.svg";
import Button from '../components/button';
import {} from "react-icons";

const LandingPage = () => {
  return (
    <div className='min-h-screen w-full bg-secondary-100 pt-7 md:pt-[3.75rem] pb-4 md:pb-7 flex flex-col xl:flex-row xl:items-center'>
      <div className='mb-9 md:mb-14 mx-auto w-fit xl:order-2 flex flex-col items-center xl:items-end'>
        <div className='w-fit text-center flex flex-col text-4xl md:text-[4rem] font-bold mb-4 mx-auto xl:text-right xl:mx-0'>
          <span className='leading-none text-primary-400'>Imagine if</span>
          <span className='leading-[2.5625rem] md:leading-[4.625rem] text-transparent bg-clip-text gradient-text'>Snapchat</span>
          <span className='leading-none text-primary-400'>had events.</span>
        </div>
        <div className='font-light text-neutral-600 text-base leading-[1.125rem] md:text-2xl md:leading-7 max-w-xs md:max-w-lg mx-auto text-center xl:mb-[3.25rem] xl:text-right'>
          Easily host and share events with your friends across any social media.
        </div>
        <Button className="hidden mx-auto xl:block xl:mx-0">🎉 Create my event</Button>
      </div>
      <div className='rounded-[0.8125rem] w-[165px] h-[292px] md:w-[311px] md:h-[548px] xl:h-[775px] xl:w-[440px] mx-auto mb-[2.125rem] md:mb-[3.25rem] filter-shadow-sm md:filter-shadow-md xl:order-1'>
        <img src={heroImage} className="object-contain h-full w-full" alt="hero"/>
      </div>
      <Button className="mx-auto xl:hidden">🎉 Create my event</Button>
    </div>
  )
}

export default LandingPage;