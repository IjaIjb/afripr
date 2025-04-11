import React, { useRef, useState } from "react";
import AdminDashboardLayout from "../../../component/AdminDashboardLayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { AdminApis } from "../../../apis/adminApi/adminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../../component/UI/LoadingSpinner";
const Banner = () => {
  const carouselRefTwo = useRef<any>(null);
  const [image, setImage] = useState<any>(null);
  const [loader, setLoader] = useState(false);
  const [banner, setBanner] = React.useState<any>([]);

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

  const [formData, setFormData] = useState({
    title: "",
    application_deadline: "",
    banner_image: "", // This should be a URL
  });


  const ImageUpload: any = ({ image, setImage }:any) => {
    const [loading, setLoading] = useState(false);

    const handleImageChange = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = e.target.files?.[0];
      if (file) {
        setLoading(true); // Show loading spinner or indicator

        try {
          // Create a FormData object
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "urban_image"); // Replace with your Cloudinary preset

          // Upload to Cloudinary
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dngyazspl/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const result = await response.json();
          if (result.secure_url) {
            // Set the image URL in the state
            setImage(result.secure_url);
          }

          setLoading(false); // Stop loading
        } catch (error) {
          console.error("Error uploading image", error);
          toast.error("Error uploading image. Please try again.");
          setLoading(false);
        }
      }
    };

    return (
      <div className="flex justify-center text-center">
        <label className="flex w-full bg-white border-dashed border border-[#D8D8E2] flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
          <div className="flex flex-col items-center justify-center h-[120px]">
            {image ? (
              <img
                className=""
                src={image} // This should now be the Cloudinary URL
                alt="Uploaded logo"
                width={100}
                height={100}
              />
            ) : (
              <div>
              <div className="flex justify-center">
                <img src="/images/loan/upload.svg" className="text-center" alt="Upload Icon" />
              </div>
              <div className="text-green-600 text-sm">
                <p>Click to upload</p>
                <p className="text-gray-500">PNG, JPG (max. 10MB)</p>
              </div>
            </div>
            )}
          </div>
          <input
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            className="hidden mb-2 text-sm text-[#6C757D] font-medium"
            onChange={handleImageChange}
          />
        </label>
        {loading && <p><LoadingSpinner /></p>}
      </div>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  setLoader(true)
    if (!formData.title || !formData.application_deadline || !image) {
      toast.error("Please fill all fields and upload an image.");
      return;
    }
  
    try {

      // Send data to API
      const response:any = await AdminApis.addBanner({
        title: formData.title,
        application_deadline: formData.application_deadline,
        banner_image: image, // Send base64 string
      });
  console.log(response)
      if (response.data) {
        toast.success("Banner added successfully!");
        setFormData({ title: "", application_deadline: "", banner_image: "" });
  setLoader(false)
     
      } else {
        toast.error("Failed to add banner. Please try again.");
  setLoader(false)

      }
    } catch (error) {
      console.error("Error adding banner:", error);
      toast.error("Something went wrong. Please try again.");
  setLoader(false)

    }
  };
  
  return (
    <AdminDashboardLayout>
      <div>
        <div className="">
          <Carousel
            ref={carouselRefTwo}
            swipeable={true}
            draggable={true}
            showDots={false}
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
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-white text-sm">
                        Deadline: {new Date(item.application_deadline).toLocaleDateString()}
                      </p>
                    </div>
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
      </div>

      <div>
      <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[#000000] text-[14px]">Banner Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter banner title"
                className="mt-1 w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
              />
            </div>

            <div>
              <label className="text-[#000000] text-[14px]">Application Deadline</label>
              <input
                type="date"
                name="application_deadline"
                value={formData.application_deadline}
                onChange={handleChange}
                className="w-full mt-1 p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 pt-4 gap-4">
            {/* Front View Upload */}
            <div>
              <h5 className="text-[#333333] pb-2 text-[14px]">Upload Banner Image</h5>
          <ImageUpload image={image} setImage={setImage} />
            
            </div>
          </div>

<div className="flex justify-center pb-6">
          <button type="submit" 
          
          disabled={loader}
          className="disabled:bg-gray-400  mt-6 w-fit bg-primary flex justify-center text-white py-3 px-5 md:px-20 rounded-full hover:bg-green-700">
          {loader ? <LoadingSpinner /> : "Upload"}  
          </button>
          </div>
        </form>

        <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
      </div>
    </AdminDashboardLayout>
  );
};

export default Banner;
