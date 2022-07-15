import React from 'react'
import Carousel from 'react-multi-carousel'
import IImages from '../interfaces/other'

interface ICarousel {
    responsive: {
        desktop: {
            breakpoint: { max: number, min: number },
            items: number
        },
        tablet: {
            breakpoint: { max: number, min: number },
            items: number
        },
        mobile: {
            breakpoint: { max: number, min: number },
            items: number
        }
    },
    arrows: boolean,
    buttonGroup: boolean,
    swip: boolean,
    drag: boolean,
    Item: Function,
    items: IImages[],
    children:any
}

const CarouselComponent = ({ responsive, arrows, buttonGroup, swip, drag, Item, items, children }: ICarousel) => {
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
            arrows={arrows}
            renderButtonGroupOutside={buttonGroup}
            autoPlaySpeed={4500}
            swipeable={swip}
            draggable={drag}
            transitionDuration={3000}
        >
            {
                items.map((item, i: number) => <Item key={i} item={item}>{children}</Item>)
            }

        </Carousel>
    )
}

export default CarouselComponent