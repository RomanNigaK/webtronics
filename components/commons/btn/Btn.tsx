import React from 'react'
import style from './Btn.module.css';
interface IBtnProps{
    text:string,
    disabled:boolean,
}
export default function Btn({text,disabled}:IBtnProps) {
  return (
    <div className={!disabled?style.btnnotactive:style.btn}>
        <div>
            {text}
        </div>
    </div>
  )
}
