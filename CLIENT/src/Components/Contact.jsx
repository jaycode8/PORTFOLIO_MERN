import {
    FaFacebookF,
    FaTwitter,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
    let [values, setValues] = useState({
        FullName: "",
        EmailAddress: "",
        Message: "",
    });

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            values.FullName == "" ||
            values.EmailAddress == "" ||
            values.Message == ""
        ) {
            onInputError();
        } else {
            emailjs
                .send(
                    "service_19u2f3c",
                    "template_9062gtj",
                    values,
                    "IaeuHsevBqJH3D6hl",
                )
                .then(
                    (response) => {
                        onSuccess();
                        values = setValues({
                            FullName: "",
                            EmailAddress: "",
                            Message: "",
                        });
                    },
                    (error) => {
                        onError();
                    },
                );
        }
    };

    const onSuccess = () => {
        Swal.fire({
            title: "Success",
            text: "Thanks for contacting JayTech, message successfully sent. Yo will receive a confirmation message shortly......",
            icon: "success",
            button: "OK",
            background: "#20272f",
            color: "#cbdaf7"
        });
    };

    const onError = () => {
        Swal.fire({
            title: "Ooops....",
            text: "Someting went wrong. Check your connection....",
            icon: "warning",
            button: "OK",
            background: "#20272f",
            color: "#cbdaf7"
        });
    };

    const onInputError = () => {
        Swal.fire({
            title: "Ooops....",
            text: "All fields are required.",
            icon: "question",
            button: "OK",
            background: "#20272f",
            color: "#cbdaf7"
        });
    };

    return (
        <div className="w-full h-auto grid place-items-center relative px-4 pt-10 pb-8" id="contacts">
            <h3 className="text-white text-2 w-full sm:text-center">Contact Me</h3>
            <div className="w-full sm:h-30rem grid place-items-center sm:grid-cols-1fr1.5fr">
                <div className="w-full h-full flex sm:flex-col justify-between phones:justify-around sm:justify-center items-end gap-4 pb-6 sm:pb-32 sm:pr-20 mt-4 sm:mt-0">
                    <a href="https://www.facebook.com/james.mumo.9803" target="_blank" className="social-icons">
                        <FaFacebookF className="text-1rem" />
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FJaymoh__254" target="_blank" className="social-icons">
                        <FaTwitter className="text-1rem" />
                    </a>
                    <a href="https://wa.me/254111482180" target="_blank" className="social-icons">
                        <FaWhatsapp className="text-1rem" />
                    </a>
                    <a href="https://www.instagram.com/jaymoh__254/" target="_blank" className="social-icons">
                        <FaInstagram className="text-1rem" />
                    </a>
                </div>
                <div className="w-full h-full sm:p-4">
                    <form className="w-full sm:w-30rem md:w-35rem h-auto sm:p-4">
                        <section className="flex flex-col sm:flex-row gap-2">
                            <input
                                placeholder="your name ..."
                                name="FullName"
                                type="text"
                                onChange={handleChange}
                                className="FullName inputs"
                            />
                            <input
                                placeholder="email address ..."
                                name="EmailAddress"
                                type="email"
                                onChange={handleChange}
                                className="email inputs"
                            />
                        </section>
                        <textarea
                            placeholder="your message ..."
                            name="Message"
                            onChange={handleChange}
                            className="msg inputs textarea"
                        />
                        <button onClick={handleSubmit} className="outline-none border-0 cursor-pointer text-tiny py-2 px-5 sm:rounded-2xl font-bold bg-primary">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
