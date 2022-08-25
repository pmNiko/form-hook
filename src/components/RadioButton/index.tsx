import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'

type RadioProps = {
  value: string
  description: string
}

type Props = {
  name: string
  register: UseFormRegister<any>
  radios: RadioProps[]
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioButton = ({ name, register, radios, callback }: Props) => {
  return (
    <FormControl component="fieldset">
      <FormControl>
        <RadioGroup
          aria-labelledby="radio-tributos"
          name="tribu"
          defaultValue="01"
          onChange={(e) => callback(e)}
          // onClick={() => console.log()}
        >
          {radios.map(({ value, description }) => (
            <FormControlLabel
              {...register(name)}
              key={value}
              name={name}
              value={value}
              control={<Radio />}
              label={description}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </FormControl>
  )
}
