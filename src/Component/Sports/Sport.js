import React from 'react'
import Data from '../../data.json';;

const toggledark =()=>{
  document.documentElement.classList.toggle("dark");
}

function Sport() {
  return (
    <div className="sports dark:bg-cgray ">
      <div className="header flex justify-between  py-5">
      <span className='font-poppins-700 text-2xl border-b-4 border-blue-400 pl-5 px-4 ml-5 dark:text-white'><b>Sports</b></span>
      <span className=''>
<label class="inline-flex items-center cursor-pointer ">
  <input type="checkbox" value="" class="sr-only peer" onClick={toggledark}/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-blue-300 mr-3 dark:bg-cgray">Dark mode</span>
</label>
</span>
      </div>
      <div className="image pl-5 pt-5  justify-around flex flex-wrap dark:bg-cgray dark:text-white">
        {Data && Data.user.map((data) => {
          return <div className="img flex-shrink-0 " key={data.id} >
            <div className="w-60 h-full  rounded overflow-hidden shadow-2xl content-center grid grid-cols-auto gap-4 ">
              <img className="max-w-xs mx-auto py-5 my-2 " src={data.url} alt="Player" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ml-2">{data.name}</div>
                <div className="font-inter text-sm mb-2 ml-2">{data.description}</div>

              </div>
              <div className=" ml-3 px-2 pt-4 pb-2 inline-block bg-gray-100  text-sm text-gray-700 mr-2 mb-2 grid grid-cols-2 dark:bg-event dark:text-white ">
                <div className="event ml-5">
                  <span className='bg-#525965'>Total Events</span><br />
                  <span className='font-bold text-black dark:text-white'>{data.event}</span>
                </div>
                <div className="sport ml-6">
                  <span className=''>Sports</span><br />
                  <span className='font-bold text-black dark:text-white'>{data.Sport}</span>
                </div>
              </div>
            </div>
          </div>
        })}
        <div className="img flex-shrink-0 " >
            <div className="w-60 h-full  rounded overflow-hidden shadow-2xl content-center grid grid-cols-auto gap-4 ">
              <div className="relative"><img className="max-w-xs mx-auto py-5 my-2 " src='assests/adverstisment.svg' alt="Player" /><img className="absolute top-7 right-3 " src='assests/ad.svg' alt="Player" /></div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ml-2">Advertisement title</div>
                <div className="font-inter text-sm mb-2 ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
            </div>
          </div>
        {/* <div className="image   justify-around flex ">
        <img src='assests/add.svg' className='w-60 h-full py-5 ' alt='img'/>
        </div> */}
      
      </div >
        <div className='  flex justify-center align-item-center my-6'><button class="bg-blue-500 hover:bg-blue-700 text-white font-inter-600 py-2 px-4 rounded mt-5 mx-auto dark:text-white">
        See More
      </button>
      </div>
      <div className="collection dark:bg-gradient py-5 dark:text-white m-12">
      <div className="spotlight mt-auto grid place-items-center dark:bg-gradient">
        <h1 className='font-poppins text-6xl text-center'><b>Collection Spotlight</b></h1>
        <p className='font-inter text mt-5 text-center'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable<br /> experience. Grab yours today!</p>
      </div>
      <div className="image pl-1 pt-1 flex flex-wrap justify-around py-12">
        <img src='assests/Group 1836.svg' alt='arrow' className='cursor-pointer hidden md:block' />

        {Data && Data.collection.map((data) => {
          return <div className="img  " key={data.id} >
            <div className="w-64 h-100 rounded overflow-hidden shadow-2xl content-center grid grid-cols-auto gap-4  my-5 ">
              <img className="w-xs mx-auto pt-2 mt-5" src={data.poster} alt="Player" />

              <div className="border-dashed border-2 border-black h-px w-full"></div>
              <div className="px-1 py-4 grid place-items-center ">
                <div className="font-bold text-xl  pt-2 ">{data.name}</div>
                <div className="font-inter text-sm  pt-2 ">{data.Date}|{data.Day}|{data.Time}</div>
                <div className="font-inter text-sm  pt-2">{data.Place}</div>
                <div className='  flex justify-center align-item-center my-6 '><button class="bg-gray-800 hover:bg-black-700 text-white font-inter-600 py-2 px-4  mt-5 mx-auto dark:bg-black">
                  {data.btn}
                </button>
                </div>
              </div>
            </div>
          </div>
          
        })}<img src='assests/Group 1717.svg' alt='arrow' className='cursor-pointer hidden md:block' />
      </div >
      </div>

    </div>
  )
}

export default Sport