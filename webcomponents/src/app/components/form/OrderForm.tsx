import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { FormWrapper } from './FormWrapper';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { Dropdown } from './Dropdown';
import { addDays } from 'date-fns';
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
  
  const [bookedTimes, setBookedTimes] = useState(Array<Date>)
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const [dateCollection, setDateCollection] = useState(Array<String>)




  useEffect(() => {
    console.log("useEffect")
    // Update the document title using the browser API
    var currentDate = startDate.getFullYear() + "/" + (startDate.getMonth()+1)
        + "/" + startDate.getDate()
    var arrExcludedTimes:String[] = []    
    async function fetchDates() {
    await axios
    .get("http://localhost:8080/api/v1/auth/orderList")
    .then(function (response) {
      response.data.forEach(function (item:any) {
        arrExcludedTimes.push(item.date)
        
        var dateInString = item.date.split("/", 4);
        var time = dateInString[3].split(":", 2);
        var bookedDates = dateInString[0] + "/" + dateInString[1] + "/" + dateInString[2]
        console.log(currentDate)
        console.log(bookedDates)
        console.log(currentDate == bookedDates)
        if (currentDate == bookedDates){
          bookedTimes.push(
            setHours(setMinutes(new Date(), parseInt(time[1])), parseInt(time[0])));
          }   
    });  
    });
    setDateCollection(arrExcludedTimes)
    }
    fetchDates()
  }, []); //?? besser anders

  function dateFormatter(date:Date):string{
    return date.getFullYear() + "/" + (date.getMonth()+1)
    + "/" + date.getDate() + "/" + date.getHours() + ":" + date.getMinutes()
  }

  function setDate(dateinp:Date) {
    setStartDate(dateinp);
    updateFields({ date: dateFormatter(dateinp) })
  }
  
  const productTypeDropdown = (productTypeChild: string) => {
    updateFields({ productType: productTypeChild })
  }

  
  function getExcludedTimes(date:Date) {
    setStartDate(date);
    console.log(date)
    console.log("getExcludedTimes")
    console.log(dateCollection)
    var arrExcludedTimes:Date[] = []
    var currentDate = date.getFullYear() + "/" + (date.getMonth()+1)
        + "/" + date.getDate() 
    dateCollection.forEach(function (item:any) {
      var dateInString = item.split("/", 4);
      var time = dateInString[3].split(":", 2);
      var bookedDates = dateInString[0] + "/" + dateInString[1] + "/" + dateInString[2]
      console.log(currentDate)
      console.log(bookedDates)
      if(bookedDates== currentDate){
        console.log("push")
        arrExcludedTimes.push(
          setHours(setMinutes(new Date(), parseInt(time[1])), parseInt(time[0])));
      }
         
    });
    console.log(arrExcludedTimes)
    console.log(arrExcludedTimes.length)
    
    setBookedTimes(arrExcludedTimes)
  }

  //      
  return (
    <FormWrapper title="Auftragsinfos">
        <input type="number" name="sqm" placeholder="Quadratmeteranzahl" required value={sqm}
      onChange={e => updateFields({ sqm: e.target.valueAsNumber })}/>
        <DatePicker
      onSelect={(date:Date) => getExcludedTimes(date)}  
      selected={startDate} 
      onChange={(date:Date) => setDate(date)}
      showTimeSelect
      minDate={new Date()}
      maxDate={addDays(new Date(), 360)}
      minTime={setHours(setMinutes(new Date(), 0), 8)}
      maxTime={setHours(setMinutes(new Date(), 0), 19)}
      excludeTimes={bookedTimes}
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


