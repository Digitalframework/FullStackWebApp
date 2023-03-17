import styles from './Form.module.css'
//.dropdown {
//	position: relative;
//	display: inline-block;
//}
export function Dropdown(){
    return (   
<div className={styles.dropdown}>
<input type="button" className={styles.dropbtn} value="Holzarten"/>
  
<div className={styles.dropdowncontent}>
<ul>
<li ><a href="#">
        <img src=
"https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="100" height="75"/> Birke</a></li >

<li >  <a href="#">
        <img src=
"https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="100" height="75"/> Eiche</a></li >
<li >    <a href="#">
        <img src=
"https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="100" height="75"/> Fichte</a></li >
<li >  <a href="#">
        <img src=
"https://images.pexels.com/photos/218434/pexels-photo-218434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="100" height="75"/> Tanne</a></li >
        </ul>
</div>
</div>
)
}