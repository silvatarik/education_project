import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

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
        <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={false}
            renderButtonGroupOutside={true}
            autoPlaySpeed={4500}
            swipeable={false}
            draggable={false}
            transitionDuration={3000}
        >
            {
                items.map((item, i: number) => <Item key={i} item={item}>{children}</Item>)
            }

        </Carousel>
    )
}

export default CarouselImages


