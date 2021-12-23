const Input = ({
  name,
  formInput,
  clientValue,
  label,
  required,
  handleChange,
}) => {
  return (
    <div
      className={`ecc-input__item ${
        required && !formInput ? 'invalid-input' : ''
      }`}
    >
      <input
        type='text'
        name={name}
        value={clientValue}
        id={name}
        className='ecc-input__input'
        onChange={(e) => handleChange(e)}
      />
      <label
        htmlFor={name}
        className={`ecc-input__label ${
          clientValue && clientValue !== '' ? 'hasValue' : ''
        }`}
      >
        {label} {required ? '*' : ''}
      </label>
    </div>
  )
}

export default Input
