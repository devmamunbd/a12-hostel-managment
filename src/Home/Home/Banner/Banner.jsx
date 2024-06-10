
const Banner = () => {
  return (
    <div>
<div className="carousel w-full h-[450px] rounded-lg">
    <div id="slide1" className="carousel-item relative w-full ">
   
    <img src="https://i.postimg.cc/j5ptrrT8/hostel-management1.jpg" className="w-full" />
  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute top-44 left-[400px]">
        <h1 className="text-center text-black text-2xl font-bold">Hey, Welcome To Hostel Smart <br />Your Comfort is Our Priority</h1>
        <div className="flex flex-col md:flex-row gap-3 mt-5">
        <input className="outline-none border border-blue-500 p-2 w-80 rounded-lg" type="search" name="" id="" placeholder="Search" />
        <button className="text-blact bg-blue-500 px-10 py-2 text-white rounded-lg">Search</button>
        </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/PJ1hXFrd/hostel-header.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute top-44 left-[400px]">
        <h1 className="text-center text-black text-2xl font-bold">Hey, Welcome To Hostel Smart <br />Your Comfort is Our Priority</h1>
        <div className="flex flex-col md:flex-row gap-3 mt-5">
        <input className="outline-none border border-blue-500 p-2 w-80 rounded-lg" type="search" name="" id="" placeholder="Search" />
        <button className="text-blact bg-blue-500 px-10 py-2 text-white rounded-lg">Search</button>
        </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/RCtvLq12/360-F-468352239-Hen8-Xmow-LZd7m-Yax-Sl-DPGr-Kb-LDt0-Mljh.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute top-44 left-[400px]">
        <h1 className="text-center text-black text-2xl font-bold">Hey, Welcome To Hostel Smart <br />Your Comfort is Our Priority</h1>
        <div className="flex flex-col md:flex-row gap-3 mt-5">
        <input className="outline-none border border-blue-500 p-2 w-80 rounded-lg" type="search" name="" id="" placeholder="Search" />
        <button className="text-blact bg-blue-500 px-10 py-2 text-white rounded-lg">Search</button>
        </div>
    </div>
  </div> 
 
</div>
    </div>
  )
}

export default Banner