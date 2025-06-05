import React, {useState} from 'react'
import { NavLink, useSearchParams, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import { MutatingDots } from 'react-loader-spinner';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal'
import { MdOutlineMail } from 'react-icons/md';
import { TbBrandWhatsapp } from 'react-icons/tb';
import Navbar from '../../component/Navbar';
import LoadingSpinner from '../../component/UI/LoadingSpinner';
function LUTApplicationForm() {
    const params: any = useParams();
   let details: string = decodeURIComponent(params?.course); // Decode the URL parameter
    console.log(details)
    
    // Since this is a single course, no need to split
    const programs = [details]; // Just wrap it in an array
    
  const [userData, setUserdata] = React.useState({
    'study_program': "",
    'first_name': "",
    'last_name': "",
    'other_name': "",
    'nationality': "",
    'date_of_birth': "",
    'gender': "",
    'place_and_country_of_birth': "",
    'passport_no': "",
    'national_id_no': "",
    'email': "",
    'phone_number': "",
    'country_of_residence':"",
    'address': "",
    'postal_code': "",
    'city_and_country': "",
    'native_lang': "",  
    'secondary_degree_in_original_lang': "",
    'secondary_degree_in_eng_lang': "",
    'have_graduated': "",
    'date_for_secondary_degree': "",
    'name_of_secondary_institution': "",
    'country_of_secondary_institution': "",
   
});

const navigate = useNavigate();
const [open, setOpen] = useState(true);
const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);

const [openPayment, setOpenPayment] = useState(false);
const onOpenPaymentModal = () => setOpenPayment(true);
const onClosePaymentModal = () => setOpenPayment(false);



let [langSkills, setLangSkills] = React.useState<any>('');
let [scholarship, setScholarship] = React.useState<any>('');
const [loader, setLoader] = React.useState<boolean>(false);
const [searchParams, setSearchParams] = useSearchParams();

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userData, [name]: value });
};


if (searchParams.get('tx_ref')) {
    // console?.log('ddd')
    if (searchParams.get('status') == 'cancelled') {
        navigate('/')
    }

    // AuthApis.outsidePaymentCallback(searchParams.get('tx_ref'), searchParams.get('status')).then(
    //     (response: any) => {
    //         if (response?.data) {
    //             console?.log(JSON.parse(response?.data?.data)?.data)
    //             AuthApis.sendMail(JSON.stringify(JSON.parse(response?.data?.data)?.data)).then(
    //                 (response2: any) => {
    //                     if (response2?.data) {
    //                         navigate('/degree-payment-successful')
    //                         console?.log(response2?.data);
    //                     }
    //                 }
    //             )
    //             if (response?.data?.success === true) {
    //                 //navigate(response?.data?.data);
    //             }
    //         } else {
    //             // toast.warn('Invalid Login Credentials');
    //         }
    //     }
    // ).catch(function (error) {
    //     // handle error
    //     console.log(error.response.data);
    // }).finally(() => {
    //     // toast.error("No Internet Connection");

    // });
}


