import "./Services.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import { Navigation, Pagination, Scrollbar } from "swiper";
import { FaBuffer } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const api_url = import.meta.env.VITE_REACT_APP_API_URL;

const Services = () => {
    const [services, setServices] = useState([]);

    const fetchService = async () => {
        try {
            const res = await axios.get(`${api_url}/services`);
            setServices(res.data.message);
        } catch (error) {
            document.querySelector(".swiper").innerHTML = `
                <span>
                    <p>Error loading services i do from server...</p>
                </span>
            `;
        }
    };

    useEffect(() => {
        fetchService();
    }, []);

    const currentWidth = window.innerWidth;
    let slides = currentWidth >= 500 ? "3" : "1";

    return (
        <div className="servicescontainer" id="servicePage">
            <div className="servicesPlot">
                <h3>
                    <span>Services</span>
                </h3>
                <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay, Navigation]}
                    spaceBetween={0}
                    slidesPerView={slides}
                    navigation={{ nextEl: "#chevronRight", prevEl: "#chevronleft" }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                    loop
                    className="swiper"
                >
                    {services.map((item) => (
                        <SwiperSlide className="swiperSlide" key={item._id}>
                            <section className="swipperSection">
                                <div className="section" key={item.service}>
                                    <section>
                                        <FaBuffer className="icon" />
                                        <h5>{item.service}</h5>
                                    </section>
                                    <p>{item.description}</p>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <FiChevronLeft id="chevronleft" />
                <FiChevronRight id="chevronRight" />
            </div>
        </div>
    );
};

export default Services;
