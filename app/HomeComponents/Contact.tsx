import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import Navbar from "../SiteComponents/Navbar";
import ProcessSection from "@/app/HomeComponents/ProcessSection"
import FooterBanner from "../SiteComponents/FooterBanner";
import TopBanner from "../SiteComponents/TopBanner";
import Footer from "../SiteComponents/Footer";

export default function Contact(){
    return (

      <div>
        <Navbar />
      
             <div className="contact bg-gray-50 text-gray-800 px-side-spacing py-section-spacing">
            <div className=" ">
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-6 ">
                <div className="text-side lg:w-1/2 ">
               
              <h2 className='text-base font-semibold mb-4 text-gray-800'>Get Your Free Consultation </h2>
              
                    <div className="contact-method mb-2 flex items-center space-x-2 text-slate-600">
                        <FaPhoneAlt />
                        <p className="opacity-80 text-sm text-gray-700">+22 613 2936</p>
                    </div>
                    <div className="contact-method text-slate-600 flex items-center space-x-2">
                         <MdEmail size={20} /> 
                        <p className="opacity-80 text-sm text-gray-700">lakesidepaintinglimited@gmail.com</p>
                    </div>
                </div>
                <div className="form-side lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                   
                    <ContactForm/>
                </div>
            </div>
              
            </div>
            <div className='map-view h-[350px] relative mt-[40px] '>
                  <div className="inset-0 bg-slate-800 z-0 absolute opacity-40"></div>

                    <iframe
                    width="100%"
                    height="100%"
                    style={{border:0}}

                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45668.90044103487!2d169.10266084863278!3d-44.69678459999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d2e14faf0c25d7%3A0x500ef8684797450!2sWanaka!5e0!3m2!1sen!2snz!4v1735515600000!5m2!1sen!2snz">
                    </iframe>
                </div>
      
        </div>
        <ProcessSection bg='white' />
       <FooterBanner />
      </div>
       

        
    )
}