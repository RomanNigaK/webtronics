import Image from 'next/image';
import React from 'react';
import Header from '../commons/header/Header';
import Paragraph from '../commons/paragraph/Paragraph';
import style from './Gallery.module.css';
import g1 from './media/g1.png';
import g2 from './media/g2223.png';
import g3 from './media/g3.png';
import g4 from './media/g4.png';

export default function Gallery2() {
  return (
    <section>
      <a id="gallery"></a>
      <Header h={2}>Gallery </Header>
      <div className={style.gallery}>
        <div className={style.text}>
          <article>
            <Paragraph>
              By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.
            </Paragraph>
          </article>
        </div>
        <div className={style.img1}>
          <Image src={g2} alt='' />
        </div>
        <div className={style.img2}>
          <Image src={g3} alt='' />
        </div>
        <div className={style.img3}>
          <Image src={g1} alt='' />
        </div>
        <div className={style.img4}>
          <Image src={g4} alt='' />
        </div>
        <div className={style.text2}>
          <article>
            <Paragraph>
              If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.
            </Paragraph>
          </article>
        </div>
      </div>
    </section>
  )
}
