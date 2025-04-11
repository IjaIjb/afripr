import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const SuccessSchoolModal = ({ open, onClose }:any) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      classNames={{
        modal: 'rounded-lg p-0  mx-auto overflow-hidden',
        overlay: 'bg-black bg-opacity-50'
      }}
    >
      <div className="p-6">
        <div className='flex justify-center'>
        <h2 className="text-2xl  max-w-[300px] font-semibold mb-2 text-center">
        Admission application submitted
        </h2>
        </div>
<div className='flex justify-center mt-2'>
        <p className="text-gray-600 max-w-[300px] flex justify-center text-center mb-6">
        You application for admission processing have been submitted successfully 
        </p>
        </div>
        
        <h3 className="font-bold text-[22px] mt-10 text-center mb-4">What's next</h3>
        
        <p className="text-center mb-2">Book free consultation</p>
        
        {/* <div className="bg-yellow-50 p-3 rounded-md mb-4">
          <p className="text-amber-800 text-sm">
            Note: It's important you register for consultation
          </p>
        </div> */}

        <div className="p-3 rounded-md my-3 max-w-[300px] bg-[#FFF1CC] mt-2 text-[#987104]">
            <h5 className="text-[14px]">
            Note: It's important you register for consultation

            </h5>
          </div>
        
        <Link 
          to="/consultation-booking" 
          className="block w-full py-3 bg-green-500 hover:bg-green-600 text-white text-center rounded-md"
        >
          Book consultation
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessSchoolModal;