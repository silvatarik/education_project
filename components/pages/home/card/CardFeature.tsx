import Image from 'next/image'
import React from 'react'
import feature from '../../../../public/img/home/features/design.png'

const CardFeature = () => {
    return (
        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <div className='text-center'><Image src={feature} alt="Primera feature"  width={250} height={150}/></div>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

            <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
        </div>
    )
}

export default CardFeature