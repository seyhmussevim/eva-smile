"use client";
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Bize Ulasin";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(() => {
                setSuccess(true);
                form
                    .current
                    .reset();
            }, () => {
                setError(true);
            });
    };

    return (
        <motion.div
            className="h-full"
            initial={{
                y: "-200vh"
            }}
            animate={{
                y: "0%"
            }}
            transition={{
                duration: 1
            }}>
            <div
                className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div
                    className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                    <div>
                        {
                            text
                                .split("")
                                .map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            opacity: 1
                                        }}
                                        animate={{
                                            opacity: 0
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.1
                                        }}>
                                        {letter}
                                    </motion.span>
                                ))
                        }
                        😊
                    </div>
                </div>
                {/* FORM CONTAINER */}
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-3 justify-center p-24">
                    <span>Telefon : +389 71 858333</span>

                    <span>Email : evasmile.mk@gmail.com</span>
                    <span>Adres : 29-ti Noemvri Rd 2g , entrance 1000</span>

                </form>
            </div>
        </motion.div>
    );
};

export default ContactPage;