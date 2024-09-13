// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//     return (
//         <div className='md:mx-10'>
//             <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14px my-10 mt-40 text-sm'>
//                 {/* left */}
//                 <div>
//                     <img className='mb-5 w-40' src={assets.logo} />
//                     <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quaerat sunt a rerum vel assumenda, amet magnam, aperiam minima doloremque laborum voluptatum. Quam, maiores debitis!</p>
//                 </div>


//                 {/* center */}
//                 <div>
//                     <p className='text-xl font-medium mb-5'>COMPONY</p>
//                     <ul className='flex flex-col gap-2 text-gray-600'>
//                         <li>Home</li>
//                         <li>About Us</li>
//                         <li>Contact Us</li>
//                         <li>Privacy Policy</li>
//                     </ul>
//                 </div>


//                 {/* righ */}
//                 <div>
//                     <p className='text-xl font-medium mb-5'>Get in Touch</p>
//                     <ul className='flex flex-col gap-2 text-gray-600'>
//                         <li>+91 7973002267</li>
//                         <li>ravi@gmail.com</li>
//                     </ul>
//                 </div>
//             </div>
//             <div>
//                 <hr />
//                 <p className='py-5 text-sm text-center'>Cpoyright 2024 @ Prescripto All Right Reserved</p>
//             </div>
//         </div>
//     )
// }

// export default Footer


import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14px my-10 mt-40 text-sm'>
                {/* left */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt='Logo' />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                        MediMeet is your trusted partner for seamless doctor appointments, connecting you with healthcare professionals when you need them the most. Let us simplify your healthcare experience, ensuring easy access to expert medical advice.
                    </p>
                </div>

                {/* center */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* right */}
                <div>
                    <p className='text-xl font-medium mb-5'>Get in Touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 7973002267</li>
                        <li>support@medimeet.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024 @ MediMeet. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
