import React, { useState } from 'react'
import Header from '../commons/header/Header';
import { useSelector } from 'react-redux'
import Paragraph from '../commons/paragraph/Paragraph';
import style from './Review.module.css';
import arrowleft from './media/arrowleft.svg';
import arrowright from './media/arrowright.svg';
import Image from 'next/image';
import { getCurrentPage } from '../../redux/selectors';
import { RootState } from '../../redux/store';
export default function Review() {

    const [page, setpage] = useState(1)
    const { currentPage, quantity } = useSelector((state: RootState) => getCurrentPage(state, page));
    function navPage(p: 1 | -1) {
        let newPage = page + p;
        console.log(newPage)
        if (newPage === 0) {
            setpage(quantity);
            return
        }
        if (newPage > quantity) {
            setpage(1);
            return;
        }
        setpage(newPage);
    }


    if (!currentPage) return <Header h={2}>Not data</Header>

    return (
        <>
            <a id="review"></a>
            <Header h={2}>
                Review
            </Header>
            <div className={style.review}>
                <div className={style.text}>
                    <Header h={4} fontWeight="500" textAlign='left'>
                        {currentPage.header}
                    </Header>
                    <Paragraph>
                        {currentPage.text}
                    </Paragraph>
                </div>
                <div className={style.photosbox}>
                    <div className={style.nav}>
                        <div className={style.pages}>
                            <div className={style.currentpage}>{currentPage.page}/</div>
                            <div className={style.allpages}>{quantity}</div>
                        </div>
                        <div className={style.optionpage}>
                            <Image src={arrowleft} alt="" onClick={() => navPage(-1)} />
                            <Image src={arrowright} alt="" onClick={() => navPage(1)} />
                        </div>
                    </div>
                    <div className={style.photos}>
                        <img src={currentPage.img1} alt="" />
                        <img src={currentPage.img2} alt="" />
                        <img src={currentPage.img3} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}