const handleSubmit = React.useCallback(
    (e: any) => {
        setLoader(true)
        e.preventDefault();
        const userData2 = new FormData();
        userData2.append('study_program', userData?.study_program);
        userData2.append('first_name', userData?.first_name);
        userData2.append('last_name', userData?.last_name);
        userData2.append('other_name', userData?.other_name);
        userData2.append('nationality', userData?.nationality);
        userData2.append('national_id_no', userData?.national_id_no);
        userData2.append('email', userData?.email);
        userData2.append('phone_number', userData?.phone_number);
        userData2.append('country_of_residence', userData?.country_of_residence);
        userData2.append('address', userData?.address);
        userData2.append('postal_code', userData?.postal_code);
        userData2.append('city_and_country', userData?.city_and_country);
        userData2.append('native_lang', userData?.native_lang);
        userData2.append('date_of_birth', userData?.date_of_birth);
        userData2.append('gender', userData?.gender);
        // must not be required
        // userData2.append('place_and_country_of_birth', userData?.place_and_country_of_birth);
      
      // must not be required
        // userData2.append('passport_no', userData?.passport_no);
        userData2.append('have_graduated', userData?.have_graduated);
        userData2.append('secondary_degree_in_eng_lang', userData?.secondary_degree_in_eng_lang);
        userData2.append('secondary_degree_in_original_lang', userData?.secondary_degree_in_original_lang);
        userData2.append('date_for_secondary_degree', userData?.date_for_secondary_degree);
        userData2.append('name_of_secondary_institution', userData?.name_of_secondary_institution);
        userData2.append('country_of_secondary_institution', userData?.country_of_secondary_institution);
       
        userData2.append('langSkills', langSkills);
// must not be required
        // userData2.append('scholarship', scholarship);

        // AuthApis.registerLuth(userData2).then(
        //     (response: any) => {
        //         if (response?.data) {
        //             toast.success(response?.data?.message);
        //             console?.log(response?.data)
        //             setLoader(false)
        //             onOpenPaymentModal()
        //             // setRecall('response?.data?.message')
        //             // navigate('/wallet');
        //             // dispatch(login({ email: userLoginData?.email, token: userLoginData?.token, id: userLoginData?.id, name: response.data.data.name,data:response.data.data}))
        //         }
        //     }
        // ).catch((err) => {
        //     if (err?.response?.status == 422) {
        //         toast.error('Form not rightly filled. Kindly Cross check.');
        //     } else {
        //         toast.error('Some error occured.Please try again');
        //     }


        // }).finally(() => {

        // });
    },
    [ userData, langSkills, scholarship, loader,  ]
);



    const [openPaymentProof, setOpenPaymentProof] = useState(false);
    const onOpenPaymentProofModal = () => {
       
        setOpenPaymentProof(true);
    };
    const onClosePaymentProofModal = () => {
        setOpenPaymentProof(false);
        
        window.location.reload()
    };
