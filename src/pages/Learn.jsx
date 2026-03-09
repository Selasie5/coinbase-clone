import React from 'react'
import FeaturedImage from "../assets/featured.png"
import { ADVANCED_TRADING, CRYPTO_BASICS, CRYPTO_BASICS_EXTENDED, FEATURE_EXTENDED, FUTURES, GLOSSARY, POPULAR_LIST, TIPS_AND_TUTORIALS } from '../data/popular'
import LearnButtons from '../components/common/LearnButton'

const Learn = () => {
  return (
   <main className=' py-10 flex flex-col justify-center gap-20'>
    <section className='flex flex-col justify-center items-center text-center md:px-20 px-10'>
 <h1 className='font-semibold  text-[48px] md:text-[52px]'>Crypto questions, answered</h1>
      <p className='text-base text-gray-600'>
        Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
      </p>
    </section>

    <section className='flex flex-col justify-center items-center gap-10 md:px-20 px-10'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
        <div className='flex flex-col justify-center items-start gap-5 w-full md:w-3/4'>
<h2 className='text-xl font-semibold'>Featured</h2>
<img src={FeaturedImage} alt='' className=''/>
<span className='uppercase text-gray-600 text-sm font-medium'>
Video Tutorial
</span>
<div className='flex flex-col justify-center items-start gap-4'>
  <h2 className='text-(--secondary) text-3xl font-semibold'>When is the best time to invest in crypto ?</h2>
<p className='text-base text-gray-600'>
When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
</p>
</div>

        </div>
        <div className='flex flex-col justify-center items-start gap-5 md:w-1/4 w-full md:py-0 py-10'>
<h2 className='text-xl font-semibold'>Popular</h2>
<div className='flex flex-col justify-start items-start gap-5'>
{
  POPULAR_LIST.map((list)=>(
    <div className='flex flex-col justify-center items-start gap-2'>
      <span className='text-xs  text-gray-500 uppercase font-medium'>{list.category}</span>
      <h5 className='text-[19px] font-semibold'>{list.title}</h5>
      </div>
  ))
}
</div>


        </div>

      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 place-items-center gap-5 w-full'>
        {
          FEATURE_EXTENDED.map((featuredList)=>
          (
            <div className='flex  md:flex-row flex-col justify-center items-start md:items-center gap-10 md:gap-5 w-full'>
              <img src={featuredList.img} alt='' className='w-16 h-16'/>
              <div className='flex flex-col justify-center items-start gap-2'>
                 <h4 className='text-xl font-semibold'>
                {featuredList.title}
              </h4>
              <a href={featuredList.href}>
                <span className=' text-gray-500'>
                  See More →
                </span>
              </a>
                </div>
             
            </div>
          ))
        }
      </div>

    </section>

    <hr className='h-[0.5px] w-full bg-(--base-gray-1) border-none'/>
     <section className='md:px-20 px-10  flex flex-col justify-center  gap-10 '>
      <div className='flex flex-col justify-center items-center  text-center gap-2'>
 <h1 className='font-semibold text-5xl'>Crypto basics</h1>
        <p className='text-base text-gray-600'>
New to crypto? Not for long — start with these guides and explainers</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 place-items-center gap-10'>
          {
            CRYPTO_BASICS.map((cryptoBasics)=>
            (
              <div className='flex flex-col justify-center items-start md:col-span-2 gap-2'>
                <img src={cryptoBasics.img} alt='' className=''/>
                <span className='text-xs uppercase text-gray-600 font-[450]'>Beginner's Guide</span>
                <h3 className='text-black font-semibold text-3xl font'>{cryptoBasics.title}</h3>
                <p className='text-base'>{cryptoBasics.subText}
                </p>
                </div>
            ))
          }
           {
            CRYPTO_BASICS_EXTENDED.map((cryptoBasicsExtended)=>
            (
              <div className='flex flex-col justify-center items-start gap-2'>
                <img src={cryptoBasicsExtended.img} alt='' className='h-96 aspect-auto object-cover'/>
                <span className='text-xs uppercase text-gray-600 font-[450]'>{cryptoBasicsExtended.category}</span>
                <h3 className='text-black  text-lg font-semibold'>{cryptoBasicsExtended.title}</h3>
                  
                </div>
            ))
          }
         
      </div>
     
  <div className='w-full flex justify-center items-center'>
  <LearnButtons label="See more crypto basics"/>
      
      </div>
   
    
     
     </section>
      <section className='bg-(--coinbase-gray-3) py-20 px-10 flex flex-col justify-center items-center gap-10'>
            <h2 className='text-4xl font-bold text-black'>What is ...</h2>
            <div className='flex flex-wrap justify-center items-center gap-2'>
              {
                GLOSSARY.map((glossaryItem)=>(
                  <div className='bg-white  px-8 py-4 rounded-md '>
                    <span className='text-[15px] text-black font-medium'>
  {
                      glossaryItem
                    }
                    </span>
                  
                    </div>
                ))
              }
            </div>
            <button className='px-8 py-4 rounded-md text-sm text-white bg-(--primary) font-semibold'>
              See more
            </button>
    </section>
     <section className=' px-10 md:px-20  flex flex-col justify-center  gap-10 '>
      <div className='flex flex-col justify-center items-center text-center gap-2'>
 <h1 className='font-semibold text-5xl'>Tips and Tutorials</h1>
        <p className='text-base text-gray-600'>
Get practical, step-by-step answers to all things crypto</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-10'>
          
           {
            TIPS_AND_TUTORIALS.map((tut)=>
            (
              <div className='flex flex-col justify-center items-start gap-2'>
                <img src={tut.img} alt='' className='h-96 aspect-auto object-cover'/>
                <span className='text-xs uppercase text-gray-600 font-[450]'>{tut.category}</span>
                <h3 className='text-black  text-2xl font-semibold'>{tut.title}</h3>
                  
                </div>
            ))
          }
         
      </div>
     
  <div className='w-full flex justify-center items-center'>
  <LearnButtons label="See more crypto basics"/>
      
      </div>
    
    
     
     </section>
     <section className='px-10 md:px-20   flex flex-col justify-center  gap-10 '>
      <div className='flex flex-col justify-center items-center gap-2'>
 <h1 className='font-semibold text-5xl'>Advanced Trading</h1>
        <p className='text-base text-gray-600'>
Ready to advance? Learn the tools and terminology you need to take control of your trades.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-10'>
          
           {
            ADVANCED_TRADING.map((adt)=>
            (
              <div className='flex flex-col justify-center items-start gap-2'>
                <img src={adt.img} alt='' className='aspect-auto object-cover'/>
                <span className='text-xs uppercase text-gray-600 font-[450]'>{adt.category}</span>
                <h3 className='text-black  text-2xl font-semibold'>{adt.title}</h3>
                  
                </div>
            ))
          }
         
      </div>
     
  <div className='w-full flex justify-center items-center'>
  <LearnButtons label="See more advanced trading"/>
      
      </div>
    
    
     
     </section>
     <section className='px-10 md:px-20   flex flex-col justify-center  gap-10 '>
      <div className='flex flex-col justify-center items-center gap-2'>
 <h1 className='font-semibold text-5xl'>Futures</h1>
        <p className='text-base text-gray-600'>
New to futures trading? Get up to speed on the basics.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-10'>
          
           {
            FUTURES.map((future)=>
            (
              <div className='flex flex-col justify-center items-start gap-2'>
                <img src={future.img} alt='' className=' aspect-auto object-cover'/>
                
                <h3 className='text-black  text-2xl font-semibold'>{future.title}</h3>
                  
                </div>
            ))
          }
         
      </div>
     
  <div className='w-full flex justify-center items-center'>
  <LearnButtons label="See more about futures"/>
      
      </div>
    
    
     
     </section>
   </main>
  )
}

export default Learn
