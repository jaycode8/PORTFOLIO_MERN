import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';



const Contact = () => {

    const [values, setValues] = useState({
        FullName: '',
        EmailAddress: '',
        Message: ''
    });

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = document.querySelector('.FullName').value
        const email = document.querySelector('.email').value
        const msg = document.querySelector('.msg').value
        if (name == '' || email == '' || msg == '') {
            onInputError()
        } else {
            emailjs.send('service_19u2f3c', 'template_9062gtj', values, 'IaeuHsevBqJH3D6hl')
                .then(response => {
                    onSuccess()
                    values = setValues({
                        FullName: '',
                        EmailAddress: '',
                        Message: ''
                    });
                }, error => {
                    onError()
                })
        }

    }

    const onSuccess = () => {
        swal({
            title: 'Success',
            text: 'Thanks for contacting JayTech, message successfully sent. Yo will receive a confirmation message shortly......',
            icon: 'success',
            button: 'OK'

        })
    }

    const onError = () => {
        swal({
            title: 'Ooops....',
            text: 'Someting went wrong.Check your connection....',
            icon: 'error',
            button: 'OK'

        })
    }

    const onInputError = () => {
        swal({
            title: 'Ooops....',
            text: 'All fields are required..',
            icon: 'error',
            button: 'OK'

        })
    }

    return (
        <div className='d-flex vh-100 align-items-center justify-content-center flex-column contactPage' id='contacts'>
            <h3>
                Mail...
            </h3>
            <div className='emailContainer'>
                <section></section>
                <section className='emailForm'>
                    <form>
                        <input
                            placeholder='your name'
                            name='FullName'
                            type='text'
                            onChange={handleChange}
                            className='FullName'
                        />
                        <input
                            placeholder='email address'
                            name='EmailAddress'
                            type='email'
                            onChange={handleChange}
                            className='email'
                        />
                        <textarea
                            placeholder='Leave a comment'
                            name='Message'
                            onChange={handleChange}
                            className='msg'
                        />
                        <button onClick={handleSubmit}>
                            SEND
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;
