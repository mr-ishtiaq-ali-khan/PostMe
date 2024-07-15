import React from 'react';
import { TitleInputProps } from '../types/inputFields';

/**
 * The TitleInput component in TypeScript React allows users to input a title with a character limit
 * and displays the remaining characters.
 * @param  - The `TitleInput` component is a functional component in React that takes in the following
 * props:
 * @returns The `TitleInput` component is being returned. It is a functional component that renders an
 * input field for a post title with a character counter showing the remaining characters allowed based
 * on the `maxCharacters` prop. The `handleInputChange` function ensures that the input value does not
 * exceed the specified character limit before calling the `onChange` function.
 */
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
