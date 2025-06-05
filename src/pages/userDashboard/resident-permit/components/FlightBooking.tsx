import React from "react";
import { Link } from "react-router-dom";
function FlightBooking() {
  return (
    <>
      <div className="mt-5 flex-col justify-center items-start lg:px-32">
        <h3 className="text-center text-[16px] font-bold">Flight Booking</h3>
        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-10 mt-[25px] rounded-[15px]">
          {/* <!-- Personal Documents Content --> */}
          <div className="block ">
            <div className="">
              <div className="mb-5">
                <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                  <li>
                    AfriProEdu airport pick-up support starts on pre-established
                    arrival dates (contact CS team for more info)
                  </li>
                  <li>
                    If students are arriving earlier, they must book their own
                    accommodation for the earlier days.
                  </li>
                  <li>
                    The flights prices can be fluctuate based on the time you
                    book the flight - so we recommend you to book as early as
                    possible
                  </li>
                  <li>We suggest Qatar Airlines for African students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightBooking;
