import { useState } from 'react';
import styles from './Form.module.css';
import { FormWrapper } from './FormWrapper';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { Dropdown } from './Dropdown';
import axios from "axios";

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



  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <FormWrapper title="Auftragsinfos">
        <input type="text" name="sqm" placeholder="Quadratmeteranzahl" required value={sqm}/>
        <DatePicker
      selected={startDate}
      onChange={(date:Date) => setStartDate(date)}
      showTimeSelect
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="yyyy/MM/d/h:mm"
    />
        <Dropdown></Dropdown>
    </FormWrapper>
    ) 
    
    }