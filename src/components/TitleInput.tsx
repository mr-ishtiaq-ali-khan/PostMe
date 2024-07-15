import React from 'react';
import { TitleInputProps } from '../types/inputFields';

const TitleInput: React.FC<TitleInputProps> = ({ label, value, onChange, maxCharacters }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= maxCharacters) {
      onChange(value);
    }
  };

  return (
    <div className={'post-form__input-group'}>
      <label htmlFor="postTitle">{label}</label>
      <input
        type="text"
        id="postTitle"
        value={value}
        onChange={handleInputChange}
        maxLength={maxCharacters}
        required
      />
      <p>Characters left: {maxCharacters - value.length}</p>
    </div>
  );
};

export default TitleInput;