const makeDollarPayment = () => {
    // e.preventDefault();
    onClosePaymentModal()
    const formData = new FormData()
    formData.append('amount', '150')
    formData.append('first_name', userData?.first_name)
    formData.append('last_name', userData?.last_name)
    formData.append('email', userData?.email)
    formData.append('currency', 'EUR')
    // AuthApis.makeCoursePayment(formData).then(
    //     (response: any) => {
    //         if (response?.data) {
    //             console.log(response)
    //             if (response?.data?.success === true) {
    //                 console?.log(response?.data)
    //                 if (response?.data?.payment_url) {
    //                     window.open(response?.data?.payment_url, '_blank');
    //                     onOpenPaymentProofModal()
    //                     // window.location.replace(response?.data?.payment_url);
    //                 } else if (response?.data?.message) {
    //                     toast.warn(response?.data?.message);
    //                 } else {
    //                     toast.error('Something went wrong!');
    //                 }

    //             }
    //         } else {
    //             // toast.warn('Invalid Login Credentials');
    //         }
    //     }
    // ).catch(function (error) {
    //     // handle error
    // }).finally(() => {
    //     // toast.error("No Internet Connection");

    // })
}


  return (
    <>
            <Navbar />
            {/* <!-- Start block --> */}
            <section className='md:pt-20 pt-20'>
                <div className='bg-[#FBFBFB] sm:px-16 px-6 md:flex md:justify-center items-start pt-10 pb-8'>
                    <div className=' w-full mx-auto'>
                        <div className='flex justify-center'>
                        <h1 className='md:text-[30px] text-center text-[20px] font-semibold'>Welcome to the application page</h1>
                        </div>
                        <div className='flex-col justify-center text-center mt-4'>
                            {/* <h3>Welcome to apply to the Bachelor's programs in Technology</h3> */}
                            <p>Please read these instructions carefully before filling in the application form:</p>

                        </div>
                        <div className='md:pr-60 md:pl-60 mx-4 mt-10'>
                          {/* <h3 className='text-[16px] font-semibold mb-2'>You are eligible to apply, if:</h3> */}
                            {/* <ul className=" space-y-1 text-gray-500 list-disc list-outside pl-4">
                                <li>You have completed or will complete a degree outside of Finland by 31 August 2024 that gives you the eligibility for corresponding university studies in your home country.</li>
                                <li>You may apply to one Bachelor's degree programme. If accepted, the studies begin in autumn 2024.</li>
</ul> */}
{/* <h3 className='text-[16px] font-semibold  mt-2'>Submit your application by the deadline of 10 August 2024 at 15:00 (UTC +3).</h3> */}
                            {/* <p className='text-gray-500'>You can only apply to one programme.</p> */}
                            <h3 className='text-[16px] font-semibold mb-2 mt-2'>Further instructions:</h3>
                            <ul className=" space-y-1 text-gray-500 list-disc list-outside pl-4">
                                <li>You will receive a confirmation email after you have submitted your application. There will be a link in the email if you wish to modify your application.</li>
                                <li>Please upload the required documents preferably in PDF or JPEG form. Combine all individual pages for each document into the one required document. Make sure the documents are readable and named clearly, for example 'Degree certificate' or 'Transcript of records'.</li>
                                <li>If you fail to provide the required documents when submitting your application, you will receive an email with a personal deadline for supplementing the missing documents. The required documents must be submitted by the given deadline; otherwise we are unable to process your application. No hard copies to be mailed.</li>
                                <li>You can only submit one (1) application form. If you submit several applications under a different email address, the one submitted first will be taken into consideration. The others will be discarded.</li>
                               
</ul>

                        </div>
                        <div className='md:pr-40 md:pl-40 mx-4 mt-10'>
                            <form onSubmit={handleSubmit}>
                                <hr />
                                <h3 className='mt-5 mb-6 font-medium text-[20px]'>APPLICATION OPTIONS</h3>
                                <div className="mb-6 w-full">
                                    <label
                                        htmlFor="study_program"
                                        className="block text-[#0A2E04] text-[14px] font-semibold mb-2 "
                                    >
                                        Add Study Program<span className='text-[#EE1D52] font-bold'> *</span>
                                    </label>

                                    <select
                                        id="study_program"
                                        name="study_program"
                                        onChange={handleChange}
                                        required
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm   block w-full p-2.5 "
                                    >
                                        <option selected></option>
                                        {programs.map((program: string, index: number) => (
    <option key={index} value={program}>
      {program} 
    </option>
  ))}
                                    </select>


                                    {/* <select
                                        id="study_program"
                                        name="study_program"
                                        onChange={handleChange}
                                        required
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm   block w-full p-2.5 "
                                    >
                                        <option selected></option>
                                        <option value="electrical engineering">Electrical Engineering (Double degree)</option>
                                        <option value="energy technology">Energy Technology (Double degree)</option>
                                        <option value="industrial engineering and management">Industrial Engineering and Management</option>
                                        <option value="meachanical engineering">Mechanical Engineering (Double degree)</option>
                                        <option value="technology engineering sci">Technology and Engineering Science</option>
                                        <option value="bachelor of business administration, international business">Bachelor of Business Administration, International Business</option>
                                        <option value="bachelor of hospitality management, tourism">Bachelor of Hospitality Management, Tourism</option>
                                        <option value="bachelor of health care, paramedic nurse">Bachelor of Health Care, Paramedic Nurse</option>
                      
                                       
                                    </select> */}
                                </div>
                                

                                <hr />
                                <h3 className='mt-5 mb-6 font-medium text-[20px]'>PERSONAL INFORMATION</h3>
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        First Name<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder="Enter Name"
                                        name="first_name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Last Name<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder="Enter Name"
                                        name="last_name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Other Name
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder="Enter Name"
                                        name="other_name"
                                        onChange={handleChange}
                                        // required
                                    />
                                </div>
                                <div className="mb-6 w-full">
                                    <label
                                        htmlFor="nationality"
                                        className="block text-[#0A2E04] text-[14px] font-semibold mb-2 "
                                    >
                                        Nationality<span className='text-[#EE1D52] font-bold'> *</span>
                                    </label>

                                    <select
                                        id="nationality"
                                        name="nationality"
                                        onChange={handleChange}
                                        required
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm   block w-full p-2.5 "
                                    >
                                        <option selected></option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antartica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Congo">Congo, the Democratic Republic of the</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                        <option value="Croatia">Croatia (Hrvatska)</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="France Metropolitan">France, Metropolitan</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                        <option value="Holy See">Holy See (Vatican City State)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran (Islamic Republic of)</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                        <option value="Korea">Korea, Republic of</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Lao">Lao People's Democratic Republic</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon" selected>Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia, Federated States of</option>
                                        <option value="Moldova">Moldova, Republic of</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russian Federation</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint LUCIA">Saint LUCIA</option>
                                        <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                        <option value="Span">Spain</option>
                                        <option value="SriLanka">Sri Lanka</option>
                                        <option value="St. Helena">St. Helena</option>
                                        <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syrian Arab Republic</option>
                                        <option value="Taiwan">Taiwan, Province of China</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania, United Republic of</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Viet Nam</option>
                                        <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                        <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                        <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Date of Birth<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="date"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="date_of_birth"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6 w-full">
                                    <label
                                        htmlFor="gender"
                                        className="block text-[#0A2E04] text-[14px] font-semibold mb-2 "
                                    >
                                        Gender<span className='text-[#EE1D52] font-bold'> *</span>
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        onChange={handleChange}
                                        required
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm   block w-full p-2.5 "
                                    >
                                        <option selected></option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        
                                    </select>
                                </div>
                                 {/* must not be required */}
                                {/* <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                       Place and Country of Birth<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="place_and_country_of_birth"
                                        onChange={handleChange}
                                        required
                                    />
                                </div> */}

{/* must not be required */}
                                {/* <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                       Passport Number<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="passport_no"
                                        onChange={handleChange}
                                        required
                                    />
                                </div> */}
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                      National ID Number
                                      {/* <span className='text-[#EE1D52] font-bold'>*</span> */}
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="national_id_no"
                                        onChange={handleChange}
                                        // required
                                    />
                                </div>
                                
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        E-mail Address<span className='text-[#EE1D52] font-bold'>*</span>
                                        <p className='text-xs mt-1'>(Please ensure that the given email address is typed correctly and is your personal address. Important messages will be sent to this email address.)</p>
                                    </label>
                                    <input
                                        type="email"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Mobile Phone Number<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="phone_number"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6 w-full">
                                    <label
                                        htmlFor="country_of_residence"
                                        className="block text-[#0A2E04] text-[14px] font-semibold mb-2 "
                                    >
                                        Country of Residence<span className='text-[#EE1D52] font-bold'> *</span>
                                    </label>

                                    <select
                                        id="country_of_residence"
                                        name="country_of_residence"
                                        onChange={handleChange}
                                        required
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm   block w-full p-2.5 "
                                    >
                                        <option selected></option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antartica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Congo">Congo, the Democratic Republic of the</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                        <option value="Croatia">Croatia (Hrvatska)</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="France Metropolitan">France, Metropolitan</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                        <option value="Holy See">Holy See (Vatican City State)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran (Islamic Republic of)</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                        <option value="Korea">Korea, Republic of</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Lao">Lao People's Democratic Republic</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon" >Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia, Federated States of</option>
                                        <option value="Moldova">Moldova, Republic of</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria" selected>Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russian Federation</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint LUCIA">Saint LUCIA</option>
                                        <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                        <option value="Span">Spain</option>
                                        <option value="SriLanka">Sri Lanka</option>
                                        <option value="St. Helena">St. Helena</option>
                                        <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syrian Arab Republic</option>
                                        <option value="Taiwan">Taiwan, Province of China</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania, United Republic of</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Viet Nam</option>
                                        <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                        <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                        <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Address<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="address"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {/* <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Postal Code <span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="postal_code"
                                        onChange={handleChange}
                                        required
                                    />
                                </div> */}
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        City and Country<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder=""
                                        name="city_and_country"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6 w-full">
                                    <label
                                        htmlFor="native_lang"
                                        className="block text-[#0A2E04] text-[14px] font-semibold mb-2 "
                                    >
                                        Native Language<span className='text-[#EE1D52] font-bold'> *</span>
                                    </label>

                                    <select
                                        id="native_lang"
                                        name="native_lang"
                                        onChange={handleChange}
                                        required
                                        className=" border border-[#D9D9D9] text-[#333333] text-sm   block w-full p-2.5 "
                                    >
                                        <option value="" selected>Select...</option>
                                        <option value="Afrikaans">Afrikaans</option>
                                        <option value="Albanian">Albanian</option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Armenian">Armenian</option>
                                        <option value="Basque">Basque</option>
                                        <option value="Bengali">Bengali</option>
                                        <option value="Bulgarian">Bulgarian</option>
                                        <option value="Catalan">Catalan</option>
                                        <option value="Cambodian">Cambodian</option>
                                        <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                                        <option value="Croatian">Croatian</option>
                                        <option value="Czech">Czech</option>
                                        <option value="Danish">Danish</option>
                                        <option value="Dutch">Dutch</option>
                                        <option value="English">English</option>
                                        <option value="Estonian">Estonian</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finnish">Finnish</option>
                                        <option value="French">French</option>
                                        <option value="Georgian">Georgian</option>
                                        <option value="German">German</option>
                                        <option value="Greek">Greek</option>
                                        <option value="Gujarati">Gujarati</option>
                                        <option value="Hebrew">Hebrew</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Hungarian">Hungarian</option>
                                        <option value="Icelandic">Icelandic</option>
                                        <option value="Indonesian">Indonesian</option>
                                        <option value="Irish">Irish</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Japanese">Japanese</option>
                                        <option value="Javanese">Javanese</option>
                                        <option value="Korean">Korean</option>
                                        <option value="Latin">Latin</option>
                                        <option value="Latvian">Latvian</option>
                                        <option value="Lithuanian">Lithuanian</option>
                                        <option value="Macedonian">Macedonian</option>
                                        <option value="Malay">Malay</option>
                                        <option value="Malayalam">Malayalam</option>
                                        <option value="Maltese">Maltese</option>
                                        <option value="Maori">Maori</option>
                                        <option value="Marathi">Marathi</option>
                                        <option value="Mongolian">Mongolian</option>
                                        <option value="Nepali">Nepali</option>
                                        <option value="Norwegian">Norwegian</option>
                                        <option value="Persian">Persian</option>
                                        <option value="Polish">Polish</option>
                                        <option value="Portuguese">Portuguese</option>
                                        <option value="Punjabi">Punjabi</option>
                                        <option value="Quechua">Quechua</option>
                                        <option value="Romanian">Romanian</option>
                                        <option value="Russian">Russian</option>
                                        <option value="Samoan">Samoan</option>
                                        <option value="Serbian">Serbian</option>
                                        <option value="Slovak">Slovak</option>
                                        <option value="Slovenian">Slovenian</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Swahili">Swahili</option>
                                        <option value="Swedish ">Swedish </option>
                                        <option value="Tamil">Tamil</option>
                                        <option value="Tatar">Tatar</option>
                                        <option value="Telugu">Telugu</option>
                                        <option value="Thai">Thai</option>
                                        <option value="Tibetan">Tibetan</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Turkish">Turkish</option>
                                        <option value="Ukrainian">Ukrainian</option>
                                        <option value="Urdu">Urdu</option>
                                        <option value="Uzbek">Uzbek</option>
                                        <option value="Vietnamese">Vietnamese</option>
                                        <option value="Welsh">Welsh</option>
                                        <option value="Xhosa">Xhosa</option>
                                    </select>
                                </div>
                                {/* <hr />
                                <h3 className='mt-5 mb-6 font-medium text-[20px]'>DEGREE YOU ARE APPLYING WITH</h3>
                                <p className='text-xs mt-1'>Please note that you must apply with your upper secondary school degree certificates.</p>
                                <div className=''>
                                    
                                    <div className="mb-6 w-full ">
                                        <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Name of the upper secondary degree awarded/to be awarded to you in original language<span className='text-[#EE1D52] font-bold'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                            placeholder=""
                                            name="secondary_degree_in_original_lang"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6 w-full ">
                                        <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Name of the upper secondary degree awarded/to be awarded to you in English<span className='text-[#EE1D52] font-bold'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                            placeholder=""
                                            name="secondary_degree_in_eng_lang"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6 w-full">
                                        <label
                                            htmlFor="have_graduated"
                                            className="block text-[#0A2E04] text-[14px] font-semibold mb-2 "
                                        >
                                            I have graduated <span className='text-[#EE1D52] font-bold'> *</span>
                                        </label>

                                        <select
                                            id="have_graduated"
                                            name="have_graduated"
                                            onChange={handleChange}
                                            required
                                            className=" border border-[#D9D9D9] text-[#333333] text-sm   block w-full p-2.5 "
                                        >
                                            <option selected></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                            
                                        </select>
                                    </div>
                                    <div className="mb-6 w-full ">
                                        <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Date for the upper secondary degree having been awarded/to be awarded to you<span className='text-[#EE1D52] font-bold'>*</span>
                                        </label>
                                        <input
                                            type="date"
                                            className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                            placeholder=""
                                            name="date_for_secondary_degree"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6 w-full ">
                                        <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Name of the institution having awarded/awarding you the upper secondary degree<span className='text-[#EE1D52] font-bold'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                            placeholder=""
                                            name="name_of_secondary_institution"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6 w-full ">
                                        <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                                        Country where the awarding institution is located in<span className='text-[#EE1D52] font-bold'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                            placeholder=""
                                            name="country_of_secondary_institution"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                   
                                </div> */}
                                

                                <hr />
                                <h3 className='mt-5 mb-6 font-medium text-[20px]'>PROFICIENCY IN ENGLISH</h3>
                                
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04] mt-4">
                                    Method for proving your language skills in English<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="lang_skills_1" type="radio" value="" name="lang_skills" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setLangSkills('C1 Advanced or C2 Proficiency by Cambridge English Qualifications')} />
                                        <label htmlFor="lang_skills_1" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">C1 Advanced or C2 Proficiency by Cambridge English Qualifications</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="IELTS-test-2" type="radio" value="" name="lang_skills" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setLangSkills('B2 First by Cambridge English')} />
                                        <label htmlFor="IELTS-test-2" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">B2 First by Cambridge English</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="IELTS-test-3" type="radio" value="" name="lang_skills" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setLangSkills('IELTS Academic')} />
                                        <label htmlFor="IELTS-test-3" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">IELTS Academic</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="IELTS-test-4" type="radio" value="" name="lang_skills" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setLangSkills('PTE Academic')} />
                                        <label htmlFor="IELTS-test-4" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">PTE Academic</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="IELTS-test-4" type="radio" value="" name="lang_skills" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setLangSkills('TOEFL iBT, TOEFL iBT Home Edition')} />
                                        <label htmlFor="IELTS-test-4" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">TOEFL iBT, TOEFL iBT Home Edition</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="IELTS-test-4" type="radio" value="" name="lang_skills" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setLangSkills('Degree completed in English at an institution of a higher level of education')} />
                                        <label htmlFor="IELTS-test-4" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">Degree completed in English at an institution of a higher level of education in an EU/EEA country, Australia, Canada, Ireland, New Zealand, Switzerland, UK or USA</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="IELTS-test-4" type="radio" value="" name="lang_skills" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setLangSkills('Degree completed in English on the upper secondary level of education')} />
                                        <label htmlFor="IELTS-test-4" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">Degree completed in English on the upper secondary level of education in an EU/EEA country, Australia, Canada, Ireland, New Zealand, Switzerland, UK or USA</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="IELTS-test-4" type="radio" value="" name="lang_skills" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setLangSkills('SAT Evidence-Based Reading and Writing')} />
                                        <label htmlFor="IELTS-test-4" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">SAT Evidence-Based Reading and Writing</label>
                                    </div>
                                     
                                </div>

