import { Box, FormControl, MenuItem, Select } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'

type Props = {
  disabledRate?: boolean
  register: UseFormRegister<any>
  name: string
  options: any
}

export const SelectOption = ({ disabledRate, register, name, options }: Props) => {
  return (
    <Box my={3} visibility={disabledRate ? 'hidden' : 'visible'} width="15rem">
      <FormControl fullWidth>
        <Select {...register(name)} name="rate" defaultValue={options[0]}>
          {options.map((opt: any) => (
            <MenuItem key={opt} value={opt}>
              {opt[0].toUpperCase() + opt.slice(1).toLowerCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
