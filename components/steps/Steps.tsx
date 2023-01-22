import React from 'react'
import { useSelector } from 'react-redux';
import { getSteps } from '../../redux/selectors';
import { RootState } from '../../redux/store';
import Header from '../commons/header/Header';
import Paragraph from '../commons/paragraph/Paragraph';
import style from './Steps.module.css';
export default function Steps() {
    const steps = useSelector((store: RootState) => getSteps(store));
    console.log(steps)

    return (
        <section>
            <div className={style.steps}>
                <a id="steps"></a>
                <Header h={2}>Steps</Header>
                <div className={style.wood}>
                    {
                        steps.map((el) => {
                            return (
                                <div className={style.couple}>

                                    <div className={style.stepleft}>
                                        <div className={style.boxinfostep}>
                                            <div className={style.infostep}>
                                                <article>
                                                    <Info step={el[0].step} header={el[0].header} description={el[0].title} />
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.stepright}>
                                        <div className={style.boxinfostep}>
                                            <div className={style.infostep}>
                                                <article>
                                                    <Info step={el[1].step} header={el[1].header} description={el[1].title} />
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </section>
    )
}

interface IPropsInfo {
    step: number,
    header: string,
    description: string,

}

function Info({ step, header, description }: IPropsInfo) {

    return (
        <div>
            <Header h={4} textAlign='left' fontWeight="500">
                Step {step}
            </Header>
            <Header h={3} textAlign='left'>
                {header}
            </Header>
            <Paragraph color='#A2CBFB'>
                {description}
            </Paragraph>
        </ div>
    )
}