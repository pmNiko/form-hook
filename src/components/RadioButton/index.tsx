import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

type RadioProps = {
  value: string
  description: string
}

type Props = {
  radios: RadioProps[]
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioButton = ({ radios, callback }: Props) => {
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
            <FormControlLabel key={value} value={value} control={<Radio />} label={description} />
          ))}
        </RadioGroup>
      </FormControl>
    </FormControl>
  )
}
