'use client';
import styles from './Projects.module.css'
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function AboutUs() {

    return (


<div className="row">
        <Navbar></Navbar>
        <div className={styles.container}>

        <div className={styles.card}>
            <div className={styles.example}>

            <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.date}>
          <span className={styles.day}>12</span>
          <span className={styles.month}>Aug</span>
          <span className={styles.year}>2016</span>
        </div>
        <ul className={styles.menucontent}>
          <li>
            <a href="#" className={styles.fa}></a>
          </li>
          <li><a href="#" className={styles.fa}><span>18</span></a></li>
          <li><a href="#" className={styles.fa}><span>3</span></a></li>
        </ul>
      </div>
      <div className={styles.data}>
        <div className={styles.content}>
          <span className={styles.author}>Jane Doe</span>
          <h1 className={styles.title}><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
          <p className={styles.text}>The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
          <a href="#" className={styles.button}>Read more</a>
        </div>
      </div>
    </div>
    </div>
</div>
        </div>
<Footer></Footer>
</div>


    )

}