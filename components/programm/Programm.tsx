import Image from 'next/image';
import React from 'react'
import Header from '../commons/header/Header';
import Paragraph from '../commons/paragraph/Paragraph';
import angular from './media/angular.png';
import react from './media/react.png';
import vue from './media/vue.png';
import js from './media/js.png';


import style from './Programm.module.css';
export default function Programming() {
    return (
        <div className={style.programming}>
            <a id="programm"></a>
            <Header h={2}>
                Programming<br />technologies
            </Header>
            <Paragraph textAlign='center'>
                By the end, you’ll have the portfolio and interview skills <br />
                you need to start your new career.
            </Paragraph>
            <div className={style.programms}>
                <div className={style.programm}>
                    <div className={style.logoprogramm}>
                        <Image src={angular} alt="angular" />
                    </div>
                    <Header h={4} fontWeight='500'>
                        Angular
                    </Header>
                </div>
                <div className={style.programm}>
                    <div className={style.logoprogramm}>
                        <Image src={react} alt="react" />
                    </div>
                    <Header h={4} fontWeight='500'>
                        React
                    </Header>
                </div>
                <div className={style.programm}>
                    <div className={style.logoprogramm}>
                        <Image src={vue} alt="vue" />
                    </div>
                    <Header h={4} fontWeight='500'>
                        Vue.js
                    </Header>
                </div>
                <div className={style.programm}>
                    <div className={style.logoprogramm}>
                        <Image src={js} alt="javascript" />
                    </div>
                    <Header h={4} fontWeight="500">
                        JavaScript
                    </Header>
                </div>
            </div>
        </div>

    )
}
