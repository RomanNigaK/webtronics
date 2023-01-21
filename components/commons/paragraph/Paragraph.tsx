import React, { PropsWithChildren } from 'react'

interface IPropsParagraph extends PropsWithChildren {
  fontSize?: string,
  marginLeft?:string,
  textAlign?:CanvasTextAlign;
  color?:string,
  fontWeight?:string,
}


export default function Paragraph({ children, fontSize,marginLeft,textAlign,color,fontWeight }: IPropsParagraph) {
  const style = {
    "fontSize": fontSize || "14px",
    "marginLeft":marginLeft||"0",
    "textAlign":textAlign||"left",
    "color":color||"#FFFFFF",
    "fontWeight":fontWeight||"400",
  }
  return (
    <>
      <p style={style}>
        {children}
      </p>
    </>
  )
}
