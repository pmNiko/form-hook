import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import './App.css'
import { useEffect } from 'react'
import { RadioButton } from './components/RadioButton'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tribu: '',
      cuit: '',
      search: '',
      rate: '',
    },
  })
  const onSubmit = (data: any) => console.log(data)

  useEffect(() => {
    console.log('Errors: ', errors)
  }, [errors])

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
      {/* <input {...register('tribu')} type="radio" value="01" />
      <input {...register('tribu')} type="radio" value="02" />
      <input {...register('tribu')} type="radio" value="03" /> */}
      <RadioButton
        radios={[
          { value: '01', description: 'Patente' },
          { value: '02', description: 'Nomenclatura' },
        ]}
      />
      <ErrorMessage errors={errors} message={'Campo requerido'} name="tribu" />
      <br />

      <input
        {...register('cuit', { pattern: /^[\d]{10}$/, required: true })}
        placeholder="CUIT/CUIL"
      />
      <ErrorMessage errors={errors} message={'Campo requerido'} name="cuit" />
      <br />
      <br />
      <input {...register('search', { minLength: 2 })} placeholder="Dato a buscar" />
      <ErrorMessage errors={errors} message={'Campo requerido'} name="search" />
      <br />
      <br />
      <select {...register('rate', { required: true })}>
        <option value="mensual">Mensual</option>
        <option value="mensual-semestral">Mensual-Semestral</option>
      </select>
      <ErrorMessage errors={errors} message={'Campo requerido'} name="rate" />
      <br />
      <br />
      <input type="submit" />
    </form>
  )
}

export default App
