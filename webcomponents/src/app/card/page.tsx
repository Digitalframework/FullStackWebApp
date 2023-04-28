import styles from './Card.module.css'

export default function Card() {

    return (
        <div className={styles.productcollection}>
            <img src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Buche.jpg?raw=true" alt="" width="300" 
            height="300" />
            <img src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Eiche.jpg?raw=true" alt="" width="300" 
            height="300" />
            <img src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Fichte.jpg?raw=true" alt="" width="300" 
            height="300" />
            <img src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Lerche.jpg?raw=true" alt="" width="300" 
            height="300" />
            <div className={styles.infotext}>
                <p>Parkett ist ein Fußbodenbelag aus Holz oder Bambus für Innenräume. In der Regel wird Hartholz von Laubbäumen in kleine Stücke gesägt und in einem bestimmten Muster zusammengefügt.</p>
            </div>
        </div>
    )
}
