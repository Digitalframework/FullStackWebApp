'use client';
import { FormEvent, useState } from 'react';
import styles from './Form.module.css'
import {useMultistepForm} from '../../hooks/useMultistepForm';
import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";
import { OrderForm } from "./OrderForm";

type FormData = {
  firstname: string
  lastname: string
  email: string
  street: string
  number: string
  city: string
  zip: string
  quadratmeteranzahl: string
  holzart: string
  datum: string
}
const INITIAL_DATA: FormData = {
  firstname: "",
  lastname: "",
  email: "",
  street: "",
  number: "",
  city: "",
  zip: "",
  quadratmeteranzahl: "",
  holzart: "",
  datum: "",
}

export default function Form() {

  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <OrderForm {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
  }
  /*

      */
    return (
      <div>
    <form className={styles.msform} onSubmit={onSubmit}>
    <ul className={styles.progressbar}>
        <li>Kundeninfos</li>
        <li>Adressdaten</li>
        <li>Auftragsinfos</li>
      </ul>
      {step}
          {!isFirstStep && (
            <button type="button" onClick={back} className={styles.actionbutton}>
              Back
            </button>
          )}
          <button type="submit" className={styles.actionbutton}>{isLastStep ? "Finish" : "Next"}</button>
    </form>
    </div>
    )
}
