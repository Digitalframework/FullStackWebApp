import { FormEvent, useState } from 'react';
import styles from './Form.module.css'
import {useMultistepForm} from '../../hooks/useMultistepForm';
import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";
import { OrderForm } from "./OrderForm";
import axios from 'axios';

type FormData = {
  firstnameUF: string
  lastnameUF: string
  emailUF: string
  street: string
  number: string
  city: string
  zip: string
  sqm: number
  productType: string
  date: string
}
const INITIAL_DATA: FormData = {
  firstnameUF: "",
  lastnameUF: "",
  emailUF: "",
  street: "",
  number: "",
  city: "",
  zip: "",
  sqm: 2,
  productType: "",
  date: ""
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

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    try {
      await 
      axios.all([
        axios.post(
          'http://localhost:8080/api/v1/auth/register',
          {
            firstname: data.firstnameUF,
            lastname: data.lastnameUF,
            email: data.emailUF,
            password: "1234",
          }), 
        axios.post(
          'http://localhost:8080/api/v1/auth/adress',
          {
            street: data.street,
            number: data.number,
            city: data.city,
            zip: data.zip,
          }), 
        axios.post('http://localhost:8080/api/v1/auth/order', {
          sqm: data.sqm,
          productType: data.productType,
          date: data.date
        })
      ])

      .then(axios.spread((data1, data2,data3) => {
        // output of req.
        console.log('data1', data1, 'data2', data2, 'data3', data3)
      }));
      
      }
      catch(err){
        alert("User Registration failed");
      }
  }
  /*

      */
    return (
      <div className={styles.formroot}>
    <form className={styles.msform} onSubmit={onSubmit}>
    <ul className={styles.progressbar}>
        <li className={currentStepIndex== 0||1||2 ?styles.active:styles.notactive}>Kundeninfos </li>
        <li className={currentStepIndex== 1 || isLastStep ?styles.active:styles.notactive} >Adressdaten</li>
        <li className={currentStepIndex== 2 ?styles.active:styles.notactive}>Auftragsinfos</li>
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
