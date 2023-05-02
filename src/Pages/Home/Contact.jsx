import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Contact = () => {
    return (
        <div className='bg-[#EEEE] pt-10 pl-10 lg:flex '>
            <div className='w-1/2'>
                <Player src='https://lottie.host/2c1f74cb-0e71-43c2-9066-5b5b3d26e2b2/ZpmE4glAIX.json' className='player w-96 ' loop autoplay ></Player>
            </div>
            <div>
                <p className='text-3xl font-extrabold font-serif'>Contacts</p>
                <div>
                <div className="card w-96 ">
                    <div className="card-body">
                        <Player src='https://assets10.lottiefiles.com/packages/lf20_55bbjdzw.json' className='player w-32' loop autoplay></Player>
                        <h2 className="card-title">Talk to know more!</h2>
                        <p>Interested in BanglaFood? Just pick up the phone to chat with a member of our sales team.</p>
                        <p>+88018*******</p>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;