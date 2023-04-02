
export default function Citem({slide}) {
  const {img,id,prev,next} =slide
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img src={img} className="w-full rounded-box" />
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-20 top-1/3 ">
   <h1 className='text-6xl font-bold text-white'>
   Affordable <br />

     Price For Car <br />
     Servicing
   </h1>
   <p className='mt-3 text-white'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
   <div className='flex flex-row mt-3  '>
   <button className="btn mr-4 btn-active text-white bg-red-600 border-0">Discover More</button>
   <button className="btn btn-outline">Latest Project</button>

   </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
        <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 border-0">❯</a>
      </div>
    </div> 
  )
}
