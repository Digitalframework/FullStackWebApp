'use client';
import styles from './Projects.module.css'
import cardStyles from './Card.module.css'
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';

export default function AboutUs() {
  return (


<div className="row">
        <Navbar></Navbar>
        <div className={cardStyles.container}>
        <div className={cardStyles.card}>
          <div className={cardStyles.example}>
            <div className={cardStyles.wrapper}>
              <div className={cardStyles.header}>
                <div className={cardStyles.date}>
                  <span className={cardStyles.day}>12</span>
                  <span className={cardStyles.month}>Aug</span>
                  <span className={cardStyles.year}>2016</span>
                </div>
                <ul className={cardStyles.menucontent}>
                  <li>
                    <a href="#" className={cardStyles.fa}></a>
                  </li>
                  <li><a href="#" className={cardStyles.fa}><span>18</span></a></li>
                  <li><a href="#" className={cardStyles.fa}><span>3</span></a></li>
                </ul>
              </div>
              <div className={cardStyles.data}>
                <div className={cardStyles.content}>
                  <span className={cardStyles.author}>Jane Doe</span>
                  <h1 className={cardStyles.title}><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                  <p className={cardStyles.text}>The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                  <a href="#" className={cardStyles.button}>Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cardStyles.card}>
          <div className={cardStyles.example}>
            <div className={cardStyles.wrapper}>
              <div className={cardStyles.header}>
                <div className={cardStyles.date}>
                  <span className={cardStyles.day}>12</span>
                  <span className={cardStyles.month}>Aug</span>
                  <span className={cardStyles.year}>2016</span>
                </div>
                <ul className={cardStyles.menucontent}>
                  <li>
                    <a href="#" className={cardStyles.fa}></a>
                  </li>
                  <li><a href="#" className={cardStyles.fa}><span>18</span></a></li>
                  <li><a href="#" className={cardStyles.fa}><span>3</span></a></li>
                </ul>
              </div>
              <div className={cardStyles.data}>
                <div className={cardStyles.content}>
                  <span className={cardStyles.author}>Jane Doe</span>
                  <h1 className={cardStyles.title}><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                  <p className={cardStyles.text}>The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                  <a href="#" className={cardStyles.button}>Read more</a>
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