import React from 'react'
import Btn from '../commons/btn/Btn';
import Header from '../commons/header/Header';
import Paragraph from '../commons/paragraph/Paragraph';
import style from './Title.module.css';

export default function Title() {
  return (
    <header>
      <div className={style.title}>
        <div className={style.line1}>
          <article>
            <Header h={1}>Front-End</Header>

            <Paragraph marginLeft='50px' fontSize='16px'>
              Make UIs and websites beautiful, functional,<br />
              and fast. Cover all the topics that expensive<br />
              bootcamps teach (and more).
            </Paragraph>
          </article>
        </div>
        <div className={style.line2}>
          <Btn text='Start my career change' disabled={true} />
          <Header h={1} textAlign='center' marginLeft='20px'>Developer</Header>

        </div>
        <div className={style.line3}>
          <h3>Courses</h3>
        </div>
      </div>
    </header>
  )
}
