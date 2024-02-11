import "./Contact.css";
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
        <div className="contact-page" id="contacts">
            <h3>Contact Me</h3>
            <div className="box">
                <div className="social-media">
                    <a href="https://www.facebook.com/james.mumo.9803" target="_blank">
                        <FaFacebookF className="icon" />
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FJaymoh__254" target="_blank">
                        <FaTwitter className="icon" />
                    </a>
                    <a href="https://wa.me/254111482180" target="_blank">
                        <FaWhatsapp className="icon" />
                    </a>
                    <a href="https://www.instagram.com/jaymoh__254/" target="_blank">
                        <FaInstagram className="icon" />
                    </a>
                </div>
                <div className="mail">
                    <form>
                        <section>
                            <input
                                placeholder="your name ..."
                                name="FullName"
                                type="text"
                                onChange={handleChange}
                                className="FullName"
                            />
                            <input
                                placeholder="email address ..."
                                name="EmailAddress"
                                type="email"
                                onChange={handleChange}
                                className="email"
                            />
                        </section>
                        <textarea
                            placeholder="your message ..."
                            name="Message"
                            onChange={handleChange}
                            className="msg"
                        />
                        <button onClick={handleSubmit}>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
