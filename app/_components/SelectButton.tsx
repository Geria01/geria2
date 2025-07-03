import { useState } from 'react';
import { MultipartForm } from '../_models/multipartForm.model';

interface SelectButtonProps {
    label: string,
    values: MultipartForm,
    setValues: (values: MultipartForm) => void,
    type: string,   
}

const SelectButton = (
  {
    label,
    values,
    setValues,
    type,
  } : SelectButtonProps) => {

  let { roleOptions, experienceOptions } = values;
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {

    setSelected(!isSelected);

    roleOptions = (type === 'role' && !isSelected) ?
      [...roleOptions, label] :
      roleOptions.filter(val => { return val !== label });

    experienceOptions = (type === 'experience' && !isSelected) ?
      [...experienceOptions, label] :
      experienceOptions.filter(val => { return val !== label });

    setValues({
      ...values,
      experienceOptions,
      roleOptions,
    });
  }

  return (
    <button
      className={`border-2 p-4 rounded-lg ${isSelected || roleOptions.includes(label) || experienceOptions.includes(label)
        ? 'border-[#FECC00]'
        : 'border-[#D6DDEB]'}`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default SelectButton;
