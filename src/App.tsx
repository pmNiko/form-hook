import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./App.css";
import { useEffect, useState } from "react";
import { RadioButton } from "./components/RadioButton";
import { cuitCuil, getPattern, taxes } from "./utilities";
import { Taxes } from "./enums/enums";
import { PatternProps, TextInput } from "./components/TextInput";
import { SelectOption } from "./components/SelectOption";
import { Button, Stack } from "@mui/material";

const initialValuesPattern: PatternProps = {
  value: getPattern(Taxes.NOMENCLATURA),
  message: "Formato no válido!",
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setError,
  } = useForm({
    defaultValues: {
      tribu: "",
      cuit: "",
      search: "",
      rate: "",
    },
  });
  const [pattern, setPattern] = useState<PatternProps>(initialValuesPattern);
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RadioButton
        radios={taxes}
        callback={(e) => {
          setPattern({ ...pattern, value: getPattern(e.target.value) });
        }}
      />
      <ErrorMessage errors={errors} message={"Campo requerido"} name="tribu" />
      <br />

      {/* <input
        {...register("cuit", { pattern: cuitCuil, required: true })}
        placeholder="CUIT/CUIL"
      /> */}
      {/* <TextInput
        register={register}
        isDirty={isDirty}
        name="cuitCuil"
        pattern={{ value: cuitCuil, message: "Formato no valido" }}
        setError={setError}
        placeholder="Ingrese el cuit"
        help="El formato debe ser"
      /> */}
      <ErrorMessage errors={errors} message={"Campo requerido"} name="cuit" />
      <br />
      <br />
      <TextInput
        register={register}
        isDirty={isDirty}
        name="search"
        pattern={pattern}
        setError={setError}
        placeholder="Ingrese la busqueda"
        help="El formato debe ser"
      />
      <ErrorMessage
        errors={errors}
        message={`${errors.search}`}
        name="search"
      />
      <br />
      <br />

      <SelectOption disabledRate={false} register={register} />
      <br />
      <br />
      <Stack spacing={4} mt={2} direction="row">
        <Button variant="contained" size="small">
          adhesión recibo <br /> por email
        </Button>
        <Button variant="contained" size="small" type="submit">
          pagar recibos
        </Button>
      </Stack>
    </form>
  );
}

export default App;
