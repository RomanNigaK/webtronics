import { createSlice } from '@reduxjs/toolkit';
import { idText } from 'typescript';

interface IReview{
    page:number,
    header:string,
    text:string,
    img1:string,
    img2:string,
    img3:string,

}
interface IStep{
    step:number,
    header:string,
    title:string,
}

interface IFaq{
    id:number,
    header:string,
    answer:string,
}

interface IState {
    review:IReview[],
    steps:IStep[][],
    faq:IFaq[],
}
// export type {IState};

const initialState: IState = {
    
    review:[
        {
            page:1,
            header:"Best courses ever",
            text:"Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the 'teacher' sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.",
            img1:"/photo/man.png",
            img2:"/photo/girlmini.png",
            img3:"/photo/manincapmini.png",
        },
        {
            page:2,
            header:"Amazing teaching",
            text:"The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
            img1:"/photo/girl.png",
            img2:"/photo/manmini.png",
            img3:"/photo/manincapmini.png",
        },
        {
            page:3,
            header:"Simple and easy",
            text:"I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
            img1:"/photo/manincap.png",
            img2:"/photo/manmini.png",
            img3:"/photo/girlmini.png",
        }
    ],
    steps:[
        [{
            step:1,
            header:"Introduction to Front-End",
            title:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
        },
        {
            step:2,
            header:"Overview of Development",
            title:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
        }]
        ,
        [{
            step:3,
            header:"Introduction to Front-End",
            title:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
        },
        {
            step:4,
            header:"Overview of Development",
            title:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
        }]
        ,
        [{
            step:5,
            header:"Introduction to Front-End",
            title:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
        },
        {
            step:6,
            header:"Overview of Development",
            title:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
        }]
        

    ],
    faq:[
        {
            id:1,
            header:"What is the price?",
            answer:"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },
        {
            id:2,
            header:"What is the price?",
            answer:"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },
        {
            id:3,
            header:"What is the price?",
            answer:", not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },{
            id:4,
            header:"What is the price?",
            answer:"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },
        {
            id:5,
            header:"What is the price?",
            answer:"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        }
    ]

}


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

    }
});




export const { } = appSlice.actions;

export default appSlice.reducer