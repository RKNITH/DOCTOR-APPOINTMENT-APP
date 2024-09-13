import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='px-4 md:px-10 py-10'>
            {/* Header */}
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p className='text-4xl font-semibold'>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>

            {/* Image and Content Section */}
            <div className='my-10 flex flex-col md:flex-row md:gap-12 items-center'>
                {/* Image Section */}
                <img className='w-full md:max-w-[360px] mb-5 md:mb-0' src={assets.about_image} alt='About MediMeet' />

                {/* Content Section */}
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>
                        Welcome to <b>MediMeet</b>, your trusted platform for hassle-free doctor appointments. At MediMeet, we believe that healthcare should be accessible, efficient, and user-friendly. That’s why we've designed a system that allows you to find the right specialist, book appointments quickly, and get the medical care you need without the usual waiting times or administrative headaches.
                    </p>

                    <p>
                        Whether you're looking for general practitioners, specialists, or diagnostic services, MediMeet provides a comprehensive list of trusted healthcare professionals. We strive to ensure that all our users have access to expert medical advice and treatment, empowering them to take control of their health journey.
                    </p>

                    <b className='block'>Our Mission</b>
                    <p>
                        To bridge the gap between patients and healthcare providers, making quality healthcare services easily accessible for everyone. We aim to simplify the process of finding, booking, and consulting with medical professionals, ensuring your health is always a priority.
                    </p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>Why Choose <span className='text-gray-700 font-semibold'>MediMeet?</span></p>

                <div className='flex flex-col md:flex-row mb-20'>
                    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500'>
                        <b>Efficiency:</b>
                        <p>Streamlined appointment sscheduling that fits into your busy lifestyle.</p>
                    </div>
                    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-500 '>
                        <b>Convenience: </b>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>
                    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-500'>
                        <b>Personalization:</b>
                        <p>Tailored recommendations and reminders to help you stay on the top of your health.</p>
                    </div>
                </div>


            </div>












        </div>

    )
}

export default About










