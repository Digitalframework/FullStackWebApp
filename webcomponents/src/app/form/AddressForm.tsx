import styles from './Form.module.css'
import { FormWrapper } from './FormWrapper'
import axios from "axios";

type AddressData = {
  street: string
  number: string
  city: string
  zip: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}



export function AddressForm({
  street,
  number,
  city,
  zip,
  updateFields,
}: AddressFormProps) {

  
    
  return (
    <FormWrapper title="Adressdaten">
      <input type="text" name="street" placeholder="Straße" required value={street}
      onChange={e => updateFields({ street: e.target.value })}/>
      <input type="text" name="number" placeholder="Hausnummer" required value={number}
      onChange={e => updateFields({ number: e.target.value })}/>
      <input type="text" name="city" placeholder="Stadt" required value={city}
      onChange={e => updateFields({ city: e.target.value })}/>
      <input type="text" name="zip" placeholder="Postleitzahl" required value={zip}
      onChange={e => updateFields({ zip: e.target.value })}/>

    </FormWrapper>
    ) 
    
    }