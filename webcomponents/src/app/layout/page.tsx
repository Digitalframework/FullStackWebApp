'use client';
import styles from './Layout.module.css'
import Navbar from '../navbar/page';
import Form from '../form/page';
import { useState } from 'react';

export default function Layout() {

    return (
        <div className={styles.pagewrapper}>
            <Navbar></Navbar>

                <div className={styles.picturecarousel}>
		            <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/3680454/pexels-photo-3680454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/13176371/pexels-photo-13176371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/5089149/pexels-photo-5089149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <button onclick="#" className={styles.refbutton}>Erfahren Sie mehr zu unseren Projekten</button>
                </div>
                <div className={styles.layoutcontainer}>
                    <div className={styles.picturecontainer}>
                        <img className={styles.layoutpicture}src="https://images.pexels.com/photos/1486470/pexels-photo-1486470.jpeg?auto=compress&cs=tinysrgb&w=1600 " alt=""/>
                    </div>
                    <div className={styles.infotext}>
                        <h2 className={styles.h2}>Unser Anspruch auf Detail</h2>
                        <p className={styles.p}>
                        Bei ABC Carpentry sind wir stolz darauf, bei jedem Projekt, dass wir durchführen, außergewöhnliche Handwerkskunst
                        und hochwertigen Kundenservice zu bieten. Unser Team aus erfahrenen Schreinern ist auf eine breite Palette von Schreinerarbeiten
                        spezialisiert. Mit einem Fokus zum Detail und der Verpflichtung, nur die besten Materialien zu verwenden, arbeiten wir eng mit unseren Kunden zusammen
                        ,um ihre Visionen zum Leben zu erwecken. 

                        </p>
                        <hr className={styles.hr}/>
                        <h3 className={styles.h3}>Treten sie mit dem Formular mit uns in Kontakt</h3>
                    </div>
                </div>
                <div className={styles.formcontainer}>
                <Form></Form>
               </div>
        </div>
    )

}