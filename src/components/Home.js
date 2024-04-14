import React, { useEffect } from 'react'
import logo from '../assets/logo.png';
import logo_1 from '../assets/logo_1.png';
import about from '../assets/about.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import dextool from '../assets/dextool.png';
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import partner_1 from '../assets/partner_1.png';
import partner_2 from '../assets/partner_2.png';
import partner_3 from '../assets/partner_3.png';
import team_1 from '../assets/team_1.png';
import team_2 from '../assets/team_2.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import AudioPlayer from './AudioPlayer';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 500,
            once: false,
            easing: 'ease',
        });
        Aos.refresh();
    }, [])

    return (
        <div className="overflow-hidden font-nanum text-white-100">

            {/* top section */}

            <AudioPlayer />

            <div className="lg:px-8 px-5 lg:py-8 py-6 bg-orange-100">
                <div className='container mx-auto'>
                    <div className="lg:flex items-center justify-between font-lucky lg:space-y-0 space-y-8">
                        <div className=''>
                            <h1 data-aos='fade-up' className='tracking-wider md:text-6xl text-3xl uppercase lg:w-9/12'>
                                Get ready to witness the most paw-some crossover of the century - TOMWIFHAT! 🎩🐱
                            </h1>
                            <div className='flex gap-8 my-8'>
                                <a href='https://twitter.com/Tomwifhatonsol'><img src={twitter} alt='twitter' className='w-16'></img>
                                </a>
                                <a href='https://t.me/TomWifHatonsol'><img src={telegram} alt='telegram' className='w-16'></img></a>
                                <a href='/'><img src={dextool} alt='dextool' className='w-16'></img></a>
                            </div>
                            <a href='https://docs.tomwifhat.net/'>
                                <button className='bg-black-50 px-10 py-2 rounded-lg text-xl'>
                                    Whitepaper
                                </button>
                            </a>
                        </div>

                        <img src={logo} alt='logo'></img>
                    </div>

                    <div className="lg:flex items-center justify-between lg:space-y-0 space-y-8">
                        <p data-aos='fade-up' className='md:text-5xl text-3xl leading-loosed lg:w-9/12'>
                            get ready for a whisker-twitching, tail-swishing adventure with TOMWIFHAT - where the laughs are plenty, the hats are fancy, and the chase is always on!
                        </p>

                        <img src={logo_1} alt='logo'></img>
                    </div>
                </div>
            </div>

            {/* about us section */}

            <div id='about' className="px-5 py-8 bg-top bg-black-100">
                <div className='container mx-auto'>

                    <div className="lg:flex justify-between lg:space-y-0 space-y-8">
                        <div className='lg:w-1/2'>
                            <img src={about} alt='logo' className='lg:absolute lg:block hidden'></img>
                            <h2 data-aos='fade-up' className='text-center font-lucky text-black-100 md:text-7xl text-3xl uppercase lg:relative z-20 lg:mt-32 lg:-ml-44'>
                                About<br></br>
                                TOMWIFHAT
                            </h2>
                        </div>

                        <div className='lg:w-1/2 space-y-8'>
                            <p data-aos='fade-up' className='md:text-3xl text-xl leading-loosed lg:w-9/12'>
                                Meet Tom, the mischievous cat from "Tom and Jerry," like you've never seen him before. With a touch of sophistication and a dash of dapper, he's now TOMWIFHAT - the feline fashionista who's here to steal the show (and maybe a mouse or two)
                            </p>

                            <iframe src="https://giphy.com/embed/4MpDbxMm3PRsc" frameBorder="0" className="giphy-embed gif-custom" allowFullScreen></iframe>
                        </div>
                    </div>

                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="px-5 bg-about">
                <div className='container mx-auto'>
                    <div className="text-center lg:h-screen">
                        <h3 className='font-extrabold text-outline md:text-9xl text-5xl font-lucky text-yellow-100 lg:pt-96 py-20'>
                            TOKENOMICS
                        </h3>
                    </div>
                </div>
            </div>

            {/* partner section */}

            <div className="px-5 py-8 bg-black-50">
                <div className='container mx-auto'>

                    <div className="lg:flex items-center justify-between">
                        <div className='mt-6 lg:w-1/2'>
                            <h3 data-aos='fade-up' className='tracking-wider font-lucky text-center md:text-6xl text-3xl uppercase'>
                                NAME - TomWifHat
                                Tikxer - TomWif
                            </h3>

                            <div className="lg:flex items-center justify-center gap-x-24 lg:space-y-0 space-y-8 mt-8">
                                <p className='md:text-4xl text-3xl leading-loosed lg:text-left text-center'>
                                    Tokenomics<br></br>
                                    Cex - 5<br></br>
                                    Marketing- 5<br></br>
                                    Presale - 90%
                                </p>

                                <div>
                                    <div className='flex gap-8'>
                                        <a href='https://twitter.com/Tomwifhatonsol'><img src={twitter} alt='twitter' className='w-20'></img></a>
                                        <a href='https://t.me/TomWifHatonsol'><img src={telegram} alt='telegram' className='w-20'></img></a>
                                        <img src={dextool} alt='dextool' className='w-20'></img>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <iframe src="https://giphy.com/embed/HNtEpBViJAeU8" width="480" height="347" frameBorder="0" className="giphy-embed gif-custom" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className='lg:pt-16 py-8'>
                        <h4 data-aos='fade-up' className='tracking-wider font-lucky text-center md:text-5xl text-3xl lg:mb-16 mb-8 uppercase'>
                            "Tomcat: <br></br>
                            Hat-titude Extraordinaire!"
                        </h4>

                        <div className="grid lg:grid-cols-3 grid-cols-1 items-baseline justify-center gap-12 lg:space-y-0 space-y-8 text-center">
                            <div className='space-y-6'>
                                <img src={partner_1} alt=''></img>
                                <p className='md:text-3xl text-2xl text-center'>
                                    Hey, humans! Check meow-t, I'm not just stylish, I'm purr-fectly cool in this HAT…...!
                                </p>
                            </div>

                            <div className='space-y-6'>
                                <img src={partner_2} alt=''></img>
                                <p className='md:text-3xl text-2xl text-center'>
                                    "Tomcat in the house, sporting this cap with Jerry-approved swagger. Who needs mouse traps when you've got style?"
                                </p>
                            </div>

                            <div className='space-y-6'>
                                <img src={partner_3} alt=''></img>
                                <p className='md:text-3xl text-2xl text-center'>
                                    "Hey there, just chillin' with my cap on, showing the world how coolness is really done. Remember, it's not just about the attitude; it's about the cat-titude."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* roadmap */}

                    <div id="roadmap" className="lg:py-12 py-6"
                    >
                        <h3 className="md:text-5xl text-2xl font-lucky tracking-widest font-semibold text-center uppercase text-gradient">
                            Roadmap
                        </h3>

                        <div className="lg:mt-16 mt-6">

                            <div className="h-1 w-full bg-black-20">
                            </div>

                            <div className='h-1 w-full line -translate-y-1'>
                            </div>

                            <div className="lg:flex items-baseline justify-center gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                                <div className="flex flex-col items-center">
                                    <div data-aos="zoom-in" className="absolute -mt-3.5 lg:block hidden">
                                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                        </svg>
                                    </div>

                                    <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                    <div data-aos="flip-right" className="border border-white-50 rounded-4xl lg:p-3 p-6 lg:w-64 w-full lg:h-64 bg-black-20">

                                        <h5 className="text-xl font-semibold pt-2 font-lucky tracking-wider">Q2 2024 - Launch Phase</h5>

                                        <ul className="mt-4 text-black-100 text-xl">
                                            <li>Token Launch</li>
                                            <li>Community Building</li>
                                            <li>Liquidity Pool Establishment</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div data-aos="zoom-in" className="absolute -mt-3.5 lg:block hidden">
                                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                        </svg>
                                    </div>

                                    <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                    <div data-aos="flip-right" className="border border-white-50 rounded-4xl lg:p-3 p-6 lg:w-64 w-full lg:h-64 bg-black-20">

                                        <h5 className="text-xl font-semibold pt-2 font-lucky tracking-wider">Q3 2024 - Development</h5>

                                        <ul className="mt-4 text-black-100 text-xl">
                                            <li>Meme Marketplace Beta</li>
                                            <li>First Community Challenge</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div data-aos="zoom-in" className="absolute -mt-3.5 lg:block hidden">
                                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                        </svg>
                                    </div>

                                    <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                    <div data-aos="flip-right" className="border border-white-50 rounded-4xl lg:p-3 p-6 lg:w-64 w-full lg:h-64 bg-black-20">

                                        <h5 className="text-xl font-semibold pt-2 font-lucky tracking-wider">Q4 2024 - Expansion
                                            and Partnerships</h5>

                                        <ul className="mt-4 text-black-100 text-xl">
                                            <li>TMeme Marketplace Official Launch</li>
                                            <li>Partnership Announcements</li>
                                            <li>Charity Initiatives</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div data-aos="zoom-in" className="absolute -mt-3.5 lg:block hidden">
                                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                        </svg>
                                    </div>

                                    <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                    <div data-aos="flip-right" className="border border-white-50 rounded-4xl lg:p-3 p-6 lg:w-64 w-full lg:h-64 bg-black-20">

                                        <h5 className="text-xl font-semibold pt-2 font-lucky tracking-wider">Q1 2025 - Scaling
                                            and Sustainability</h5>

                                        <ul className="mt-4 text-black-100 text-xl">
                                            <li>Platform Upgrades</li>
                                            <li>Global Community Events</li>
                                            <li>Sustainability Report</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div data-aos="zoom-in" className="absolute -mt-3.5 lg:block hidden">
                                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                        </svg>
                                    </div>

                                    <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                    <div data-aos="flip-right" className="border border-white-50 rounded-4xl lg:p-3 p-6 lg:w-64 w-full lg:h-64 bg-black-20">

                                        <h5 className="text-xl font-semibold pt-2 font-lucky tracking-wider">Q2 2025 and Beyond
                                            - Innovations
                                            and New Horizons</h5>

                                        <ul className="mt-4 text-black-100 text-xl">
                                            <li>New Features and Innovations
                                                Expansion into New Markets
                                                Ongoing Community and Charity Support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* team section */}

                    <div className="lg:py-16 py-5 lg:px-20 px-5">

                        <h3 className='md:text-6xl text-5xl font-semibold font-lucky tracking-widest text-center lg:mb-20 mb-12 uppercase'>
                            team
                        </h3>
                        <div className='flex flex-col items-center justify-center gap-y-6 text-center'>
                            <img src={team_1} alt='' className='lg:block lg:w-1/3 border-4 border-black-100 rounded-lg'></img>

                            <h3 className='md:text-3xl text-xl font-semibold font-lucky tracking-widest uppercase'>
                                Aunker
                            </h3>
                            <p className='lg:text-2xl text-xl font-lucky'>Owner/CEO</p>
                            <a href='https://t.me/paesmoreira' className=''><img src={telegram} alt='' className='lg:block flex mx-auto w-20'></img></a>
                        </div>
                    </div>

                    {/* partners */}

                    <div className="lg:flex items-center justify-between lg:space-y-0 space-y-8 ">
                        <div className='lg:pl-20'>

                            <h4 data-aos='fade-up' className='tracking-wider font-lucky text-center md:text-6xl text-3xl mb-8 uppercase'>
                                Partners
                            </h4>

                            <div>
                                <div className='flex flex-wrap items-center justify-center gap-8'>
                                    <img src={p_1} alt=''></img>
                                    <img src={p_2} alt=''></img>
                                    <img src={p_3} alt=''></img>
                                </div>

                                <img src={p_4} alt='' className='flex mx-auto mt-8'></img>
                            </div>
                        </div>

                        <div>
                            <iframe src="https://giphy.com/embed/xw40lB5BXuPGE" frameBorder="0" className="giphy-embed gif-custom" allowFullScreen></iframe>
                        </div>
                    </div>

                    <p className='text-center mt-8 lg:text-3xl text-xl'>Email: <a className='hover:underline' href='mailto:admin@tomwifhat.net'>admin@tomwifhat.net</a></p>
                    <p className='text-center pt-3 lg:text-3xl text-xl'>Copyright © 2024 TOMWIFHAT. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}
