import React, { useState } from 'react'
import Btn from '../commons/btn/Btn';
import Header from '../commons/header/Header';
import Input from '../commons/input/Input';
import Paragraph from '../commons/paragraph/Paragraph';
import style from './Contact.module.css';
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Submit from '../commons/submit/Submit';
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup.string().email().required(),
});

type Inputs = {
    name: string,
    phone: string,
    email: string,
};
export type { Inputs }
export default function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<Inputs> = data => {
        reset();
        setdataForm({
            name: '',
            phone: '',
            email: '',
        });
        updateDataServer(data);

    };
    const [dataForm, setdataForm] = useState<Inputs>({
        name: '',
        phone: '',
        email: '',
    })


    function isDataForm(obj: Inputs): boolean {
        if (obj.email && obj.phone && obj.email) {
            return true;
        }
        return false;
    }

    async function updateDataServer(data: Inputs) {

        await fetch('http://localhost:3004/feedback/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))


    }


    return (
        <div className={style.contact}>
            <a id="contact"></a>
            <div className={style.boxcontact}>
                <div className={style.formcontact}>
                    <div>
                        <div>
                            <div className={style.header}>
                                <Header h={2}>
                                    Contact  us
                                </Header>
                                <Paragraph textAlign='center'>
                                    Do you have any kind of help please contact with us.
                                </Paragraph>
                            </div>
                            <div className={style.inputs}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Input placeholder='Name' type='text' name="name"
                                        register={register}
                                        error={errors.name?.message}
                                        setdataForm={setdataForm}
                                        dataForm={dataForm}
                                        value={dataForm.name}
                                    />

                                    <Input
                                        placeholder='Phone' type='text' name="phone" register={register} error={errors.phone?.message}
                                        setdataForm={setdataForm}
                                        dataForm={dataForm} value={dataForm.phone} 
                                        
                                        />

                                    <Input placeholder='E-mail' type='text' name="email" register={register} error={errors.email?.message}
                                        setdataForm={setdataForm}
                                        dataForm={dataForm} value={dataForm.email} />

                                    <label htmlFor={isDataForm(dataForm) ? 'submit' : ''}>
                                        <Btn text='Send' disabled={isDataForm(dataForm)} />
                                    </label>
                                    <Submit />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
