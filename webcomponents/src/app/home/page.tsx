'use client';
import styles from './Home.module.css'
import Navbar from '../components/navbar/page';
import Form from '../components/form/page';
import { useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Home() {

    const {height,width} = useWindowDimensions();

    return (
        <div className={styles.pagewrapper}>
            <Navbar></Navbar>

                <div className={styles.picturecarousel} style={{height:width >= 1245 ? 0.85*height:0.4*height}}>
		            <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/3680454/pexels-photo-3680454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/13176371/pexels-photo-13176371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <img src="https://images.pexels.com/photos/5089149/pexels-photo-5089149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <h1 className={styles.h1carousel} style={{transform: width >= 1245 ? `translateY(${height}%)` : `translateY(${0.15*height}%)`}}>Ein leben lang gibt es nur eine Wahl</h1>
                        <p className={styles.pcarousel} style={{transform: width >= 1245 ? `translateY(${1.4*height}%)` : `translateY(${0.2*height}%)`}}>
                        Wir führen unsere Projekte für große Unternehmen sowie wie private Kunden sorgfaltig und schnell durch.
                        </p>
                    <div className={styles.buttonwrapper} style={{transform: width >= 1245 ? `translateY(${height}%)` : `translateY(${0.4*height}%)`}}>
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
                        <div className={styles.verticalbar} style={{display: width >= 805 ? 'flex' : 'none'}}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.707 14.707" xmlSpace="preserve" width="256px" height="256px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="6.275" y="0" style={{fill:"#222222"}} width="2.158" height="14.707"></rect> </g> </g></svg>
                    </div>
                    
                    </div>
                </div>
               
                
                <div className={styles.tilecontainer}> 
                    <div className={styles.backgroundcontainer} style={{width: `${0.075*width}px`,
    backgroundSize: `${0.0375*width}px ${0.0859375*width}px`, backgroundImage: `url("data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='${0.15*width}pt' height='${0.34375*width}pt' viewBox='0 0 288.000000 660.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cg transform='translate(0.000000,660.000000) scale(0.100000,-0.100000)'%0Afill='%23222222' stroke='none'%3E%3Cpath d='M0 3275 l0 -3275 1440 0 1440 0 0 3275 0 3275 -1440 0 -1440 0 0%0A-3275z m2810 1659 c0 -850 -4 -1544 -8 -1542 -11 4 -2656 3065 -2660 3078 -2%0A7 470 10 1332 10 l1336 0 0 -1546z m-1385 -75 c737 -853 1342 -1555 1343%0A-1560 2 -6 -135 -8 -359 -7 l-363 3 -987 1110 -987 1110 -1 448 c-1 246 2 447%0A7 447 4 0 610 -698 1347 -1551z m-421 -507 c506 -571 921 -1043 924 -1050 3%0A-9 -73 -12 -350 -12 l-353 1 -577 631 -578 632 0 418 c0 230 3 418 8 417 4 0%0A421 -467 926 -1037z m-398 -477 c280 -305 510 -562 512 -570 3 -13 -43 -15%0A-365 -15 l-368 1 -157 172 -157 172 -1 398 c0 332 2 397 14 397 7 0 243 -250%0A522 -555z m-418 -460 c50 -55 92 -106 92 -112 0 -10 -28 -13 -105 -13 l-105 0%0A0 116 c0 90 3 115 13 112 7 -2 54 -48 105 -103z m112 -197 c0 -17 -201 -218%0A-217 -218 -10 0 -13 29 -13 115 l0 115 115 0 c84 0 115 -3 115 -12z m818 -3%0Ac-5 -22 -1019 -1125 -1035 -1125 -11 0 -13 75 -13 397 l0 398 172 172 173 173%0A353 0 c308 0 353 -2 350 -15z m832 1 c0 -16 -1848 -2070 -1867 -2074 -11 -3%0A-13 70 -13 411 l0 415 578 631 577 630 363 1 c298 0 362 -2 362 -14z m818 1%0Ac-5 -22 -2671 -3077 -2685 -3077 -11 0 -13 79 -13 441 l0 441 992 1103 993%0A1104 358 0 c288 1 358 -2 355 -12z m42 -1617 l0 -1530 -1336 0 c-1177 0 -1335%0A2 -1332 15 5 23 2639 3045 2655 3045 11 0 13 -258 13 -1530z'/%3E%3C/g%3E%3C/svg%3E%0A")`}}></div>
                    <div className={styles.productinfo} ></div>
                </div>
                <div className={styles.contactcontainer}></div>
                <div className={styles.formcontainer}>
                <Form></Form>
               </div>
        </div>
    )

}