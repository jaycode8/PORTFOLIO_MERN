import { useEffect, useState } from "react";
import axios from "axios";
import { FaBuffer } from "react-icons/fa";

const api_url = import.meta.env.VITE_REACT_APP_API_URL;

const Services = () => {
    const [services, setServices] = useState([]);

    const fetchService = async () => {
        try {
            const res = await axios.get(`${api_url}/services`);
            setServices(res.data.message);
        } catch (error) {
            console.log("")
        }
    };

    useEffect(() => {
        fetchService();
    }, []);

    return (
        <div className="w-full grid place-items-center pt-12 pb-4 px-4" id="servicePage">
            <h3 className="text-white text-2 w-full sm:text-center">Services</h3>
            <div className="w-full h-full mt-4 grid place-items-center justify-center grid-cols-services-grid gap-6 sm:gap-2 lg:gap-6 py-8 px-0 lg:px-40">
                {services.map((service, index) => (
                    <div className="group w-80 phones:w-full h-64 p-4 flex flex-col justify-center gap-12 rounded-lg text-white cursor-pointer transition duration-700 ease-out bg-[#171c22] hover:translate-y-[-0.8rem] sm:hover:translate-y-[-1rem] hover:bg-primary hover:text-[#121212]" key={index}>
                        <span className="flex justify-between items-center pr-16">
                            <FaBuffer className="text-4xl transition duration-700 ease-out text-primary group-hover:text-white" />
                            <h1 className="text-2 font-cookie">{`${(index + 1).toString().padStart(2, "0")}`}</h1>
                        </span>
                        <div className="grid gap-2 text-shades group-hover:text-[#121212]">
                            <h4 className="uppercase">{service.service}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div >
                ))}
            </div >
        </div >
    );
};

export default Services;
