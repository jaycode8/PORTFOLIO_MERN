import "./Services.css";
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
        <div className="servicescontainer" id="servicePage">
            <h3>Services</h3>
            <div className="cards">
                {services.map((service, index) => (
                    <div className="card" key={index}>
                        <span>
                            <FaBuffer className="service-icon" />
                            <h1>{`${(index + 1).toString().padStart(2, "0")}`}</h1>
                        </span>
                        <div>
                            <h4>{service.service}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div >
                ))}
            </div >
        </div >
    );
};

export default Services;
