import React from 'react'
import vocational from "../../assets/revamp-vocal-bg.png";
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';



function Gallery() {
  return (
    <>
        <Navbar/>
    <div className='pt-20' >
   {/* <!-- Start block --> */}
   <section
   style={{
    backgroundImage: `url(${vocational})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
    className="bg-[#ffffff] body-font font-poppins md:pt-3 pt-5 pb-16">
        <div className="mx-auto text-center mt-6">
          <h1 className=" flex-shrink font-semibold text-[#171717] md:text-[38px] text-[32px]">
            Our Gallery
          </h1>
          <p className="hidden md:block text-[#838383]">We are empowering African students with the best education system in the world <br/>(the Finnish education) to build a future and a better Africa.</p>
          <p className="md:hidden block text-[#838383]">We are empowering African students with the best education system in the world (the Finnish education) to build a future and a better Africa.</p>
        </div>
        <div className='max-w-screen-xl px-8 lg:px-14 md:pt-10 grid md:grid-cols-3 grid-cols-1  pb-5 mx-auto lg:gap-20'>
        {/* <div className="mt-[50px] md:mt-0 overflow-hidden  cursor-pointer  relative group">
          <div className=" z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div className="font-bold">Jessie Watsica</div>

                        <div className="opacity-60 text-sm ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio dolores error iure, perferendis
                            sequi totam. Ad aliquam aperiam atque deleniti dolor
                            dolorem enim esse et in, inventore itaque, pariatur
                            reprehenderit.
                        </div>
                    </div>
                </div>
            </div>
          <img src="/images/about/gallery1.jpeg" alt="location" className=" group-hover:scale-110 transition duration-300 ease-in-out"/>
          </div> */}
          <div className="mt-[50px] md:mt-0">
            <img src="/images/about/gallery1.jpeg" alt="location" className=" group-hover:scale-110 transition duration-300 ease-in-out"/>
          </div>
          <div className="">
          <div className="mt-[30px] md:mt-0">
          <img src="/images/about/gallery4.jpeg" alt="location" />
          </div>
          <div className="mt-[30px] md:mt-4">
          <img src="/images/about/Image1.jpg" alt="location" />
          </div>
          </div>
          <div className="mt-[30px] md:mt-0">
          <img src="/images/about/gallery3.jpeg" alt="location" />
          </div>
          <div className="mt-[30px] md:mt-0">
          <img src="/images/about/gallery2.jpeg" alt="location" />
          </div>
          <div className="">
          <div className="mt-[30px] md:mt-0">
          <img src="/images/about/Image2.jpg" alt="location" />
          </div>
          <div className="mt-[30px] md:mt-4">
          <img src="/images/about/Image3.jpg" alt="location" />
          </div>
          </div>
          <div className="">
          <div className="mt-[30px] md:mt-0">
          <img src="/images/about/Image4.jpg" alt="location" />
          </div>
          <div className="mt-[30px] md:mt-4">
          <img src="/images/about/Image5.jpg" alt="location" />
          </div>
          </div>
          
        </div>
        


      </section>

      

      {/* <!-- End block --> */}
    <Footer/>
    </div>
    </>
  )
}

export default Gallery