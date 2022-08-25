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

/**
 * CustomHook useFormTools
 * @description  Se encarga de cambiar los valores del input de busqueda y
 * de alternar la habitilitación de campos y boton de submit
 * @returns @interface ReturnProps
 */
export const useFormTools = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
    watch,
    setError,
  } = useForm({ defaultValues })
  const [pattern, setPattern] = useState<RegExp>(getPattern(Taxes.NOMENCLATURA))
  const [placeholder, setPlaceholder] = useState(getPlaceholder(Taxes.NOMENCLATURA))
  const [helpValue, setHelpValue] = useState(getExample(Taxes.NOMENCLATURA))
  const [disabledInput, setDisabledInput] = useState(false)
  const [disabledRate, setDisabledRate] = useState(false)
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [form, setForm] = useState<FormProps>(defaultValues)

  /** Cambia la validación, el placeholder y el tooltip al elegir un tributo. */
  const selectTax = ({ target: { value: tribu } }: any) => {
    setPattern(getPattern(tribu))
    setPlaceholder(getPlaceholder(tribu))
    setHelpValue(getExample(tribu))
  }

  // Se encarga de habilitar ó deshabilitar los input y el boton submit.
  useEffect(() => {
    const { cuitCuil, tribu, datoABuscar } = form

    tribu === Taxes.RENTAS_VARIAS ? setDisabledInput(true) : setDisabledInput(false)
    tribu === Taxes.RENTAS_VARIAS ? setDisabledRate(true) : setDisabledRate(false)

    if (cuitCuil !== '' && tribu === Taxes.RENTAS_VARIAS) {
      setDisabledSubmit(false)
    } else if (cuitCuil !== '' && datoABuscar !== '') {
      setDisabledSubmit(false)
    } else {
      setDisabledSubmit(true)
    }
  }, [form])

  return {
    ...form,
    setForm,
    selectTax,
    disabledSubmit,
    disabledRate,
    disabledInput,
    pattern,
    placeholder,
    helpValue,
  }
}
