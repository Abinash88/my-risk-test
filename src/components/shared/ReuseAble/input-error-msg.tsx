import {
    ErrorMessage,
    FieldValuesFromFieldErrors,
  } from "@hookform/error-message";
  import { FieldErrors, FieldName, FieldValues } from "react-hook-form";
  
  const InputErrorMsg = <T extends FieldValues>({
    errors,
    name,
  }: {
    errors: FieldErrors<T>;
    name: FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>;
  }) => {
    return (
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-500 my-1 font-medium">{message}</p>}
      />
    );
  };
  
  export default InputErrorMsg;
  