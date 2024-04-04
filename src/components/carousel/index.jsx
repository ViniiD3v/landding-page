import Slider from "react-slick";
import Card from '../card/Index'

function Carousel() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return (
        <section className='carrossel'>
            <Slider {...settings}>
                <div className='comment'>
                    <Card
                        name="Vinicius"
                    />
                </div>
                <div className='comment'>
                    <Card
                        name="Emerson"
                    />
                </div>
                <div className='comment'>
                    <Card
                        name="Jennifer Black"
                    />
                </div>
                <div className='comment'>
                    <Card
                        name="Phillip Colligan"
                    />
                </div>
                <div className='comment'>
                    <Card
                        name="colinandmandy94"
                    />
                </div>
            </Slider>
        </section >

    )
}

export default Carousel
