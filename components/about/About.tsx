import Image from 'next/image';
import React from 'react'
import Header from '../commons/header/Header';
import Paragraph from '../commons/paragraph/Paragraph';
import style from './About.module.css';
import avatarWW from './media/avatarWW.png'
import avatarRF from './media/avatarRF.png'
import avatarKW from './media/avatarKW.png'
export default function About() {
    return (
        <div className={style.about}>
            <a id="about"></a>
            <Header h={2}>
                About Us
            </Header>
            
            <div className={style.content}>
                <div className={style.mentors}>
                    <Header h={3} textAlign="center">
                        Mentors
                    </Header>
                <div className={style.namementors}>
                   <div className={style.mentor}>
                        <div className={style.avatar}>
                            <Image src={avatarWW} alt="Wade Warren" />
                        </div>
                        <div className={style.aboutmentor}>
                            <Header h={4} textAlign="left">Wade Warren</Header>
                            <Paragraph>
                            Front-end engineers work <br /> closely with designers
                            </Paragraph>
                        </div>
                   </div>
                   <div className={style.mentor}>
                        <div className={style.avatar}>
                            <Image src={avatarKW} alt="Robert Fox" />
                        </div>
                        <div className={style.aboutmentor}>
                            <Header h={4} textAlign="left">Wade Warren</Header>
                            <Paragraph>
                            Front-end engineers work <br /> closely with designers
                            </Paragraph>
                        </div>
                   </div>
                   <div className={style.mentor}>
                        <div className={style.avatar}>
                            <Image src={avatarRF} alt="Robert Fox" />
                        </div>
                        <div className={style.aboutmentor}>
                            <Header h={4} textAlign="left">Wade Warren</Header>
                            <Paragraph>
                            Front-end engineers work <br /> closely with designers
                            </Paragraph>
                        </div>
                   </div>

                </div>   
                </div>
                <div className={style.title}>
                    <Paragraph fontSize='16px' >
                        Front-end engineers work closely with designers to make <br />
                        websites beautiful, functional, and fast. This Career Path will <br />
                        teach you not only the necessary languages and technologies, <br />
                        but how to think like a front-end engineer, too.
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}
