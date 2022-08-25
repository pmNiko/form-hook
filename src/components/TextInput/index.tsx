import { Box, TextField } from '@mui/material'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { CustomPopUp } from '../PopUps/CustomPopUp'

type Props = {
  disabled?: boolean
  register: UseFormRegister<any>
  name: string
  regExp?: RegExp
  isDirty: boolean
  setError: any
  required?: boolean
  placeholder?: string
  type?: 'number' | 'text'
  help: string
}

export const TextInput = ({
  disabled = false,
  register,
  name,
  type = 'text',
  regExp = /^$/,
  isDirty,
  setError,
  required = true,
  placeholder,
  help,
}: Props) => {
  return (
    <Box my={1} visibility={disabled ? 'hidden' : 'visible'}>
      <TextField
        key={name}
        {...register(name, {
          pattern: { value: regExp, message: 'El formato no es correcto.' },
          required,
          onBlur(e) {
            if (isDirty && !regExp.test(e.target.value)) {
              setError(name, {
                type: 'custom',
                message: 'El formato no es correcto.',
              })
            }
          },
        })}
        variant="standard"
        disabled={disabled}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        placeholder={placeholder}
        type={type}
        InputProps={{
          endAdornment: <CustomPopUp help={help} />,
        }}
      />
    </Box>
  )
}
