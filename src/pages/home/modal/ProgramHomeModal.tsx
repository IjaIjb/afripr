import React, { useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { AdminApis } from '../../../apis/adminApi/adminApi';

const ProgramHomeModal = () => {
   const [banner, setBanner] = React.useState<any>([]);
   const [loading, setLoading] = React.useState<boolean>(true);
   const carouselRefTwo = useRef<any>(null);
 
   React.useEffect(() => {
     setLoading(true);
     AdminApis.getBanner()
       .then((response) => {
         if (response?.data) {
           console?.log(response?.data?.records);
           setBanner(response?.data?.records);
         } else {
           // dispatch(login([]))
         }
       })
       .catch(function (error) {
         console.error('Error fetching banner data:', error);
       })
       .finally(() => {
         setLoading(false);
       });
   }, []);

   // Function to determine the route based on title and id
   const getRouteForBanner = (bannerItem: any) => {
     if (bannerItem.title === "Bachelor Program") {
       return "/explore-programs";
     } else if (bannerItem.title === "Finnish Program" || bannerItem.id === "d407d951-e062-4543-a2aa-a7a845c9abe1") {
       return "/study-in-finnish";
     }
     // Default fallback route
     return "/list-of-courses";
   };

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1, // optional, default to 1.
        },
      };

    // Fallback static carousel items (keeping as backup)
    const staticCarouselItems = [
      {
        head: "Discover Your Path to Finland!",
        imgSrc: "/images/Afriproedu-Admin-design.jpg",
        link: "/list-of-courses",
        buttonText: "Apply Now",
      },
      {
        head: "Discover Your Path to Finland!",
        imgSrc: "/images/Afriproedu-design-Info.jpg",
        link: "/list-of-courses",
        buttonText: "Apply Now",
      },
      {
        head: "Discover Your Path to Finland!",
        imgSrc: "/images/Afriproedu-Public-Nursing.jpg",
        link: "/list-of-courses",
        buttonText: "Apply Now",
      },
      {
        head: "Discover Your Path to Finland!",
        imgSrc: "/images/finnish.jpg",
        link: "/study-in-finnish",
        buttonText: "Apply Now",
      },
    ];

    // Use banner data if available, otherwise use static items
    const carouselItems = banner.length > 0 
      ? banner.map((item: any) => ({
          head: "Discover Your Path to Finland!",
          imgSrc: item.banner_image,
          link: getRouteForBanner(item),
          buttonText: "Apply Now",
          id: item.id,
          title: item.title,
          application_deadline: item.application_deadline
        }))
      : staticCarouselItems;

    // Loading component
    const LoadingSpinner = () => (
        <div className="md:w-[900px] w-[300px] body-font font-poppins">
      <div className="flex md:max-w-lg max-w-[300px] items-center justify-center md:h-[500px] h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1DB459]"></div>
      </div>
      </div>
    );

  return (
    <div>
        <div className="md:max-w-lg max-w-[300px] w-full  body-font font-poppins">
          <div  className='mt-5'>
          <h2 className="text-center text-[#1DB459] font-bold md:text-[20px] text-[18px] leading-8">
     Discover Your Path
            </h2>
            
            {loading ? (
        <div className="md:max-w-lg max-w-[300px] w-full  body-font font-poppins">

              <LoadingSpinner />
              </div>
            ) : (
              <Carousel
                // ref={carouselRefTwo}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // render carousel on server-side.
                infinite={true}
                rtl={false}
                // autoPlay={false} // Disable autoplay to prevent conflict with manual navigation
                // autoPlaySpeed={3000} // Optional: You can remove this if autoplay is disabled
                // keyBoardControl={true}
                transitionDuration={500} // Set transition to 500ms for smoother experience
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="rounded-[7px]"
                // arrows={false} // Hide default arrows
              >
         {carouselItems.map((item:any, index:any) => (
  <div key={item.id || index}>
    <div className="w-full">
      <img src={item.imgSrc} className='md:w-[500px] md:h-[500px]' alt="hero" />
    </div>
    <div className="flex justify-between gap-3 mt-3">
      {item.link.startsWith('https://') ? (
        <a
          href={item.link}
          className="text-white w-full bg-[#1C8B48] rounded-[5px] flex justify-center font-medium text-sm md:px-5 md:py-3 py-2.5 mb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.buttonText}
        </a>
      ) : (
        <NavLink
          to={item.link}
          className="text-white w-full bg-[#1C8B48] rounded-[5px] flex justify-center font-medium text-sm md:px-5 md:py-3 py-2.5 mb-2"
        >
          {item.buttonText}
        </NavLink>
      )}

      <a
        href="https://wa.me/2349047248430?text=Hello%20I%20would%20like%20to%20speak%20to%20a%20consultant"
        rel="noopener noreferrer"
        target="_blank"
        className="text-[#48B774] w-full flex justify-center bg-[#D7F5DC] rounded-[5px] font-medium text-sm md:px-5 md:py-3 py-2.5 mb-2"
      >
        Chat with Us
      </a>
    </div>
  </div>
))}
              </Carousel>
            )}
          </div>
        </div>
    </div>
  )
}

export default ProgramHomeModal