import { useEffect, useState } from 'react';
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
  
  const [hours, setBookedHours] = useState(Array<number>)
  const [minutes, setBookedMinutes] = useState(Array<number>)
  const [bookedTimes, setBookedTimes] = useState(Array<Date>)
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );



  useEffect(() => {
    console.log("useEffectcall")
    // Update the document title using the browser API
    async function fetchDates() {
    await axios
    .get("http://localhost:8080/api/v1/auth/orderList")
    .then(function (response) {
      response.data.forEach(function (item:any) {
        var dateInString = item.date.split("/", 4);
        console.log(dateInString)
        var time = dateInString[3].split(":", 2); 
        console.log(time[0] + " " + time[1])
        console.log(typeof(parseInt(time[0])))
        var bookedDates = dateInString[0] + "/" + dateInString[1] + "/" + dateInString[2]
        console.log(bookedDates)
        hours.push(parseInt(time[0])); 
        minutes.push(parseInt(time[1]));
        bookedTimes.push(setHours(setMinutes(new Date(bookedDates), parseInt(time[1])), parseInt(time[0])))
    });  
    });
    }
    fetchDates()
  }, [startDate]);

  function dateFormatter(date:Date):string{
    return date.getFullYear() + "/" + (date.getMonth()+1)
    + "/" + date.getDate() + "/" + date.getHours() + ":" + date.getMinutes()
  }

  function setDate(dateinp:Date) {
    updateFields({ date: dateFormatter(dateinp) })
    setStartDate(dateinp);
    
  }
  
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
      minTime={setHours(setMinutes(new Date(), 0), 8)}
      maxTime={setHours(setMinutes(new Date(), 0), 19)}
      excludeTimes={
        bookedTimes
      }
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


