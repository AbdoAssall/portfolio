import { useEffect, useState, useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import TextAreaInput from "./atoms/TextAreaInput";
import TextInput from "./atoms/TextInput";
import { FaEnvelope } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeProvider";

const Contact = () => {
    const { theme } = useContext(ThemeContext)
    const formRef = useRef(null);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });
    const [message, setMessage] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: false
        });
    }, []);

    const handleFormChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_em72464', 'template_6e9wpnm', formRef.current, {
                publicKey: 'pKhyZYsiLeP6_K_pc',
            })
            .then(
                () => {
                    // alert('SUCCESS!');
                    setMessage('your message sent successfully!')
                    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                },
                (error) => {
                    setMessage(error)
                    console.log('FAILED...', error);
                },
            );
    };

    return (
        <div id="contact" className="pt-12">
            <div className={`py-6 px-4 md:px-8 mx-auto max-w-full flex items-center justify-center gap-8 flex-col md:flex-row ${theme === 'light' ? 'bg-linear-30 from-themColor to-themColor2' : 'bg-dark-100'} text-white`}>
                <div data-aos="zoom-in" className="md:w-1/2">
                    <img
                        src="/images/contact.svg"
                        className="w-96 h-auto sm:ml-auto"
                        alt="contact"
                    />
                </div>
                <div className="md:w-1/2 pb-6">
                    <h3 className="text-3xl mb-2 !text-white capitalize">Get In Touch</h3>
                    <div className="mb-4 flex items-center gap-2">
                        <div className="p-1 border-2 border-white text-center">
                            <FaEnvelope size={30} color={'#fff'} />
                        </div>
                        <ul className="text-base font-light">
                            <li>
                                <span>primary: </span>
                                abdoassal85@gmail.com
                            </li>
                            <li>
                                <span>phone: </span>
                                +20 1063097579
                            </li>
                        </ul>
                    </div>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="flex items-center gap-2">
                            <TextInput
                                className="w-full lg:w-62 block"
                                placeholder="First Name"
                                required
                                name='firstName'
                                value={form.firstName}
                                onChange={handleFormChange}
                            />
                            <TextInput
                                className="w-full lg:w-62 block"
                                placeholder="Last Name"
                                required
                                name='lastName'
                                value={form.lastName}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <TextInput
                                type="email"
                                className="w-full lg:w-62 block"
                                placeholder="Email Address"
                                required
                                name='email'
                                value={form.email}
                                onChange={handleFormChange}
                            />
                            <TextInput
                                className="w-full lg:w-62 block"
                                placeholder="Phone No."
                                name='phone'
                                value={form.phone}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="mt-2">
                            <TextAreaInput
                                className="w-full lg:w-lg h-52 block"
                                placeholder="Message"
                                required
                                name='message'
                                value={form.message}
                                onChange={handleFormChange}
                            ></TextAreaInput>
                        </div>
                        <div className="mt-6 w-full grid md:block">
                            <button
                                type="submit"
                                className="block px-8 py-1.5 pt-2.5 bg-white border border-white text-darkColor hover:bg-transparent active:bg-transparent active:border-white hover:border-white hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                Send
                            </button>
                        </div>
                        <div className="mt-2 text-yellow-300 font-semibold">{message}</div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;