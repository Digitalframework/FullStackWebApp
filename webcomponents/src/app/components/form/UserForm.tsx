import { FormWrapper } from './FormWrapper'
import styles from './Form.module.css'
import axios from 'axios'
import { useState } from 'react'


  type UserData = {
    firstnameUF: string
    lastnameUF: string
    emailUF: string
  }
  
  type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
  }
  
  export function UserForm({
    firstnameUF,
    lastnameUF,
    emailUF,
    updateFields,
  }: UserFormProps) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
      <FormWrapper title="Kundeninfos">
      <input type="text" name="firstname" placeholder="Vorname" required value={firstnameUF} 
      onChange={e => updateFields({ firstnameUF: e.target.value })}/>
      <input type="text" name="lastname" placeholder="Nachname" required value={lastnameUF}
      onChange={e => updateFields({ lastnameUF: e.target.value })}/>
      <input type="text" name="email" placeholder="Email" required value={emailUF}
      onChange={e => updateFields({ emailUF: e.target.value })} />
      </FormWrapper>)
  }