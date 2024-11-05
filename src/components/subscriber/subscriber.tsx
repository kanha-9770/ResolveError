"use client";
import React, { useState } from 'react';
import styles from './subscriber.module.css';
import { TbMailFilled } from "react-icons/tb";
import PositionAwareButton from '../ui/PositionAwareButton';
import { subscribeData } from '../Constants/footer/subscribe'; // Import dynamic content

const Subscribe: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required');
        } else {
            // Handle the subscription logic here
            console.log(`Subscribed with email: ${email}`);
            setError('');
            setEmail(''); // Clear the input field after submission
        }
    };

    return (
        <section className={styles.subscribe}>
            <div className="border border-gray-400 w-full"></div>
            <div className={styles.subsribecontainer}>
                <div className='rounded-full h-12 w-12 bg-white'>
                    <TbMailFilled size={32} className='ml-2 mt-2 text-[#483d73]' />
                </div>
                <form className={`${styles.rightsubscribe} flex`} onSubmit={handleSubmit}>
                    <div className='flex -ml-[39rem] h-[3rem] w-[40rem] bg-white rounded-full items-center p-2 px-5 font-poppins mt-2'>
                        <h2 className={`${styles.subsribeheading} text-2xl text-[#3a2a79] font-bold`}>
                            {subscribeData.heading}
                        </h2>

                        <input
                            name='Email'
                            placeholder={subscribeData.placeholder}
                            className={`${styles.presenceinpfields} h-[1rem] rounded-full p-[1.10rem] border border-gray-300 w-[22rem] -mr-[0.60rem]`}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <PositionAwareButton
                        marginLeft="60px"
                        iconSize="40px"
                        icon
                        height="47px"
                        padding="10px"
                        width="230px"
                        fontSize="25px"
                        borderRadius="100px"
                        bgColor='white'
                        marginTop='8px'
                        textColor='#483d73'
                        text={subscribeData.buttonText}
                        iconColor='#483d73'
                        borderColor='none'
                    />
                </form>
            </div>
        </section>
    );
};

export default Subscribe;