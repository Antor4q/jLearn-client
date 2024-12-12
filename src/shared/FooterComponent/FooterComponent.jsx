import { MdArrowRightAlt, MdEmail } from "react-icons/md";


import { FaPhone } from "react-icons/fa6";
// style={{backgroundImage : `url(${footer})`}}
const FooterComponent = () => {
    return (
        <div className="bg-gray-900 px-4 lg:px-0 lg:h-[500px] dark:bg-gray-900 bg-no-repeat  bg-cover" >
        <div className="lg:max-w-[1240px] py-12 mx-auto">
            <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                <h1 className="text-xl font-semibold tracking-tight  md:mx-3 xl:text-2xl text-white">Subscribe our newsletter to get update.</h1>
                
                <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                    <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-[#0D6EFD] rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        <span>Subscribe</span>
    
                         <MdArrowRightAlt className="w-5 h-5"/>
                    </a>
                </div>
            </div>
            
            <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
    
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <p className="font-semibold text-white">Quick Link</p>
    
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Lessons</a>
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Tutorials</a>
                    </div>
                </div>
    
                <div>
                    <p className="font-semibold text-white">Industries</p>
    
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Education</a>
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Learn language</a>
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">All category</a>
                    </div>
                </div>
    
                <div>
                    <p className="font-semibold text-white">Services</p>
    
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Manage education</a>
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Experience teachers</a>
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Language learning</a>
                    </div>
                </div>
    
                <div>
                    <p className="font-semibold text-white">Contact Us</p>
    
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500 flex gap-2 items-center"><FaPhone />+9934234332</a>
                        <a href="#" className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500 flex gap-2 items-center"><MdEmail />jLearn@gmail.com</a>
                    </div>
                </div>
            </div>
            
            <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
            
            <div className="flex flex-col items-center justify-between sm:flex-row">
            
    
                <p className="  text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">© Copyright 2021 jLearn. All Rights Reserved.</p>
            </div>
        </div>
           </div>
    );
};

export default FooterComponent;