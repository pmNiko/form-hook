import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

type Props = {
  disabledRate?: boolean;
  register: UseFormRegister<any>;
};

export const SelectOption = ({ disabledRate, register }: Props) => {
  return (
    <Box my={3} visibility={disabledRate ? "hidden" : "visible"} width="15rem">
      <FormControl fullWidth>
        <Select {...register("rate")} name="rate" defaultValue={"mensual"}>
          <MenuItem key={"mensual"} value={"mensual"}>
            Mensual
          </MenuItem>
          <MenuItem key={"anual-semestral"} value={"anual-semestral"}>
            Anual-Semestral
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
