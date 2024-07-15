import React from 'react';
import { TitleTextAreaProps } from '../types/inputFields';

const TitleTextArea: React.FC<TitleTextAreaProps> = ({ label, value, onChange, maxCharacters }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <div className={'post-form__input-group'}>
      <label htmlFor="postDescription">{label}</label>
      <textarea
        id="postDescription"
        value={value}
        onChange={handleInputChange}
        maxLength={maxCharacters}
        required
      />
      <p>Characters left: {maxCharacters - value.length}</p>
    </div>
  );
};

export default TitleTextArea;
