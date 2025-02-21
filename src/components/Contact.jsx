import { useEffect } from 'react';
import AOS from 'aos';
import TextAreaInput from "./atoms/TextAreaInput";
import TextInput from "./atoms/TextInput";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: false
        });
    }, []);

    return (
        <div id="contact" className="pt-12">
            <div className="py-6 px-4 md:px-8 mx-auto max-w-full flex items-center justify-center gap-8 flex-col md:flex-row bg-linear-30 from-themColor to-themColor2 text-white">
                <div className="md:w-1/2">
                    <img
                        src="/images/contact.svg"
                        className="w-96 h-auto sm:ml-auto"
                        alt="contact"
                        data-aos="zoom-in"
                        data-aos-delay={50}
                    />
                </div>
                <div className="md:w-1/2 pb-6">
                    <h3 className="text-3xl mb-4 !text-white capitalize">Get In Touch</h3>
                    <form>
                        <div className="flex items-center gap-2">
                            <TextInput
                                className="w-full lg:w-62 block"
                                placeholder="First Name"
                                required
                            />
                            <TextInput
                                className="w-full lg:w-62 block"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <TextInput
                                type="email"
                                className="w-full lg:w-62 block"
                                placeholder="Email Address"
                                required
                            />
                            <TextInput
                                className="w-full lg:w-62 block"
                                placeholder="Phone No."
                            />
                        </div>
                        <div className="mt-2">
                            <TextAreaInput
                                className="w-full lg:w-lg h-52 block"
                                placeholder="Message"
                                required
                            ></TextAreaInput>
                        </div>
                        <div className="mt-6 w-full grid md:block">
                            <button
                                type="submit"
                                className="block px-8 py-1.5 pt-2.5 bg-white border border-white text-darkColor hover:bg-transparent hover:border-white hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;