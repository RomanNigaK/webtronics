import Image from 'next/image';
import React from 'react'
import style from './MainMenu.module.css';
import logo from './media/logo.svg';
export default function MainMenu() {
    console.log(logo);
    return (
        <nav>
            <div className={style.mainmenu}>
                <div className={style.logo}>
                    <Image src={logo} alt="webtronics" />
                </div>
                <div className={style.menu}>
                    <div className={style.itemmenu}>
                        <a href="#about"> About</a>
                    </div>
                    <div className={style.itemmenu}>
                        <a href="#programm"> Programs</a>
                    </div>
                    <div className={style.itemmenu}>
                        <a href="#steps"> Steps</a>
                    </div>
                    <div className={style.itemmenu}>
                        <a href="#faq">  Questions</a>
                    </div>
                    <div className={style.itemmenu}>
                        <a href="#contact">  Get in touch</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
