import React, { Dispatch, SetStateAction } from 'react'
import { Inputs } from '../../contact/Contact';
import style from './Input.module.css';

interface IPropsInput {
  placeholder: string,
  type: "text",
  name: string,
  register: Function,
  error: string | undefined,
  setdataForm: Dispatch<SetStateAction<Inputs>>
  dataForm: Inputs,
  value: string,
}

export default function Input({ placeholder, type, name, register, error, setdataForm, dataForm, value }: IPropsInput) {

  return (
    <>
      <div className={!error ? style.boxinputline : style.boxinputlineerror}>
        <div className={!error ? style.boxinput : style.boxinputerror}>
          <input name={name} placeholder={placeholder} type={type} {...register(name)} autoComplete="off"
            onChange={(e) => { setdataForm({ ...dataForm, [name]: e.target.value }) }} value={value} />
        </div>
      </div>
      <p>{error}</p>
    </>


  )
}