{/* must not be required */}
                                {/* <hr />
                                <h3 className='mt-5 mb-6 font-medium text-[20px]'>TUITION FEE AND SCHOLARSHIPS</h3>
                                
                                <div className="mb-6 w-full ">
                                    <label className="block mb-2 text-sm font-semibold text-[#0A2E04] mt-4">
                                    Applying for a scholarship<span className='text-[#EE1D52] font-bold'>*</span>
                                    </label>
                                    
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="scholarship-1" type="radio" value="" name="scholarship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setScholarship('I am required to pay a tuition fee and wish to apply for a scholarship.')} />
                                        <label htmlFor="scholarship-1" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">I am required to pay a tuition fee and wish to apply for a scholarship.</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="scholarship-2" type="radio" value="" name="scholarship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setScholarship('I am exempted from paying a tuition fee and cannot apply for a scholarship.')} />
                                        <label htmlFor="scholarship-2" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">I am exempted from paying a tuition fee and cannot apply for a scholarship.</label>
                                    </div>
                                    <div className="flex items-center w-full px-4 mb-1 border border-gray-200 rounded ">
                                        <input id="scholarship-3" type="radio" value="" name="scholarship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " onClick={() => setScholarship('I am required to pay a tuition fee but I do NOT wish to apply for a scholarship.')} />
                                        <label htmlFor="scholarship-3" className="w-full py-4 ml-3 text-sm font-medium text-gray-900  ">I am required to pay a tuition fee but I do NOT wish to apply for a scholarship.</label>
                                    </div>
                                   
                                </div> */}

                                
                                
                               
                                <div className='flex justify-start mt-5'>
                                    <button
                                        type="submit"
                                        className=" text-white bg-[#1DB459] hover:bg-[#05401C] focus:ring-4 font-medium text-[16px] px-6 py-2.5 mr-2 mb-2"
                                    >
                                       {loader ? "Submitting..." : "Submit Application"}
                                       {loader && <LoadingSpinner />}
                                        
                                    </button>

                                    {/* <div className='flex justify-center'>
                                        <MutatingDots
                                            height="70"
                                            width="100"
                                            color="#4fa94d"
                                            secondaryColor='#4fa94d'
                                            radius='9.5'
                                            ariaLabel="mutating-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={loader}
                                        />
                                    </div> */}
                                </div>
                            </form>

                        </div>
                    </div>
                </div>






                <Modal open={open} onClose={onCloseModal} center>
                    <div className='md:max-w-md  body-font font-poppins'>
                        <div className="flex flex-wrap mt-4">
                            
                            <h2 className='text-center text-[#1DB459] font-bold md:text-[26px] text-[22px]'>Accept Terms and Conditions</h2>
                            <p className='text-center text-[#838383] md:text-[14px] text-[12px]'>Before you proceed , please take a moment to review and accept our Terms and Conditions.</p>
                            <hr className="h-px mb-8 mt-[10px] bg-[#F0F4F9] border-0" />
                            <h3 className='md:text-[16px] text-[14px] text-black font-light '><span className='font-bold'>Payment:</span>  By proceeding, you agree to pay 150€ for the Registration fee.</h3>
                            <h3 className='md:text-[16px] text-[14px] text-black font-light mt-4'><span className='font-bold'>Refunds:</span>  The 150€ being paid will be a one time  non refundable fee</h3>
                            <h3 className='md:text-[16px] text-[14px] text-black font-light mt-4'><span className='font-bold'>Data privacy:</span>  Please be aware that any information provided will be used  to verify your identity for future referencing and also for your Visa and Residence Permit processing.</h3>
                            <h3 className='md:text-[16px] text-[14px] text-black font-light mt-4'><span className='font-bold'>Note:</span> Please be aware that AFRIPROEDU does not have the authority to grant admissions to students or influence any school's decision to accept them.
                           <br/> Our role is to enhance your chances by carefully reviewing your documents to ensure they meet the eligibility criteria set by the school.</h3>
                            <hr className="h-px mb-8 mt-[20px] bg-[#F0F4F9] border-0" />
                           
                            {/* <div className="flex justify-center items-center mb-3 mt-4">
                                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 accent-green-600 bg-[#D9D9D9] border-green-600 rounded" required />
                                            <label htmlFor="default-checkbox" className="ml-2 md:text-[14px] text-[12px] font-light text-black "> I accept the Terms and Conditions</label>
                                        </div> */}
                            <div className='flex mx-auto space-x-4 mt-6'>
                                <button
                                    type="button"
                                    onClick={onCloseModal}
                                    className=" text-white bg-[#1DB459] rounded-[5px] font-medium text-sm md:px-5 px-3 md:py-3 py-2.5 mr-2 mb-2"
                                >
                                    Proceed
                                </button>

                            </div>

                        </div>
                    </div>

                </Modal>


                <Modal open={openPayment} onClose={onClosePaymentModal} center>
                    <div className='md:max-w-md  body-font font-poppins'>
                        <div className="flex flex-wrap mt-4">
                            <h2 className='text-center text-[#1DB459] font-bold md:text-[26px] text-[22px]'>Accept Terms and Conditions</h2>
                            <p className='text-center text-[#838383] md:text-[14px] text-[12px]'>Before you proceed , please take a moment to review and accept our Terms and Conditions.</p>
                            <hr className="h-px mb-8 mt-[10px] bg-[#F0F4F9] border-0" />
                            <h3 className='md:text-[16px] text-[14px] text-black font-light '><span className='font-bold'>Payment:</span>  By proceeding, you agree to pay 150€ for the Registration fee.</h3>
                            <h3 className='md:text-[16px] text-[14px] text-black font-light mt-4'><span className='font-bold'>Refunds:</span>  The 150€ being paid will be a one time  non refundable fee</h3>
                            <h3 className='md:text-[16px] text-[14px] text-black font-light mt-4'><span className='font-bold'>Data privacy:</span>  Please be aware that any information provided will be used  to verify your identity for future referencing and also for your Visa and Residence Permit processing.</h3>
                            <hr className="h-px mb-8 mt-[20px] bg-[#F0F4F9] border-0" />
                            {/* <div className="flex justify-center items-center mb-3 mt-4">
                                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 accent-green-600 bg-[#D9D9D9] border-green-600 rounded" required />
                                            <label htmlFor="default-checkbox" className="ml-2 md:text-[14px] text-[12px] font-light text-black "> I accept the Terms and Conditions</label>
                                        </div> */}
                            <div className='flex mx-auto space-x-4 mt-6'>
                                <button
                                    type="button"
                                    onClick={makeDollarPayment}
                                    className=" text-white bg-[#1DB459] rounded-[5px] font-medium text-sm md:px-5 px-3 md:py-3 py-2.5 mr-2 mb-2"
                                >
                                    Pay 
                                </button>
                                {/* <button
                                    type="button"
                                    className=" text-[#FCF7F7] bg-[#1C8B48] rounded-[5px]  font-medium text-sm md:px-5 px-8 md:py-3 py-2.5 mr-2 mb-2"
                                    onClick={makeNairaPayment}
                                >
                                    Pay in Naira
                                </button> */}
                            </div>
                           
                        </div>
                    </div>

                </Modal>


 <Modal open={openPaymentProof} onClose={onClosePaymentProofModal} center styles={{
                modal: {
                    borderRadius: '15px', // Add border-radius here
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Add shadow
                },
            }}>
                <div className='md:w-[350px] w-[300px]'>
                    <div className=" flex justify-start mt-7">
                        <h4 className="tex-[#000000] md:text-[18px] text-[14px] font-bold">
                            Proof of Payment
                        </h4>

                    </div>
                    <div className='flex  mt-5'>
                        <p className='text-[14px] text-[#898989] '>Kindly send your receipt to any of the following platform to confirm your payment  </p>
                    </div>
                    <p className='text-[14px] text-[#898989] mt-2'>If you are unable to make payment in euro, contact the numbers below
                    </p>
                    <div className='mt-5'>
                               <div className='flex gap-2'>
                                 <MdOutlineMail size={20} />
                                 <a href="mailto:hello@afriproedu.com" className='underline underline-offset-2 text-[14px]'>hello@afriproedu.com</a>
                               </div>
                               
                               <div className="flex gap-2">
                               <div className='flex gap-2 mt-3'>
                                 <TbBrandWhatsapp size={20} />
                                 <a href="https://api.whatsapp.com/send?phone=2348131470992" target='_blank' rel="noreferrer">
                                   <span className='underline underline-offset-2 text-[14px]'>+234 813 147 0992
                                   </span>,
                                 </a>
                               </div>
                               <div className='flex gap-2 mt-3'>
                                 {/* <TbBrandWhatsapp size={20} /> */}
                                 <a href="https://api.whatsapp.com/send?phone=2347012330629" target='_blank' rel="noreferrer">
                                   <span className='underline underline-offset-2 text-[14px]'>+234 701 233 0629  
                                   </span>
                                 </a>
                               </div>
                               </div>
                             </div>
                    <div>

                        <div className='mt-5 flex justify-center'>
                            <button onClick={onClosePaymentProofModal} className="w-full bg-[#00B07B] text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors">
                                Okay
                            </button>

                        </div>
                    </div>
                </div>

            </Modal>
   
            </section>
            {/* <!-- Start block --> */}

            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </>
  )
}

export default LUTApplicationForm