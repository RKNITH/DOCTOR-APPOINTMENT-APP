// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//     return (
//         <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
//             <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//             <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free</p>
//             <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
//                 {specialityData.map((item, index) => {
//                     return (
//                         <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-100' key={index} to={`/doctors/${item.speciality}`} >
//                             <img className='w-16 sm:w-24 mb-2' src={item.image} alt='item' />
//                             <p>{item.speciality}</p>
//                         </Link>
//                     )
//                 })
//                 }

//             </div>

//         </div>
//     )
// }

// export default SpecialityMenu




import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-6 py-20 text-gray-900'>
            <h1 className='text-4xl font-semibold'>Explore Medical Specialties</h1>
            <p className='sm:w-1/2 text-center text-base'>
                Discover expert doctors across various specialties and book your appointment with ease. We're here to guide your healthcare journey.
            </p>
            <div className='flex sm:justify-center gap-6 pt-6 w-full overflow-scroll'>
                {specialityData.map((item, index) => {
                    return (
                        <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-12px] transition-all duration-150' key={index} to={`/doctors/${item.speciality}`} >
                            <img className='w-20 sm:w-28 mb-3' src={item.image} alt={`${item.speciality} icon`} />
                            <p className='font-medium'>{item.speciality}</p>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}

export default SpecialityMenu
