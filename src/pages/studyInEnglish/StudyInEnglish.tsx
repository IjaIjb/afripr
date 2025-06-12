import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import hero from "../../assets/hero-degree.png";
import stepsBg from "../../assets/degree-steps-bg.png";
// import { AxiosResponse } from 'axios';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function StudyInEnglish() {

    const [category, setCategory] = React.useState<any>('');
    const [name, setName] = React.useState<any>('');
    const [courseList, setCourseList] = React.useState<any>('');

    // React.useEffect(() => {
    //     const query: any = {
    //         title: '',
    //         category: ''
    //     };
    //     AuthApis.getFilteredCourse('', query).then(
    //         (response: AxiosResponse<any>) => {
    //             if (response?.data) {
    //                 setCourseList(response?.data?.data)
    //             }
    //         }
    //     ).catch(function (error) {
    //         // handle error

    //     })
    // }, []);

    const navigate = useNavigate();

    const viewCourse = React.useCallback(
        
        () => {
            if (category == 'master\'s program') {
                navigate('/list-of-courses?p=masters-program')
            } else if (category == 'vocational') {
                navigate('/list-of-courses?p=vocational')
            } else if (category == 'degree program') {
                navigate('/list-of-courses?p=degree-program')
            } else if (category == 'high school') {
                navigate('/list-of-courses?p=high-school')
            } else {
                navigate('/list-of-courses')
            }
        },
        [ category]
    );
    return (
        <>
            <Navbar />
            {/* <!-- Start block --> */}
            <section className='body-font font-poppins md:pt-20 relative'>
                <div
                    style={{
                        backgroundImage: `url(${hero})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    className='sm:px-16 md:px-14 px-6 md:pb-44 pb-30 md:pt-16 pt-10  flex justify-center items-center'
                >
                    <div className='flex-col items-start pt-10 mr-auto place-self-center'>
                        <h1 className="md:text-[45px] text-[36px] font-bold md:leading-[55px]">A better <span className='text-[#1DB459]'>Learning</span>
                            <h1 className="">Future Start Here </h1>
                        </h1>

                        <p className='font-poppins font-normal text-[#949DB1] md:text-[16px] text-[13px] md:leading-[23.85px] leading-[20px] max-w-[430px] mt-5'>Embark on a transformative educational journey with AfriProEdu! Your path to a brighter learning future starts right here. Join us in shaping a brighter tomorrow through education. Welcome to AfriProEdu, where your journey to success begins!</p>

                        <div className='mt-3'>
                             <Link to="/explore-programs">
                            <button type="button" 
                            // onClick={viewCourse} 
                            className="text-white bg-[#1DB459] font-medium rounded-[5px] text-[15px] md:px-[40px] md:py-4 px-6  py-2.5 md:mr-4 mr-8">Apply Now</button>
</Link>
                        </div>


                    </div>
                </div>
               
            </section>
            {/* <!-- End block --> */}

            {/* <!-- Start block --> */}

            {/* <!-- End block --> */}

            {/* Start Section */}
            <div className=' sm:px-16 px-6 flex justify-center items-start md:pt-16 pt-8' >
                <div className='xl:max-w-[1280px] w-full'>
                    <section className='flex md:flex-row flex-col sm:py-16 py-6'>
                        <div className='flex-1 flex-col justify-center items-start  '>
                            <img src="/images/degree-img1.png" alt="hero" />
                        </div>

                        <div className='flex-1 flex   flex-col md:ml-[120px] ml-0 md:mt-[60px] mt-8 relative'>
                            <div className="md:flex flex-row   w-full">
                                <h1 className="flex-1 font-poppins font-[900] md:text-[40px] text-[27px] text-black md:leading-[48px] leading-[38px]">
                                    Move to Finland  <br className="sm:block hidden" /> {" "}
                                    <div className='flex'>
                                        <h1 className="">and study in English </h1>
                                    </div>
                                </h1>
                            </div>
                            <div>
                                <p className='font-poppins font-normal text-[#949DB1] md:text-[16px] text-[13px] md:leading-[23.85px] leading-[20px] max-w-[430px] mt-5'>Expand your horizons by studying in English in Finland with AfriProEdu! Immerse yourself in a world-class education while experiencing the unique Finnish culture. Our platform connects you to top universities and programs, offering a wide range of English-taught courses. Elevate your academic journey and prepare for a global future with AfriProEdu. Your international study adventure awaits!</p>
                                <div className='flex  mt-[36px]'>
                             <Link to="/explore-programs">

                                    <button type="button" 
                                    // onClick={viewCourse} 
                                    className="text-white bg-[#1DB459] font-medium rounded-[5px] text-[15px] md:px-[40px] md:py-4 px-6  py-2.5 md:mr-4 mr-8">Apply Now</button>
</Link>
                                </div>
                            </div>


                        </div>

                    </section>
                </div>
            </div>
            {/* End Section */}

            {/* Start Section */}
            <section className='body-font font-poppins md:pt-20 relative'>
                <div
                    style={{
                        backgroundImage: `url(${stepsBg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    className='sm:px-16 md:px-14 px-6 md:pb-44 pb-30 md:pt-16 pt-10  items-center'
                >
                    <div className=' flex justify-center items-center'>
                        <h1 className="md:text-[45px] text-[34px] font-bold md:leading-[55px] text-white">Begin your Academic
                            <h1>Journey in 4 Easy steps </h1>
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 gap-10 md:grid-cols-4 md:mt-[110px] mt-[50px]'>
                        <div className='flex-col'>
                            <div className='flex-1 flex space-x-2  items-start'>
                                <div className='bg-white text-black text-sm font-medium  mt-1 px-3 py-1.5 rounded'>1</div>
                                {/* <h3 className='mt-2 text-white'>------------</h3> */}
                                <h3 className='text-white md:text-[15px] text-[12px] mt-2 font-semibold'>Create an account </h3>
                            </div>
                            <div className='md:mt-[30px] mt-[25px]'>
                                {/* <h3 className='text-white text-[15px] font-semibold'>Create an account </h3> */}
                                <p className='text-white text-[12px] md:mt-[9px] font-normal leading-[18.8px]'>Get started by setting up your personalized account. It takes just minutes to register and access our platform's array of educational opportunities.
                                </p>
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='flex-1 flex space-x-2 items-start'>
                                <div className='bg-white text-black text-sm font-medium  mt-1 px-3 py-1.5 rounded'>2</div>
                                <h3 className='text-white md:text-[15px] text-[12px] mt-2 font-semibold'>Complete your profile  </h3>
                            </div>

                            <div className='md:mt-[30px] mt-[20px]'>

                                <p className='text-white text-[12px] md:mt-[9px] font-normal leading-[18.8px]'>Tell us about yourself! Fill in your profile details to help us match you with the perfect courses and universities that align with your aspirations.
                                </p>
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='flex-1 flex space-x-2 items-start'>
                                <div className='bg-white text-black text-sm font-medium  mt-1 px-3 py-1.5 rounded'>3</div>
                                <h3 className='text-white md:text-[15px] text-[12px] mt-2 font-semibold'>Select a course </h3>
                            </div>

                            <div className='md:mt-[30px] mt-[25px]'>

                                <p className='text-white text-[12px] mt-[9px] font-normal leading-[18.8px]'> Explore our curated selection of courses across various disciplines. Whether you're interested in arts, sciences, or technology, you'll find the ideal program to ignite your passion.</p>
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='flex-1 flex space-x-2 items-start'>
                                <div className='bg-white text-black text-sm font-medium  mt-1 px-3 py-1.5 rounded'>4</div>
                                <h3 className='text-white md:text-[15px] text-[12px] mt-2 font-semibold'>Secure Your enrollment </h3>
                            </div>

                            <div className='md:mt-[30px] mt-[20px]'>

                                <p className='text-white text-[12px] mt-[9px] font-normal leading-[18.8px]'>After choosing your course, it's time to make your payment. As you complete this step, you'll automatically secure a spot for the entrance exams. Stay tuned for communication on the exam date and time, propelling you towards a future of knowledge and growth. Your journey starts now with AfriProEdu!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End Section */}

            {/* Start Section */}
            <div className='bg-[#ffffff] sm:px-16 px-6 items-start' >

                <div className='xl:max-w-[1200px] w-full items-center flex justify-center'>
                    <section className='flex md:flex-row flex-col md:pt-16 py-6'>
                        <div className='flex-1 flex justify-center items-start flex-col'>
                            <div className="md:flex flex-row justify-between items-center w-full">
                                <h1 className="flex-1 font-poppins font-[900] md:text-[36px] text-[27px] text-black md:leading-[50px] leading-[38px]">
                                    Why Choose AfriProEdu <br className="sm:block hidden" /> {" "}
                                    <div className='flex'>
                                        <h1 className="">for Your Education Journey?
                                        </h1>
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <div className='flex-1 flex justify-center items-center md:ml-20'>
                            <p className={`font-poppins font-normal text-[#6C757D] md:text-[15px] text-[13px] md:leading-[23.85px] leading-[20px] max-w-[530px] mt-[30px] `}>
                                Opt for AfriProEdu and unlock a world of advantages: enhanced acceptance odds, substantial tuition savings, and hassle-free visa processing. Your educational aspirations deserve the best pathway, and we're here to make it happen!
                            </p>
                        </div>
                    </section>
                </div>


                <div className=' w-full mx-auto items-center flex justify-center'>
                    <section className='flex md:flex-row flex-col md:pb-16 py-6 '>
                        <div className='flex-1 flex justify-center items-start flex-col px-4 py-5'>

                            <ol className="relative border-l-2 border-[#D9D9D9]">
                                <li className="mb-5 ml-6">
                                    <div className="absolute w-[40px] h-[40px] bg-[#D7F5DC] rounded-full  -left-[22px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-base font-bold text-black ">Higher Admission Chances</time>

                                    <p className="mt-2 mb-4 text-sm font-normal text-[#949DB1] max-w-[300px]">We have strong collaborations with prestigious institutions, increasing your likelihood of acceptance into your desired program.
                                    </p>

                                </li>
                                <li className="mb-5 ml-6">
                                    <div className="absolute w-[40px] h-[40px] bg-[#D7F5DC] rounded-full  -left-[22px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-base font-bold text-black ">Tuition Discounts</time>

                                    <p className="mt-2 mb-4 text-sm font-normal text-[#949DB1] max-w-[300px]">Save big with exclusive tuition discounts, making quality education more accessible than ever. </p>

                                </li>
                                <li className=" ml-6">
                                    <div className="absolute w-[40px] h-[40px] bg-[#D7F5DC] rounded-full  -left-[22px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-base font-bold text-black ">Effortless Visa Processing</time>

                                    <p className="mt-2 mb-4 text-sm font-normal text-[#949DB1] max-w-[300px]">Our dedicated team streamlines the visa application process, ensuring a smooth transition from acceptance to enrollment. Join AfriProEdu for a seamless path to your academic success! </p>

                                </li>
                            </ol>
                        </div>
                        <div className='flex-1 flex justify-center items-center'>
                            <img src="/images/degree-img2.png" alt="hero" className='w-full' />
                        </div>
                    </section>
                </div>
            </div>
            {/* End Section */}


            {/* Start Section */}
            {/* <section className='bg-[#F0F5FE] body-font font-poppins  relative'>
                <div className='sm:px-16 md:px-14 px-6 md:pb-20 pb-10 md:pt-10 pt-6  items-center'>
                    <div className=' flex justify-center items-center text-center'>
                        <h1 className="md:text-[45px] text-[34px] font-bold md:leading-[45px] leading-[35px] text-black">Some of our
                            <h1>featured courses</h1>
                        </h1>
                    </div>


                    <div className='flex cursor-pointer justify-end space-x-3 md:mt-[50px] mt-[20px]' onClick={viewCourse}>
                        <h3>See all</h3>
                        <div className='mt-0'>
                            ➜
                        </div>
                    </div>


                    <div className='grid grid-cols-1 md:gap-10 gap-3 md:grid-cols-3 md:mt-[20px] mt-[10px]'>
                     {
                            courseList?.data?.slice(0, 3)?.map(
                                (datas: any, index: any) => (
                                    <NavLink to={`/course-details/${(datas?.title).replace(
                                 / /g,
                                 "-"
                               )}`}>
                                        <div className='bg-white p-3 rounded flex-col border border-[#D9D9D9]'>
                                            <div className='flex-1 flex justify-center items-center'>
                                                <img className="" src={datas?.image_url} alt={datas?.cover_photo} style={{ width: "370px", height: '188px' }} />

                                            </div>
                                            <div className='flex justify-between pt-2'>
                                                <h3 className='text-[#002147] md:text-[15px] text-[12px] font-normal'>{datas?.title}</h3>
                                                <div className='mt-1'>
                                                    ➜
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            )
                        }

                        

                    </div>


                </div>
            </section> */}

            {/* End Section */}

            {/* CTA Section */}
            {/* Start Section */}
            <div className=' sm:px-16 px-6 flex justify-center items-start md:pt-16 pt-8' >
                <div className='xl:max-w-[1280px] w-full'>
                    <section className='flex md:flex-row justify-between flex-col sm:py-16 py-6'>
                        <div className='bg-black flex-1 flex flex-row justify-between items-start rounded-[10px] pt-4'>
                            <div className='pt-[40px] md:pl-[24px] pl-[18px]'>
                                <h3 className='text-white md:text-[32px] text-[20px] font-bold md:leading-[32px] leading-[25px]'>A Journey to <br /> Excellence.</h3>
                                <p className='text-white mt-[20px] font-normal md:text-[16px] text-xs pb-3'>Connecting Africa to the world through education</p>
                            </div>

                            <img src="/images/cta-img.png" alt="hero" className='w-[50%]' />
                        </div>

                        <div className='bg-[#1DB459] flex-1 flex-row justify-between items-start rounded-[10px] md:ml-[120px] ml-0 mt-6 md:mt-0'>
                            <div className='pt-[40px] md:px-[24px] px-[18px]'>
                                <h3 className='text-white md:text-[32px] text-[20px] font-bold md:leading-[35.7px] leading-[27.7px]'>Sign up to our<br /> mailing list</h3>
                                <p className='text-white mt-[10px] md:text-base text-sm'>Stay up-to-date on the latest news, events, and promotions from AfriProEdu. You'll also receive exclusive discounts and offers that are only available to our mailing list subscribers.</p>
                            </div>
                            <div className="md:px-[24px] px-[18px] pt-[30px] pb-6">

                                <form>
                                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">

                                        <input type="search" id="search" className="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="" required />
                                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#1DB459] font-medium rounded-lg text-sm px-5 py-2">Subscribe</button>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </section>
                </div>
            </div>
            {/* End Section */}

            {/* Start Section */}
            <Footer />
            {/* End Section */}


        </>

    )
}

export default StudyInEnglish