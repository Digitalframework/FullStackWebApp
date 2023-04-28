import { ReactNode } from "react"
import styles from './Form.module.css'
type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div className={styles.fieldset}>
      <h2 className={styles.fstitle}>
        {title}
      </h2>
      <div>
        {children}
      </div>
    </div>
  )
}