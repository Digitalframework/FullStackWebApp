import { FormWrapper } from './FormWrapper'
import styles from './Form.module.css'


  type UserData = {
    firstname: string
    lastname: string
    email: string
  }
  
  type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
  }
  
  export function UserForm({
    firstname,
    lastname,
    email,
    updateFields,
  }: UserFormProps) {
    return (
      <FormWrapper title="Kundeninfos">
      <input type="text" name="firstname" placeholder="Vorname" required value={firstname} 
      onChange={e => updateFields({ firstname: e.target.value })}/>
      <input type="text" name="lastname" placeholder="Nachname" required value={lastname}
      onChange={e => updateFields({ lastname: e.target.value })}/>
      <input type="text" name="email" placeholder="Email" required value={email}
      onChange={e => updateFields({ email: e.target.value })} />
      </FormWrapper>)
  }