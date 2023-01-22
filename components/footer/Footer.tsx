import Image from 'next/image';
import React from 'react';
import style from './Footer.module.css';
import logo from './../../public/logo.svg';
import Paragraph from '../commons/paragraph/Paragraph';
import facebook from './media/facebook.svg';
import social1 from './media/social1.svg';
import social2 from './media/social2.svg';
import social3 from './media/social3.svg';

export default function Footer() {
    return (
        <footer>
            <div className={style.boxfooter}>
                <div className={style.footer}>
                    <div className={style.box}>
                        <div className={style.infoweb}>
                            <Image src={logo} alt="" />
                            <address>
                                <Paragraph fontWeight="400">
                                    Wisconsin Ave, Suite 700 <br />
                                    Chevy Chase, Maryland 20815
                                </Paragraph>
                            </address>
                        </div>
                        <div className={style.menu}>
                            <div className={style.titlefooter}>
                                Company
                            </div>
                            <nav>
                                <div className={style.nav}>
                                    <div className={style.item}><a href="#about">About Us</a></div>
                                    <div className={style.item}><a href="#review">Review</a></div>
                                    <div className={style.item}><a href="#steps">Steps</a></div>
                                    <div className={style.item}><a href="#gallery"> Gallery</a></div>
                                    <div className={style.item}><a href="#faq">FAQs</a></div>
                                </div>
                            </nav>
                        </div>
                        <div className={style.social}>
                            <div className={style.titlefooter}>
                                Social
                                <div className={style.nav}>
                                    <Image src={facebook} alt='' />
                                    <Image src={social1} alt='' />
                                    <Image src={social2} alt='' />
                                    <Image src={social3} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
