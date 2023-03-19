import { useState } from 'react'
import styles from './Form.module.css'
import { FormWrapper } from './FormWrapper'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from './Dropdown';

type OrderData = {
  sqm: string
  productType: string
  date: Date
}

type OrderFormProps = OrderData & {
  updateFields: (fields: Partial<OrderData>) => void
}
//<input type="text" name="productType" placeholder="Holzart" required/>
export function OrderForm({
  sqm,
  productType,
  date,
  updateFields,
}: OrderFormProps)
 {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <FormWrapper title="Auftragsinfos">
        <input type="text" name="sqm" placeholder="Quadratmeteranzahl" required value={sqm}/>
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} required/>
        <Dropdown></Dropdown>
    </FormWrapper>
    ) 
    
    }