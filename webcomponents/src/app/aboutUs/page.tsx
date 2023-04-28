'use client';
import styles from './AboutUs.module.css'
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';

export default function AboutUs() {

    return (
        <div>
            <Navbar></Navbar>

            <div className={styles.container}>

            <div className={styles.infotext}>
            <h2 className={styles.h2}>Über uns</h2>
            <p className='styles.p'>
            Willkommen bei Hauptstadt Parkett, Ihrem führenden Händler für hochwertige Parkettböden in Berlin. Wir sind stolz darauf, unseren Kunden eine große Auswahl an Parkettböden in verschiedenen Designs und Größen anbieten zu können. Unser Ziel ist es, Ihnen den perfekten Bodenbelag zu bieten, der nicht nur langlebig, sondern auch schön anzusehen ist.
<br /><br />
Seit Jahren sind wir im Bereich Parkettböden tätig und haben uns einen hervorragenden Ruf in Berlin erworben. Wir arbeiten eng mit führenden Herstellern zusammen, um sicherzustellen, dass wir nur die besten Produkte anbieten. Bei uns finden Sie eine breite Palette von Parkettböden, von klassischen Eichenböden bis hin zu modernen Designer-Böden.
<br /><br />
Unser erfahrenes und freundliches Team steht Ihnen jederzeit zur Verfügung, um Sie bei der Wahl des perfekten Bodenbelags zu unterstützen. Wir verstehen, dass die Auswahl eines Bodens eine wichtige Entscheidung ist, die den Charakter und die Atmosphäre Ihres Hauses maßgeblich beeinflusst. Deshalb nehmen wir uns die Zeit, Ihnen unsere Produkte und ihre Eigenschaften detailliert zu erklären und Ihnen bei der Entscheidung zu helfen.
<br /><br />
Wir bieten auch eine professionelle Installation Ihrer Parkettböden durch unser erfahrenes Team an, um sicherzustellen, dass Ihr neuer Boden perfekt verlegt wird und für viele Jahre Bestand hat. Bei Hauptstadt Parkett sind wir stolz darauf, unseren Kunden den bestmöglichen Service und die höchste Qualität zu bieten.
<br /><br />
Wir laden Sie herzlich ein, uns in unserem Showroom in Berlin zu besuchen, um unsere Parkettböden persönlich kennenzulernen und sich von unserem Fachwissen und unserer Begeisterung für Parkettböden zu überzeugen. Wir freuen uns darauf, Ihnen bei der Wahl des perfekten Bodens für Ihr Zuhause zu helfen!
            </p>
        </div>
            </div>
        <Footer></Footer>
        </div>
    )

}