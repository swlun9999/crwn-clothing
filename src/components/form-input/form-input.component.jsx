import { Group, FormInputLabel, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...inputAttributes }) => {
  return (
    <Group>
      <Input {...inputAttributes} />
      {label && (
        <FormInputLabel shrink={inputAttributes.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
