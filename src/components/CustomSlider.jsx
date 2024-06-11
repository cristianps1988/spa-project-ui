import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl, dataImages } from "../helpers/getImageUrl";

export default function CustomSlider() {
    let settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className="w-full h-fit pt-16">
            <Slider {...settings}>
                {dataImages.map((element, index) =>
                (
                    <div id="slider-boxes" key={index} className="flex justify-center w-full aspect-video">
                        <img
                            src={getImageUrl(element, "ourHouse")}
                            alt="Nuestras instalaciones"
                            className="rounded-md w-full aspect-video object-cover"
                            loading="lazy"
                        />
                    </div>
                )
                )}
            </Slider>
        </div>
    );
}
