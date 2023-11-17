import styled from "styled-components"

interface IFormField {
  children: React.ReactNode
  className?: string
  label?: string
}

// Styles
const Field = styled.div`
  color: var(--color-grey);
  font-size: 12px;
  line-height: 18px;
  margin: 0 0 var(--gap);
  &.last { margin: 0; }
`
const FieldLabel = styled.label`
  color: var(--color-grey-dark);
  display: block;
  font-size: 12px;
  line-height: 18px;
  margin: 0 0 4px;
`

const FormField: React.FC<IFormField> = ({ children, className, label }) => {
  return (
    <Field className={className}>
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
    </Field>
  )
}

export default FormField
