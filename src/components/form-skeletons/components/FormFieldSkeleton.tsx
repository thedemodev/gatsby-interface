import React from "react"
import { getHintId, getErrorId } from "../utils"

export type FormFieldSkeletonContextValue = {
  id: string;
  hasHint?: boolean;
  hasError?: boolean;
  meta: {
    hintId?: string;
    errorId?: string;
    controlDescribedBy?: string;
  };
}

const FormFieldSkeletonContext = React.createContext<
  FormFieldSkeletonContextValue
>({
  id: ``,
  hasHint: undefined,
  hasError: undefined,
  meta: {
    hintId: undefined,
    errorId: undefined,
    controlDescribedBy: undefined,
  },
})

export type FormFieldSkeletonProps = {
  id: string;
  hasHint?: boolean;
  hasError?: boolean;
  children?: React.ReactNode;
}

function FormFieldSkeletonProvider({
  id,
  hasError,
  hasHint,
  children,
}: FormFieldSkeletonProps) {
  const fieldContext = React.useMemo<FormFieldSkeletonContextValue>(() => {
    const hintId = getHintId(id)
    const errorId = getErrorId(id)
    const controlDescribedBy =
      [hasError && errorId, hasHint && hintId]
        .filter(describedBy => describedBy)
        .join(` `) || undefined

    return {
      id,
      hasError,
      hasHint,
      meta: {
        hintId,
        errorId,
        controlDescribedBy,
      },
    }
  }, [id, hasError, hasHint])

  return (
    <FormFieldSkeletonContext.Provider value={fieldContext}>
      {children}
    </FormFieldSkeletonContext.Provider>
  )
}

export type FormFieldSkeletonLabelProps = Omit<
  JSX.IntrinsicElements["label"],
  "ref" | "htmlFor"
>

const FormFieldSkeletonLabel: React.FC<FormFieldSkeletonLabelProps> = props => {
  const { id } = useFormFieldSkeleton()

  return <label htmlFor={id} {...props} />
}

export type FormFieldSkeletonHintProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "id"
>

const FormFieldSkeletonHint: React.FC<FormFieldSkeletonHintProps> = ({
  children,
  ...rest
}) => {
  const { hasHint, meta } = useFormFieldSkeleton()

  return (
    <div id={meta.hintId} {...rest}>
      {hasHint ? children : null}
    </div>
  )
}

export type ErrorValidationMode = "focus" | "change" | "submit"
export type FormFieldSkeletonErrorProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "id"
> & { validationMode?: ErrorValidationMode }

const FormFieldSkeletonError: React.FC<FormFieldSkeletonErrorProps> = ({
  children,
  validationMode,
  ...rest
}) => {
  const { hasError, meta } = useFormFieldSkeleton()

  return (
    <div
      id={meta.errorId}
      aria-live={getErrorAriaLiveAttribute(validationMode)}
      {...rest}
    >
      {hasError ? children : null}
    </div>
  )
}

function FormFieldSkeleton(props: FormFieldSkeletonProps) {
  return <FormFieldSkeletonProvider {...props} />
}

FormFieldSkeleton.displayName = `FormFieldSkeleton`
FormFieldSkeleton.Label = FormFieldSkeletonLabel
FormFieldSkeleton.Label.displayName = `FormFieldSkeleton.Label`
FormFieldSkeleton.Hint = FormFieldSkeletonHint
FormFieldSkeleton.Hint.displayName = `FormFieldSkeleton.Hint`
FormFieldSkeleton.Error = FormFieldSkeletonError
FormFieldSkeleton.Error.displayName = `FormFieldSkeleton.Error`
FormFieldSkeleton.useFormFieldSkeleton = useFormFieldSkeleton

export default FormFieldSkeleton

function useFormFieldSkeleton() {
  return React.useContext(FormFieldSkeletonContext)
}

function getErrorAriaLiveAttribute(
  validationMode?: ErrorValidationMode
): React.HTMLAttributes<HTMLDivElement>["aria-live"] {
  if (validationMode === `focus`) {
    return `assertive`
  }
  if (validationMode === `change`) {
    return `polite`
  }
  return undefined
}
