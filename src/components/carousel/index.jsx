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
        autoplaySpeed: 100,
        cssEase: "linear"
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Card 
                    name="Vinicius"
                    />
                </div>
                <div>
                    <Card 
                    name="Emerson"
                    />
                </div>
                <div>
                    <Card 
                    name="Jennifer Black"
                    />
                </div>
                <div>
                    <Card 
                    name="Phillip Colligan"
                    />
                </div>
                <div>
                    <Card 
                    name="colinandmandy94"
                    />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel
