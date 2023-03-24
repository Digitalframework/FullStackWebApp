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
  sqm: number
  productType: string
  date: string
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

  function dateFormatter(date:Date):string{
    return date.getFullYear() + "/" + (date.getMonth()+1)
    + "/" + date.getDate() + "/" + date.getHours() + ":" + date.getMinutes()
  }

  function setDate(dateinp:Date) {
    updateFields({ date: dateFormatter(dateinp) })
    setStartDate(dateinp);
  }
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const productTypeDropdown = (productTypeChild: string) => {
    updateFields({ productType: productTypeChild })
  } 

  return (
    <FormWrapper title="Auftragsinfos">
        <input type="number" name="sqm" placeholder="Quadratmeteranzahl" required value={sqm}
      onChange={e => updateFields({ sqm: e.target.valueAsNumber })}/>
        <DatePicker
      selected={startDate} 
      onChange={(date:Date) => setDate(date)}
      showTimeSelect
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="yyyy/MM/d/h:mm"
    />
    <div className={styles.dropdown}> 
      <label className={styles.label}>   
      <input type="text" className={styles.dropbtn} value={productType} required placeholder="Holzart"/>
      </label>
      <Dropdown setProductType={productTypeDropdown}></Dropdown>
      </div> 
    </FormWrapper>
    ) 
    
    }