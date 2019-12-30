/** @jsx jsx */
import { jsx } from "@emotion/core"
import { connect, getIn } from "formik"
import TextAreaFieldBlock from "./TextAreaFieldBlock"
import Case from "case"
import { TextAreaFieldBlockProps } from "./TextAreaFieldBlock"

export type TextAreaConnectedFieldProps = {
  name: string;
  formik?: any;
  id?: string;
  label?: React.ReactNode;
} & Omit<TextAreaFieldBlockProps, "id" | "label">

const TextAreaConnectedField: React.FC<TextAreaConnectedFieldProps> = props => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const error = getIn(props.formik.errors, props.name)
  const handleBlur = props.formik.handleBlur
  const handleChange = props.formik.handleChange
  const touched = getIn(props.formik.touched, props.name)
  const value = getIn(props.formik.values, props.name)

  return (
    <TextAreaFieldBlock
      id={id}
      label={label}
      error={touched && error && error}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      {...props}
    />
  )
}

export default connect(TextAreaConnectedField)