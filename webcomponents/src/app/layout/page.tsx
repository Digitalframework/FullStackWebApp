'use client';
import styles from './Layout.module.css'
import Navbar from '../navbar/page';
import Form from '../form/page';
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Layout() {

    const {height,width} = useWindowDimensions();

    return (
        <div className={styles.pagewrapper}>
            <Navbar></Navbar>

                <div className={styles.picturecarousel} style={{height: height-0.15*height}}>
		            <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/3680454/pexels-photo-3680454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/13176371/pexels-photo-13176371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/5089149/pexels-photo-5089149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <h1 className={styles.h1carousel} style={{transform: `translateY(${height-0.2*height}%)`}}>Ein leben lang gibt es nur eine Wahl</h1>
                        <p className={styles.pcarousel}style={{transform: `translateY(${height}%)`}}>
                        Wir führen unsere Projekte für große Unternehmen sowie wie private Kunden sorgfaltig und schnell durch.
                        </p>
                    <div className={styles.buttonwrapper} style={{transform: `translateY(${height}%)`}}>
                    <a href="#" className={styles.btn}>Unsere Projekte</a>
                    </div>
                </div>
                <div className={styles.layoutcontainer}>
                    <div className={styles.infotext}>
                        <h2 className={styles.h2}>Unser Anspruch auf Detail</h2>
                        <p className={styles.p}>
                        Bei ABC Carpentry sind wir stolz darauf, bei jedem Projekt, dass wir durchführen, außergewöhnliche Handwerkskunst
                        und hochwertigen Kundenservice zu bieten. Unser Team aus erfahrenen Schreinern ist auf eine breite Palette von Schreinerarbeiten
                        spezialisiert.

                        </p>
                        <hr className={styles.hr}/>
                        <h3 className={styles.h3}>Treten sie mit dem Formular mit uns in Kontakt</h3>
                    </div>
                    <div className={styles.verticalbar}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.707 14.707" xmlSpace="preserve" width="256px" height="256px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="6.275" y="0" style={{fill:"#222222"}} width="2.158" height="14.707"></rect> </g> </g></svg>
                    </div>
                </div>
               
                
                <div className={styles.tilecontainer}> 
                    <div className={styles.backgroundcontainer}></div>
                    <div className={styles.productinfo}></div>
                </div>
                <div className={styles.contactcontainer}></div>
                <div className={styles.formcontainer}>
                <Form></Form>
               </div>
        </div>
    )

}