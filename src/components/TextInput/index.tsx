import { Box, TextField } from '@mui/material'
import React from 'react'

export const TextInput = () => {
  return (
    <Box my={1} visibility={disabled ? 'hidden' : 'visible'}>
      <TextField
        id={name}
        label={label}
        variant="standard"
        disabled={disabled}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        {...register(`${name}`, {
          ...pattern,
          onChange: (e) => {
            setForm((prev) => ({
              ...prev,
              [name]: e.target.value,
            }))
          },
        })}
        placeholder={placeholder}
        name={name}
        type={type}
        InputProps={{
          endAdornment: <CustomPopUp help={help} />,
        }}
      />
    </Box>
  )
}
