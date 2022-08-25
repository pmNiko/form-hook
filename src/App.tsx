import { Button, Grid, Stack } from '@mui/material'
import { RadioButton } from './components/RadioButton'
import { SelectOption } from './components/SelectOption'
import { TextInput } from './components/TextInput'
import { useFormTools } from './hooks/useFormTools'
import { cuitCuil, taxes } from './utilities'
import ReCAPTCHA from 'react-google-recaptcha'
import './App.css'
import { useState } from 'react'

function App() {
  const [validCaptcha, setValidCaptcha] = useState(false)
  const {
    register,
    handleSubmit,
    errors,
    isDirty,
    clearErrors,
    setError,
    selectTax,
    regExp,
    placeholder,
    helpValue,
    disabledSubmit,
    disabledRate,
    disabledInput,
  } = useFormTools()

  const onSubmit = (data: any) => console.log('Formulario :: ', data)

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
        errors={errors}
        clearErrors={clearErrors}
        name="cuitCuil"
        regExp={cuitCuil}
        setError={setError}
        required={true}
        placeholder="CUIT / CUIL"
        help="Ingrese su CUIT / CUIL sin guiones."
      />

      <br />
      <br />
      <TextInput
        disabled={disabledInput}
        register={register}
        isDirty={isDirty}
        errors={errors}
        clearErrors={clearErrors}
        name="datoABuscar"
        regExp={regExp}
        setError={setError}
        required={!disabledInput}
        placeholder={placeholder}
        help={helpValue}
      />

      <br />
      <br />

      <SelectOption disabledRate={disabledRate} register={register} />
      <br />
      <br />
      <Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <ReCAPTCHA
          sitekey={'6Lc8YkghAAAAADuMQezNyOSIpPk91MEinHneDsl-'}
          onChange={() => setValidCaptcha(!validCaptcha)}
        />

        <Stack spacing={4} mt={2} direction="row">
          <Button
            type="submit"
            variant="contained"
            size="small"
            disabled={disabledSubmit || !validCaptcha}
            style={{ color: `${disabledSubmit ? '' : 'primary'}` }}
          >
            adhesión recibo <br /> por email
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="small"
            disabled={disabledSubmit || !validCaptcha}
            style={{ color: `${disabledSubmit ? '' : 'primary'}` }}
          >
            pagar recibos
          </Button>
        </Stack>
      </Grid>
    </form>
  )
}

export default App
