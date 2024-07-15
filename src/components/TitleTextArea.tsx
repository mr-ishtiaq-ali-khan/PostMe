import React from 'react';
import { TitleTextAreaProps } from '../types/inputFields';

/**
 * The TitleTextArea component is a React functional component that displays a textarea input with a
 * label, character count, and onChange event handler.
 * @param  - The `TitleTextArea` component is a functional component in React that takes in the
 * following props:
 * @returns The `TitleTextArea` component is being returned. It is a functional component that renders
 * a textarea input field with a label, value, and character counter based on the props passed to it.
 * The `handleInputChange` function is used to handle changes in the textarea input and update the
 * value accordingly. The component also displays the number of characters left based on the
 * `maxCharacters` prop.
 */
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
