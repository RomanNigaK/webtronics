import {RootState} from "./store";


export const  getCurrentPage = (store:RootState,page:number) =>{
    let quantity = store.app.review.length;
    let currentPage = store.app.review.find(i=>i.page===page);
    return  {currentPage,quantity};
  
};

export const getSteps = (store:RootState)=>store.app.steps;
export const getFaq = (store:RootState)=>store.app.faq;
