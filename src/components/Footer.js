import React from 'react';

function Footer(props) {
    return (
    <nav id="footer" className="fixed bottom-0 left-0 right-0 bg-black">
    
    {/* Container */}
    <div className="sticky fixed container p-4 mx-auto pt-8 pb-4 ">

        <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
            
            {/* Column 1 */}
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h2 className="text-white font-bold text-xl">beau-assist</h2>
            </div>
            

            {/* Column 2 */}
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4 className="text-white">Company</h4>
                
                <ul className="mt-4 nav navbar-nav">
                    <li id="navi-2" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/AboutUs">About Us</a> 
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/OurStore">Our Store</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/Careers">Careers</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/Affiliate Program">Affiliate Program</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/Advertise">Advertise</a>
                    </li>
                </ul>
            
            </div>
        
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4>Info</h4>
            
                <ul className="mt-4">
                    <li id="navi-2" className="leading-7 text-sm">
                        <a className="mt-2 text-white no-underline text-small" href="/Blog">Blog</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/DeliveryOption">Delivery Option</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/BuyerProtection">Buyer Protection</a>
                    </li>
                </ul>
            </div>

            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4 className="text-white">Contact Us</h4>
            
                <ul className="mt-4 ContactUs">
                    <li id="navi-2" className="leading-7 text-sm">
                        <a className="text-white no-underline flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white m-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                            + 1 800-973-0321</a>
                    </li>
                    
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small flex items-center" href="/DeliveryOption">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white m-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"/>
                            <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"/></svg>
                            hello@beau-assist.com</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/BuyerProtection">Subscribe Now</a>
                        
                        <div className="w-full max-w-sm flex items-center">
                          
                            <input className="bg-white h-7 px-4 pr-4 w-full mr-3 py-1 px-2 leading-tight" 
                            id="username" type="text" placeholder="Enter Your Email"></input>
                             
                            <button className="flex-shrink-0 text-sm border-2 text-white py-2 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 0 0-1.788 0l-7 14a1 1 0 0 0 1.169 1.409l5-1.429A1 1 0 0 0 9 15.571V11a1 1 0 1 1 2 0v4.571a1 1 0 0 0 .725.962l5 1.428a1 1 0 0 0 1.17-1.408l-7-14z"/></svg>
                            </button>
                            
                        </div>
                       
                    </li>
                </ul>
            </div>       
            
        </div>
        

        {/* Footer */}
        <div className="pt-4 md:flex md:items-center md:justify-center">
            <ul className="">
                <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-white no-underline text-small" href="https://github.com/N-Santiago">Noberto Santiago</a></li>
                <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-white no-underline text-small" href="https://github.com/nlo88">Nita Lo</a></li>
                <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-white no-underline text-small" href="https://github.com/yani82">Yani Asari</a></li>
                <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-white no-underline text-small" href="#">Michaela Petruzziello</a></li>
                <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-white no-underline text-small" href="https://github.com/a26230203">Bin Lin</a></li>
                </ul>
            </div>

    </div>
    </nav>
    );
}

export default Footer;