import { useState } from 'react';
import styles from './Form.module.css'
//.dropdown {
//	position: relative;
//	display: inline-block;
//}

type DropdownProps = {
        setProductType: (setProductType: string) => void
}


export function Dropdown({ setProductType }:DropdownProps){



    return (   

  
<div id="Produktart" className={styles.dropdowncontent}>

<a href="#Produktart" onClick={() => setProductType("Birke")}>
        <img src=
"https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="80" height="80"/> 
        <p>Birke</p></a>

 <a href="#Produktart" onClick={() => setProductType("Eiche")}>
        <img src=
"https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="80" height="80"/>
        <p>Eiche</p></a>
    <a href="#Produktart" onClick={() => setProductType("Fichte")}>
        <img src=
"https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="80" height="80" /><p>Fichte</p></a>
 <a href="#Produktart" onClick={() => setProductType("Tanne")}>
        <img src=
"https://images.pexels.com/photos/218434/pexels-photo-218434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="80" height="80"/><p>Tanne</p></a>
         <a href="#Produktart" onClick={() => setProductType("Tanne")}>
        <img src=
"https://images.pexels.com/photos/218434/pexels-photo-218434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="80" height="80"/><p>Tanne</p></a>
         <a href="#Produktart" onClick={() => setProductType("Tanne")}>
        <img src=
"https://images.pexels.com/photos/218434/pexels-photo-218434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="80" height="80"/><p>Tanne</p></a>
        
</div>

)
}