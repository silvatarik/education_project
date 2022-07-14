import React from 'react'

const BannerAchievement = () => {
    return (
        <div className="h-2 grid grid-cols-1 md:grid-cols-2 mt-8 xl:mt-12" >
            <div className='bg-gray-dark flex items-center justify-center'>
                <div>
                    <p className='text-white text-4xl'>Tenemos la herramientas para tu exito</p>
                </div>
            </div>
            <div>
                <img src="./img/home/banners/banner.jpg" alt="Banner 1" className='h-96 w-full object-cover' />
            </div>
        </div>
    )
}

export default BannerAchievement