import React, { useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AdminApis } from '../../apis/adminApi/adminApi';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const TopPrograms = () => {
   const [banner, setBanner] = React.useState<any>([]);
   const carouselRefTwo = useRef<any>(null);
 
   React.useEffect(() => {
     AdminApis.getBanner()
       .then((response) => {
         if (response?.data) {
           console?.log(response?.data?.records);
           setBanner(response?.data?.records);
         } else {
           // dispatch(login([]))
         }
       })
       .catch(function (error) {});
   }, []);
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1, // optional, default to 1.
        },
      };

        // Function to manually trigger left navigation
  const handlePrevClickOne = () => {
    carouselRefTwo.current.previous();
  };

  // Function to manually trigger right navigation
  const handleNextClickOne = () => {
    carouselRefTwo.current.next();
  };
  return (
    <div>
         <section className=" py-12  ">
          <div className='md:flex justify-between'>
            <div className='flex md:justify-start justify-center'>
          <h2 className="text-green-600 md:text-start text-center  leading-[60px] text-[56px] font-bold mb-6">Top programs</h2>
          </div>
          <div className="flex md:justify-end justify-center">
            <div>
            <h4 className=' text-center pb-2'>Check out our latest available programs </h4>
        <div className='flex md:justify-end'>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600">
          Check Programs →
        </button>
        </div>
        </div>
      </div>
          </div>


            <div className="">
              <Carousel
                ref={carouselRefTwo}
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // render carousel on server-side.
                infinite={true}
                rtl={false}
                autoPlay={true} // Disable autoplay to prevent conflict with manual navigation
                autoPlaySpeed={7000} // Optional: You can remove this if autoplay is disabled
                // keyBoardControl={true}
                transitionDuration={500} // Set transition to 500ms for smoother experience
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="rounded-[7px]"
                arrows={false} // Hide default arrows
              >
                             {banner && banner.length > 0 ? (
              // Map through banners from API
              banner.map((item:any, index:any) => (
                <div key={item.id || index} className="p-2">
                  <div className="relative">
                    <img
                      src={item.banner_image}
                      alt={item.title || "Banner"}
                      className=""
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-white text-sm">
                        Deadline: {new Date(item.application_deadline).toLocaleDateString()}
                      </p>
                    </div> */}
                  </div>
                </div>
              ))
            ) : (
              // Fallback images if no banners from API
              // [1, 2, 3, 4].map((num) => (
              //   <div key={num}>
              //     <img
              //       src={`/images/home/programFlier${num <= 3 ? num : 2}.png`}
              //       alt="Placeholder"
              //       className="w-full h-64 object-cover rounded-lg"
              //     />
              //   </div>
              // ))
              <div className="flex justify-center">
<h5 className="text-[20px]">No Banner Available</h5>
              </div>
            )}
                {/* <div>
               <img
                        src="/images/home/programFlier1.png"
                        alt="location"
                        className=""
                      />
                      </div>
                      <div>
                         <img
                        src="/images/home/programFlier2.png"
                        alt="location"
                        className=""
                      />
                      </div>
                      <div>
                         <img
                        src="/images/home/programFlier3.png"
                        alt="location"
                        className=""
                      />
                      </div>
                      <div>
                         <img
                        src="/images/home/programFlier2.png"
                        alt="location"
                        className=""
                      />
                      </div> */}
              </Carousel>
            </div>
  <div className="flex justify-center ">
          <button
            className=" text-white p-2 rounded-full"
            onClick={handlePrevClickOne}
          >
            <IoIosArrowDropleft className="text-primary w-8 h-8" />
          </button>

          <button
            className=" text-white p-2 rounded-full"
            onClick={handleNextClickOne}
          >
            <IoIosArrowDropright className="text-primary w-8 h-8" />
          </button>
        </div>
          </section>
    </div>
  )
}

export default TopPrograms