import Image from 'next/image';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { getFaq } from '../../redux/selectors';
import { RootState } from '../../redux/store';
import Header from '../commons/header/Header';
import Paragraph from '../commons/paragraph/Paragraph';
import style from './Faq.module.css';
import icohide from './media/icohide.svg';
import icoshow from './media/icoshow.svg';


export default function Faq() {
    const allfaq = useSelector((state: RootState) => getFaq(state));
    const [currentQuestion, setcurrentQuestion] = useState(1);
    return (
        <section>
            <div className={style.faq}>
                <a id="faq"></a>
                <Header h={2}>
                    Frequently Asked <br />
                    Questions
                </Header>
                <div className={style.content}>
                    <div className={style.leftcolumn}>
                        <Paragraph>
                            Do you have any kind of questions? <br />
                            We are here to help.
                        </Paragraph>
                        <div className={style.q}>

                        </div>
                    </div>
                    <div className={style.rightcolumn}>
                        <article>
                            {
                                allfaq.map(el => {
                                    if (el.id === currentQuestion) {
                                        return (
                                            <div className={style.showfaqbox}>
                                                <div className={style.textfaq}>
                                                    <div className={style.header}>
                                                        <Header h={3} fontWeight="500" textAlign='left'>
                                                            {el.header}
                                                        </Header>
                                                        <Image src={icohide} alt="" />
                                                    </div>

                                                    <Paragraph>
                                                        {el.answer}
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className={style.hidefaqbox}>
                                                <div className={style.textfaq}>
                                                    <div className={style.header}>
                                                        <Header h={3} fontWeight="500" textAlign='left'>
                                                            {el.header}
                                                        </Header>
                                                        <Image src={icoshow} alt="" className={style.showquestion} onClick={() => setcurrentQuestion(el.id)} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
