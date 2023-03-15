import styles from './Form.module.css'
import { FormWrapper } from './FormWrapper'

type AddressData = {
  street: string
  number: string
  city: string
  zip: string
}

type OrderFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function OrderForm({
  street,
  number,
  city,
  zip,
  updateFields,
}: OrderFormProps) {
  return (
    <FormWrapper title="Adressdaten">
        <input type="text" name="quadratmeteranzahl" placeholder="Quadratmeteranzahl" required/>
        <input type="text" name="holzart" placeholder="Holzart" required/>
        <input type="text" name="datum" placeholder="Datum" required/>
    </FormWrapper>
    ) 
    
    }