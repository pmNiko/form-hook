import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Taxes } from '../enums/enums'
import { getExample, getPattern, getPlaceholder } from '../utilities/Taxes/tributos'

type FormProps = {
  tribu: string
  cuitCuil: string
  datoABuscar: string
  rate: 'mensual' | 'mensual-semestral'
}

export const defaultValues: FormProps = {
  tribu: `${Taxes.NOMENCLATURA}`,
  cuitCuil: '',
  datoABuscar: '',
  rate: 'mensual',
}

export const useFormTools = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
    watch,
    setError,
    clearErrors,
    resetField,
  } = useForm({ defaultValues })
  const [regExp, setRegExp] = useState<RegExp>(getPattern(Taxes.NOMENCLATURA))
  const [placeholder, setPlaceholder] = useState(getPlaceholder(Taxes.NOMENCLATURA))
  const [helpValue, setHelpValue] = useState(getExample(Taxes.NOMENCLATURA))
  const [disabledInput, setDisabledInput] = useState(false)
  const [disabledRate, setDisabledRate] = useState(false)
  const [disabledSubmit, setDisabledSubmit] = useState(true)

  const selectTax = ({ target: { value: tribu } }: any) => {
    setRegExp(getPattern(tribu))
    setPlaceholder(getPlaceholder(tribu))
    setHelpValue(getExample(tribu))
  }

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { tribu, cuitCuil, datoABuscar } = getValues()

      if (tribu === Taxes.RENTAS_VARIAS) {
        setDisabledInput(true)
        setDisabledRate(true)
        clearErrors('datoABuscar')
        datoABuscar !== '' && resetField('datoABuscar')
      } else {
        setDisabledInput(false)
        setDisabledRate(false)
      }

      if (cuitCuil !== '' && tribu === Taxes.RENTAS_VARIAS) {
        setDisabledSubmit(false)
      } else if (cuitCuil !== '' && datoABuscar !== '') {
        setDisabledSubmit(false)
      } else {
        setDisabledSubmit(true)
      }
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    clearErrors,
    setError,
    selectTax,
    disabledSubmit,
    disabledRate,
    disabledInput,
    regExp,
    placeholder,
    helpValue,
  }
}
