import React, { PropsWithChildren, ReactElement } from 'react'

interface IPropsHeader extends PropsWithChildren {
    h: 1|2|3|4,
    textAlign?: CanvasTextAlign,
    fontWeight?:string;
    marginLeft?:string,

}

export default function Header({ children, h, textAlign,fontWeight ,marginLeft}: IPropsHeader) {
    let htmlTeg;
    const staleHeader = {
        "fontWeight":fontWeight||"600"
    }
    switch (h) {
        case 1:
            htmlTeg = <h1 style={staleHeader}>{children}</h1>
            break;
        case 2:
            htmlTeg = <h2 style={staleHeader}>{children}</h2>
            break;
        case 3:
            htmlTeg = <h3 style={staleHeader}>{children}</h3>
            break;
        case 4:
            htmlTeg = <h4 style={staleHeader}>{children}</h4>
            break;
        default:
            const unknownAction: never = h 
            break;
    }
   
    return (
        <div style={{ "textAlign": textAlign || "center","marginLeft":marginLeft||"0px"}}>
            {htmlTeg}
        </div>
    )
}
