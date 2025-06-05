import React from "react";
import UserDashboardLayout from "../../../component/UserDashboardLayout";
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal'
import { Link } from "react-router-dom";
import DocumentsRequired from "./components/DocumentsRequired";
import TravelInsurance from "./components/TravelInsurance";
import EnterFindland from "./components/EnterFindland";
import RPExtension from "./components/RPExtension";
import BeforeArriving from "./components/BeforeArriving";
import ImportantDocuments from "./components/ImportantDocuments";
import FlightBooking from "./components/FlightBooking";
const ResidentPermit = () => {
     const [toggleOne, setToggleOne] = React.useState(false);
    const [toggleTwo, setToggleTwo] = React.useState(false);
    let [screen, setScreen] = React.useState<any>(1);
      let [showScreen, setShowScreen] = React.useState<any>(1);
    let [infoHubScreen, setInfoHubScreen] = React.useState<any>(1);

    
    const [open, setOpen] = React.useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

        const handleSubmit = (amount:any,currency:any) => {
        const formData = new FormData()
        formData.append('amount',amount)
        formData.append('currency',currency)
      
    }
  return (
    <UserDashboardLayout>
         <div className="relative bg-blueGray-100">

                <div className={showScreen === 1 ? "block " : "hidden"}>
                    {/* <InformationHub/> */}

                    <div className='md:py-3'>
                        <div className='bg-gradient-to-b from-[#1DB459] to-[#0174B4] min-h-screen max-w-screen-xl mx-auto'>
                            <div className='flex justify-center items-center py-32'>
                                {/* <div className={infoHubScreen === 1 ? 'block' : "hidden"}>
                                    <div className='border border-[#F0F5FE] rounded-[20px] p-2'>
                                        <div className='bg-white border border-[#F0F5FE] rounded-[15px] px-[32px] py-[22px]'>
                                            <div>
                                                <h3 className='text-[#1DB459] text-[24px] text-center font-bold'>Welcome to Afri Pro Edu's<br />
                                                    Information Hub</h3>
                                                <p className='mt-[20px] text-[#777777] text-[14px] font-light text-center' >Your go-to resource for everything related<br /> to entering Finland! </p>
                                                <div className='mt-[22px]'>
                                                    <form>
                                                        <div className="mb-4 w-full">
                                                            <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                                                Username
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className=" border border-[#D9D9D9] text-[#777777] text-sm rounded-[5px] block w-full p-3"
                                                                placeholder=""
                                                                name="username"
                                                                defaultValue={userLoginData?.id}
                                                                disabled
                                                            />
                                                        </div>
                                                        <div className={changeBtn === 1 ? " hidden" : " block mb-2 w-full"}>
                                                            <label className="block mb-2 mt-2 text-sm font-semibold text-[#0A2E04]">
                                                                Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className=" border border-[#D9D9D9] text-[#fcdfdf] text-sm rounded-[5px] block w-full p-3"
                                                                placeholder="Enter OTP"
                                                                name="password"

                                                            />
                                                        </div>
                                                        <span className='text-[10px] text-[#838383]'>Please check your registered mail address for a one time password upon request</span>

                                                        <div className={changeBtn === 1 ? "flex justify-center mt-3 " : "hidden"}>
                                                            <button
                                                                type="button"
                                                                onClick={() => setChangeBtn(2)}
                                                                className=" text-white bg-[#1DB459] hover:bg-[#05401C] font-medium rounded-lg text-sm px-[70px] py-3 mb-2"
                                                            >
                                                                Request OTP
                                                            </button>
                                                        </div>
                                                        <div className={changeBtn === 2 ? "flex justify-center mt-3 " : "hidden"}>
                                                            <button
                                                                type="button"
                                                                onClick={() => setInfoHubScreen(2)}
                                                                className=" text-white bg-[#1DB459] hover:bg-[#05401C] font-medium rounded-lg text-sm px-[70px] py-3 mb-2"
                                                            >
                                                                Process
                                                            </button>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className={infoHubScreen === 1 ? 'block' : "hidden"}>
                                    <div className='border border-[#F0F5FE] rounded-[20px] p-2'>
                                        <div className='bg-white border border-[#F0F5FE] rounded-[15px] px-[32px] pt-[22px] pb-[50px]'>
                                            <div>
                                                <h3 className='text-[#1DB459] text-[24px] text-center font-bold'>Please Select an Option</h3>

                                                <div className='mt-[22px]'>
                                                    <div
                                                        onClick={onOpenModal}
                                                        className='mb-5 border border-[rgb(179,179,179)] rounded-[5px] py-[16px] md:px-[48px] px-[15px] flex justify-between cursor-pointer'>
                                                        <h3 className='text-[12px] text-[#777777]'>Allow AfriProEdu continue my application<br /> process <span className='text-[#1DB459] font-semibold'>(This comes with a 400 Euros Fee )</span> </h3>
                                                        <div className='border border-[#1DB459] h-[17px] w-[17px] rounded-full place-content-center items-center flex justify-center'></div>
                                                    </div>

                                                    <div
                                                        onClick={() => setShowScreen(2)}
                                                        className='mb-5 border border-[#B3B3B3] rounded-[5px] py-[16px] px-[15px] md:px-[48px] flex space-x-10 cursor-pointer'>
                                                        <h3 className='text-[12px] text-[#777777]'>Continue Resident Permit Application Myself <br /> <span className='text-[#1DB459] font-semibold'>(This comes with a 200 Euros Fee )</span></h3>
                                                        <div className='border border-[#1DB459] h-[17px] w-[17px] rounded-full place-content-center items-center flex justify-center'></div>
                                                    </div>
                                                    <Link to="/">
                                                        <div className='mb-5 border border-[#B3B3B3] rounded-[5px] py-[16px] px-[15px] md:px-[48px] flex justify-between cursor-pointer'>
                                                            <h3 className='text-[12px] text-[#777777]'>Leave the platform and allow an external<br /> agent take over </h3>
                                                            <div className='border border-[#1DB459] h-[17px] w-[17px] rounded-full place-content-center items-center flex justify-center'></div>
                                                        </div>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={showScreen === 2 ? "block " : "hidden"}>
                    {/* <UserNavbar title="Resident Permit Application" /> */}
                    <div className='md:py-3 '>
                        <div className='bg-[#F9F9F9] pt-[22px] pb-32'>
                            {/* <!-- Header --> */}
                            <div className='md:px-16 px-6'>
                                 {/* <!--Desktop view Header --> */}
                                <div className='hidden lg:flex flex-row justify-center space-x-5 '>
                                    <div className='relative'>
                                        <div
                                            onClick={() => setToggleOne(!toggleOne)}
                                            className=' border border-[#1DB459] hover:bg-[#1DB459] mb-3 hover:text-white rounded-[30px] text-[12px] py-[10px] px-[16px] cursor-pointer'>Resident Permit Documents</div>

                                        <div className={`${toggleOne ? 'block' : 'hidden'} px-4 py-6 bg-white rounded-[10px] border border-[#1DB459] text-center absolute -bottom-56 my-0 min-w-[259px]`}>
                                            <div onClick={() => { setScreen(1); setToggleOne(!toggleOne) }} className='py-[11px] text-[14px] w-full hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>
                                                Documents Required
                                            </div>
                                            <div onClick={() => { setScreen(2); setToggleOne(!toggleOne) }} className='py-[11px]  text-[14px] hover:bg-[#1DB459] hover:text-white hover:rounded-[33px] cursor-pointer'>Travel Insurance</div>
                                            <div onClick={() => { setScreen(3); setToggleOne(!toggleOne) }} className='py-[11px]  text-[14px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>Apply on EnterFinland</div>

                                            <div onClick={() => { setScreen(4); setToggleOne(!toggleOne) }} className='py-[11px]  text-[14px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>RP Extension</div>
                                        </div>
                                    </div>

                                    <div className='relative '>
                                        <div
                                            onClick={() => setToggleTwo((prev) => (!prev))}
                                            className='border border-[#1DB459] hover:bg-[#1DB459] mb-3 hover:text-white rounded-[30px] text-[12px] py-[10px] px-[50px] cursor-pointer'>Pre-departure</div>

                                        <div className={`${toggleTwo ? 'block' : 'hidden'} px-4 py-8 bg-white rounded-[10px] border border-[#1DB459] text-center absolute -bottom-48 my-0 min-w-[259px]`}>
                                            <div onClick={() => { setScreen(5); setToggleTwo(!toggleTwo) }} className='py-[11px] pl-[8px] text-[14px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>Before Arriving</div>
                                            <div onClick={() => { setScreen(6); setToggleTwo(!toggleTwo) }} className='py-[11px] pl-[8px] text-[14px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>Important Documents</div>
                                            <div onClick={() => { setScreen(7); setToggleTwo(!toggleTwo) }} className='py-[11px] pl-[8px] text-[14px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>Flight Booking</div>

                                        </div>
                                    </div>

                                    <div className='relative '>
                                        <div
                                            onClick={onOpenModal}
                                            className='border border-[#1DB459] hover:bg-[#1DB459] mb-3 hover:text-white rounded-[30px] text-[12px] py-[10px] px-[50px] cursor-pointer'>Request Assistance </div>


                                    </div>

                                </div>
                                 {/* <!--Mobile view Header --> */}
                                <div className='lg:hidden grid grid-cols-2 justify-center space-x-3'>
                                    <div className='relative'>
                                        <div
                                            onClick={() => setToggleOne(!toggleOne)}
                                            className=' border border-[#1DB459] hover:bg-[#1DB459] mb-3 hover:text-white rounded-[30px] text-[10px] py-[8px] px-[14px] cursor-pointer'>Resident Permit Documents
                                            </div>

                                        <div className={`${toggleOne ? 'block' : 'hidden'} px-4 py-6 bg-white rounded-[10px] border border-[#1DB459] text-center absolute lg:-bottom-56 -bottom-60 my-0 lg:min-w-[259px]`}>
                                            <div onClick={() => { setScreen(1); setToggleOne(!toggleOne) }} className='py-[11px] lg:text-[14px] text-[12px] w-full hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>
                                                Documents Required
                                            </div>
                                            <div onClick={() => { setScreen(2); setToggleOne(!toggleOne) }} className='py-[11px]  lg:text-[14px] text-[12px] hover:bg-[#1DB459] hover:text-white hover:rounded-[33px] cursor-pointer'>Travel Insurance</div>
                                            <div onClick={() => { setScreen(3); setToggleOne(!toggleOne) }} className='py-[11px]  lg:text-[14px] text-[12px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>Apply on EnterFinland</div>

                                            <div onClick={() => { setScreen(4); setToggleOne(!toggleOne) }} className='py-[11px]  lg:text-[14px] text-[12px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>RP Extension</div>
                                        </div>
                                    </div>

                                    <div className='relative '>
                                        <div
                                            onClick={() => setToggleTwo((prev) => (!prev))}
                                            className='border border-[#1DB459] hover:bg-[#1DB459] mb-3 hover:text-white rounded-[30px] text-[10px] py-[8px] px-[14px] cursor-pointer'>Pre-departure</div>

                                        <div className={`${toggleTwo ? 'block' : 'hidden'} px-4 py-8 bg-white rounded-[10px] border border-[#1DB459] text-center absolute -bottom-48 my-0 lg:min-w-[259px]`}>
                                            <div onClick={() => { setScreen(5); setToggleTwo(!toggleTwo) }} className='py-[11px] lg:pl-[8px] lg:text-[14px] text-[12px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>Before Arriving</div>
                                            <div onClick={() => { setScreen(6); setToggleTwo(!toggleTwo) }} className='py-[11px] lg:pl-[8px] lg:text-[14px] text-[12px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>Important Documents</div>
                                            <div onClick={() => { setScreen(7); setToggleTwo(!toggleTwo) }} className='py-[11px] lg:pl-[8px] lg:text-[14px] text-[12px] hover:bg-[#1DB459] hover:rounded-[33px] hover:text-white cursor-pointer'>Flight Booking</div>

                                        </div>
                                    </div>

                                    <div className='relative '>
                                        <div
                                            onClick={onOpenModal}
                                            className='border border-[#1DB459] hover:bg-[#1DB459] mb-3 hover:text-white rounded-[30px] text-[10px] py-[8px] px-[16px] cursor-pointer'>Request Assistance </div>


                                    </div>

                                </div>
                            </div>

                            {/* <!-- body Content / Documents Required  --> */}
                            <div className={screen === 1 ? "block " : "hidden"}>
                                <DocumentsRequired />
                            </div>

                            {/* <!-- body Content / Travel Insurance  --> */}
                            <div className={screen === 2 ? "block " : "hidden"}>
                                <TravelInsurance />
                            </div>

                            {/* <!-- body Content / EnterFinland  --> */}
                            <div className={screen === 3 ? "block " : "hidden"}>
                                <EnterFindland />
                            </div>

                            {/* <!-- body Content / RP Extension   --> */}
                            <div className={screen === 4 ? "block " : "hidden"}>
                                <RPExtension />
                            </div>

                            {/* <!-- body Content / Before Arriving   --> */}
                            <div className={screen === 5 ? "block " : "hidden"}>
                                <BeforeArriving />
                            </div>

                            {/* <!-- body Content / Important Documents   --> */}
                            <div className={screen === 6 ? "block " : "hidden"}>
                                <ImportantDocuments />
                            </div>

                            {/* <!-- body Content / Important Documents   --> */}
                            <div className={screen === 7 ? "block " : "hidden"}>
                                <FlightBooking />
                            </div>

                        </div>


                    </div>
                </div>





                {/* <Modal open={open} onClose={onCloseModal} center>
                    <div className='md:max-w-md  body-font font-poppins'>
                        <div className="flex flex-wrap justify-center mt-4">
                            <h2 className='text-center text-[#1DB459] font-bold md:text-[32px] text-[22px]'>Request Assistance</h2>
                            <p className='text-center text-[#777777] md:text-[14px] text-[12px] mt-5 font-light'>By seeking assistance, you acknowledge and agree to the payment of a one-time <span className='font-bold'>non-refundable</span> fee of </p>
                            <h1 className='text-center mt-6 md:text-[20px] text-[14px] text-[#1DB459] font-semibold'>€400.00</h1>
                          <p className='text-center text-[#777777] md:text-[14px] text-[12px]  font-light mt-3'>for the processing of your documents for entry into Finland. </p>
                            <p className='text-center text-[#777777] md:text-[14px] text-[12px]  font-light mt-6'>Upon your request, our Customer Service team will assume responsibility for guiding you through the processing procedures.</p>
                            
                            <div className='flex justify-center mx-auto w-full mt-[23px]'>
                                <button
                                    type="button"
                                    onClick={()=>handleSubmit('400','EUR')}
                                    className=" text-white bg-[#1DB459] rounded-[33px] font-medium text-sm md:px-[20px] px-3 md:py-3 py-2.5 mr-2 mb-2"
                                >
                                   Pay in Euro
                                </button>

                                <button
                                    type="button"
                                    onClick={()=>handleSubmit('660000','NGN')}
                                    className=" text-white bg-[#1DB459] rounded-[33px] font-medium text-sm md:px-[20px] px-3 md:py-3 py-2.5 mr-2 mb-2"
                                >
                                    Pay in Naira
                                </button>

                            </div>
                            <div className='flex justify-center mx-auto w-full mt-[20px]'>
                                <button
                                    type="button"
                                    className=" text-black bg-[#EEEEEE] rounded-[33px]  font-medium text-sm md:px-[112px] px-8 md:py-3 py-2.5 mr-2 mb-2"
                                    onClick={onCloseModal}
                                >
                                    No, Thank You
                                </button>
                            </div>

                        </div>
                    </div>

                </Modal> */}
<Modal open={open} onClose={onCloseModal} center>
    <div className='md:max-w-lg body-font font-poppins'>
        <div className="px-6 py-8">
            {/* Header Section */}
            <div className="text-center mb-6">
                {/* <div className="w-16 h-16 bg-gradient-to-br from-[#1DB459] to-[#0174B4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </div> */}
                <h2 className='text-[#1DB459] font-bold text-2xl md:text-3xl mb-2'>Request Assistance</h2>
                <p className='text-[#777777] text-sm font-medium'>Thanks for your interest in AfriproEdu</p>
            </div>

            {/* Notice Section */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-[#1DB459] p-4 rounded-r-lg mb-6">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-[#1DB459] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className='text-[#555555] text-sm leading-relaxed'>
                            Our online payment system is undergoing a brief update related to currency conversion. To ensure a seamless experience, please reach out to our customer service team for payment instructions and dedicated support.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
                <h3 className='text-[#333333] font-semibold text-lg text-center mb-4'>Get in Touch</h3>
                
                {/* WhatsApp Section */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.673.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-[#333333] text-sm">WhatsApp Only</p>
                            <p className="text-xs text-[#666666]">Click to chat with us</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a 
                            href="https://wa.me/2348131470992" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center justify-between bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-3 transition-colors duration-200 group'
                        >
                            <span className='text-[#333333] font-medium text-sm'>+234 813 147 0992</span>
                            <svg className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <a 
                            href="https://wa.me/2347012330629" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center justify-between bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-3 transition-colors duration-200 group'
                        >
                            <span className='text-[#333333] font-medium text-sm'>+234 701 233 0629</span>
                            <svg className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Email Section */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-[#333333] text-sm">Email Support</p>
                            <p className="text-xs text-[#666666]">Send us an email</p>
                        </div>
                    </div>
                    <a 
                        href="mailto:hello@afriproedu.com" 
                        className='flex items-center justify-between bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-3 transition-colors duration-200 group'
                    >
                        <span className='text-[#333333] font-medium text-sm'>hello@afriproedu.com</span>
                        <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Close Button */}
            <div className='flex justify-center mt-8'>
                <button
                    type="button"
                    className="bg-gray-100 hover:bg-gray-200 text-[#333333] rounded-full font-medium text-sm px-8 py-3 transition-colors duration-200 shadow-sm hover:shadow-md"
                    onClick={onCloseModal}
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</Modal>

            </div>
    </UserDashboardLayout>
  );
};

export default ResidentPermit;
