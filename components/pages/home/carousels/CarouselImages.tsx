import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import CarouselComponent from '../../../CarouselComponent';

interface IProps {
    items: IItem[],
    children: any
}

interface IItem {
    url: string
}

function Item({ item, children }: any) {
    return (
        <div className='relative bg-fixed bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('./img/home/${item.url}')` }}>
            {children}
        </div>
    )
}

const CarouselImages = ({ items, children }: IProps) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <CarouselComponent
            responsive={responsive}
            items={items}
            Item={Item}
            arrows={false}
            buttonGroup={false}
            swip={false}
            drag={false} >
            {children}
        </CarouselComponent>
    )
}

export default CarouselImages


