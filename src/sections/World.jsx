'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

import mapImage from '../assets/map.png';
import person1Image from '../assets/people-01.png';
import person2Image from '../assets/people-02.png';
import person3Image from '../assets/people-03.png';

const World = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText
                title="| People on the World"
                textStyles="text-center"
            />
            <TitleText
                title={
                    <>
                        Track friends around you and invite them to play
                        together in the same world
                    </>
                }
                textStyles="text-center"
            />

            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className="relative mt-[68px] flex w-full h-[550px]"
            >
                <img
                    src={mapImage}
                    alt="map"
                    className="w-full h-full object-cover"
                />

                <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                    <img
                        src={person1Image}
                        alt="people"
                        className="w-full h-full"
                    />
                </div>

                <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                    <img
                        src={person2Image}
                        alt="people"
                        className="w-full h-full"
                    />
                </div>

                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                    <img
                        src={person3Image}
                        alt="people"
                        className="w-full h-full"
                    />
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default World;
