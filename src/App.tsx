import { ErrorMessage } from '@hookform/error-message'
import { Button, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import { RadioButton } from './components/RadioButton'
import { SelectOption } from './components/SelectOption'
import { TextInput } from './components/TextInput'
import { Taxes } from './enums/enums'
import { defaultValues, useFormTools } from './hooks/useFormTools'
import { cuitCuil, getExample, getPattern, getPlaceholder, taxes } from './utilities'

function App() {
  const {
    getValues,
    register,
    handleSubmit,
    errors,
    isDirty,
    setError,
    selectTax,
    disabledSubmit,
    disabledRate,
    disabledInput,
    regExp,
    placeholder,
    helpValue,
  } = useFormTools()

  const onSubmit = (data: any) => console.log('Formulario :: ', getValues())

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RadioButton name="tribu" register={register} radios={taxes} callback={(e) => selectTax(e)} />
      <br />

      <TextInput
        register={register}
        isDirty={isDirty}
        name="cuitCuil"
        regExp={cuitCuil}
        setError={setError}
        placeholder="CUIT / CUIL"
        help="Ingrese su CUIT / CUIL sin guiones."
      />
      <ErrorMessage
        errors={errors}
        message={`${errors.cuitCuil?.message || 'Campo obligatorio!'}`}
        name="cuitCuil"
      />
      <br />
      <br />
      <TextInput
        register={register}
        isDirty={isDirty}
        name="datoABuscar"
        regExp={regExp}
        setError={setError}
        placeholder={placeholder}
        help={helpValue}
      />
      <ErrorMessage
        errors={errors}
        message={`${errors.datoABuscar?.message || 'Campo obligatorio!'}`}
        name="datoABuscar"
      />
      <br />
      <br />

      <SelectOption disabledRate={false} register={register} />
      <br />
      <br />
      <Stack spacing={4} mt={2} direction="row">
        <Button variant="contained" size="small" type="submit">
          adhesión recibo <br /> por email
        </Button>
        <Button variant="contained" size="small" type="submit">
          pagar recibos
        </Button>
      </Stack>
    </form>
  )
}

export default App
