'use client';
import { useState } from 'react';
import styles from './Form.module.css'


export default function Form() {

    return (
    <form className={styles.msform}>
      <ul className={styles.progressbar}>
        <li>Kundeninfos</li>
        <li>Adressdaten</li>
        <li>Auftragsinfos</li>
      </ul>
      <fieldset>
        <h2 className={styles.fstitle}>Kundeninfos</h2>
        <input type="text" name="vorname" placeholder="Vorname" />
        <input type="text" name="nachnname" placeholder="Nachname" />
        <input type="text" name="email" placeholder="Email" />
        <input type="button" name="next" className="next action-button" value="Next" />
      </fieldset>
      <fieldset>
              <h2 className={styles.fstitle}>Adressdaten</h2>
              <input type="text" name="vorname" placeholder="Vorname" />
              <input type="text" name="nachnname" placeholder="Nachname" />
              <input type="text" name="email" placeholder="Email" />
              <input type="button" name="previous" className="previous action-button" value="Previous" />
              <input type="button" name="next" className="next action-button" value="Next" />
      </fieldset>
      <fieldset>
        <h2 class="fs-title">Auftragsinfos</h2>
        <input type="text" name="twitter" placeholder="Twitter" />
        <input type="text" name="facebook" placeholder="Facebook" />
        <input type="text" name="gplus" placeholder="Google Plus" />
        <input type="button" name="previous" className="previous action-button" value="Previous" />
        <input type="button" name="next" className="next action-button" value="Next" />
         <a href="https://twitter.com/GoktepeAtakan" class="submit action-button" target="_top">Submit</a>
      </fieldset>
    </form>
    )
}
