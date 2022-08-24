import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import './App.css'
import { useEffect } from 'react'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      checkbox: [],
      radio: '',
      category: '',
      message: '',
    },
  })
  const onSubmit = (data: any) => console.log(data)

  useEffect(() => {
    console.log('Errors: ', errors.firstName)
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
      <input
        {...register('firstName', { pattern: /^[\d]{4}$/, required: true })}
        placeholder="First name"
      />
      <ErrorMessage errors={errors} message={'Message error'} name="firstName" />

      <input {...register('lastName', { minLength: 2 })} placeholder="Last name" />

      <select {...register('category', { required: true })}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <ErrorMessage errors={errors} name="category" />

      <textarea {...register('message', { maxLength: 200 })} placeholder="message" />

      <input type="submit" />
    </form>
  )
}

export default App
