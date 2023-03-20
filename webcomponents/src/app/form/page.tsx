'use client';
import { FormEvent, useState } from 'react';
import styles from './Form.module.css'
import {useMultistepForm} from '../../hooks/useMultistepForm';
import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";
import { OrderForm } from "./OrderForm";

type FormData = {
  firstnameUF: string
  lastnameUF: string
  emailUF: string
  street: string
  number: string
  city: string
  zip: string
  sqm: string
  productType: string
  date: Date
}
const INITIAL_DATA: FormData = {
  firstnameUF: "",
  lastnameUF: "",
  emailUF: "",
  street: "",
  number: "",
  city: "",
  zip: "",
  sqm: "",
  productType: "",
  date: new Date("")
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
      <div className={styles.formroot}>
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
