const FormRow = ({
  type,
  name,
  labelText,
  defaultValue = '',
  autoFocus,
  required,
  onChange,
}) => {
  const isAutoFocus = autoFocus === true ? autoFocus : '';
  const isRequired = required === true ? required : '';

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue}
        onChange={onChange}
        autoFocus={isAutoFocus}
        required={isRequired}
      />
    </div>
  );
};

export default FormRow;
