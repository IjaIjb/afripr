import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const filterOptions: Record<string, { label: string; icon: string; options: string[] }> = {
    Program: {
      label: "Program",
      icon: "/images/home/programFilterHero.svg", // Replace with actual path
      options: ["Bachelors", "Masters", "PhD"],
    },
    Region: {
      label: "Region",
      icon: "/images/home/regionFilterHero.svg",
      options: ["Asia", "Europe", "North America", "Africa"],
    },
    Country: {
      label: "Country",
      icon: "/images/home/countryFilterHero.svg",
      options: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
  "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia",
  "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
  "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Cayman Islands", "Central African Republic", "Chad", "Chile", "China",
  "Colombia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire", "Croatia",
  "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada",
  "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
  "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives",
  "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
  "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],
    },
    Budget: {
      label: "Budget",
      icon: "/images/home/budgetFilterHero.svg",
      options: ["$1,000", "$2,000", "$3,000", "$4,000", "$5,000", "above $5,000"],
    },
  };
  return (
    <div>
      <div className="relative flex justify-center  w-full mt-[120px] lg:mt-[40px]">
        <div className="w-full hidden absolute  top-[130px] inset-0 md:flex justify-center">
          <img
            src="/images/herobg.png"
            className="w-full object-cover"
            alt="/"
          />
        </div>
        <div className="w-full">
          <div className="relative w-full lg:mb-0 mb-10 flex flex-col ">
            {/* Content */}
            <div className="relative lg:flex justify-between items-center">
              <div className="lg:">
                {/* Header Section */}
                <div className="">
                  <span className="bg-[#D7F5DC] text-primary text-sm px-5 py-2 rounded-md font-semibold">
                    Let AfriProEdu
                  </span>
                  <div className="relative">
                    <h1 className="text-[38px] md:text-[48px] max-w-[456px] leading-[50px] font-bold text-[#333333] mt-4">
                      Make your study abroad dream a{" "}
                      <i className="text-primary">reality</i>
                    </h1>
                    <div className="absolute lg:block hidden -top-4 left-[140px]">
                      <img
                        src="/images/home/curveLine.svg" // Replace with the image path
                        alt="Curve Line"
                        className="transform rotate-[4deg] origin-bottom-left"
                      />
                    </div>
                  </div>

                  <p className="text-gray-700 max-w-[489px] mt-10">
                    Simplified access to over 10,000 courses in over 3000
                    schools across 45 countries globally. Afrivina supports
                    aspiring students with resources to explore global
                    education.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex lg:flex-row flex-col mt-6 gap-4">
                  <Link
                    to="/explore-programs"
                    className="bg-primary text-center uppercase hover:bg-green-700 text-white py-3 px-6 rounded-full font-medium"
                  >
                    Explore Programs
                  </Link>
                  <Link to="/psychometric-test" className="bg-[#D7F5DC] text-center hover:bg-gray-300 uppercase text-[#1DB459] border border-[#1DB459] py-3 px-6 rounded-full font-medium">
                      Psychometric Test
                    {/* </button> */}
                  </Link>
                </div>

                {/* Get Assistance Section */}
                <div className=" mt-4">
                  <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/money.svg" // Replace with the image path
                        alt="Student"
                        className=""
                      />
                      <span className="text-[#494949] text-[14px]">
                        Get a study loan
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/agent.svg" // Replace with the image path
                        alt="Student"
                        className=""
                      />
                      <span className="text-[#494949] text-[14px]">
                        Become an agent
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mt-1 gap-2">
                    <img
                      src="/images/star.svg" // Replace with the image path
                      alt="Student"
                      className=""
                    />
                    <span className="text-[#494949] text-[14px]">
                      Become an agent
                    </span>
                  </div>
                </div>
              </div>
              {/* Hero Image */}
              <div className="flex justify-center ">
              <img
                src="/images/hero.svg" // Replace with the image path
                alt="Student"
                className=""
              />
              </div>
            </div>

            {/* Search Filters */}
            <div className="flex justify-center">
              <div className="absolute lg:block hidden bottom-0  mt-10 px-4">
                <div className="bg-white rounded-lg shadow-md p-6 flex gap-5 items-center justify-between max-w-5xl mx-auto">
                <div className="flex justify-between">
  {Object.entries(filterOptions).map(([key, { label, icon, options }]) => (
    <div key={key} className="flex-1 mx-2">
      <div className="flex gap-1 items-center">
        <img src={icon} alt={label} className="w-4 h-4" /> {/* Icon */}
        <label className="text-[20px] font-semibold text-primary">{label}</label>
      </div>
      <select
        className="block w-full mt-1 px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        defaultValue=""
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  ))}
</div>
                  {/* Search Button */}
                  <Link 
                   to="/explore-programs"
                    className="bg-green-600 text-center hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium mt-6 sm:mt-0">
                    Search
                  </Link>
                </div>
              </div>

              <div className="absolute block lg:hidden -bottom-12  mt-10 ">
                <div className="bg-white rounded-lg shadow-md p-2  max-w-5xl mx-auto">
               <div className="grid grid-cols-2 items-center justify-between">
                  {/* Filters */}
                  {Object.entries(filterOptions).map(([key, { label, icon, options }]) => (
    <div key={key} className="flex-1 mx-2">
      <div className="flex gap-1 items-center">
        <img src={icon} alt={label} className="w-4 h-4" /> {/* Icon */}
        <label className="text-[16px] font-semibold text-primary">{label}</label>
      </div>
      <select
        className="block w-full mt-1 px-4 py-2 text-[12px] text-gray-400 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        defaultValue=""
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  ))}
</div>
                  {/* Search Button */}
                  <div className="flex justify-center text-center mt-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium mt-6 sm:mt-0">
                    Search
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
