import React, { useState } from 'react';
import "./../../assets/styles/newPostForm.scss";
import { NewPostFormProps } from '../../types/posts.type';
import TitleInput from '../TitleInput';
import TitleTextArea from '../TitleTextArea';


/**
 * The NewPostForm component is a form in a TypeScript React application that allows users to input a
 * post title and description within specified character limits and submit the form.
 * @param  - The code you provided is a React functional component called `NewPostForm` that represents
 * a form for creating a new post. It takes a prop `onSubmit` which is a function to be called when the
 * form is submitted.
 * @returns The NewPostForm component is being returned. It is a form component that allows users to
 * input a post title and description, with character limits set for both fields. When the form is
 * submitted, the onSubmit function is called with the title and description values, and then the title
 * and description states are reset to empty strings.
 */
const NewPostForm: React.FC<NewPostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const maxTitleLength = 50; // Example: Maximum 50 characters for title
  const maxDescriptionLength = 100; // Example: Maximum 100 characters for description

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form className={'post-form'} onSubmit={handleSubmit}>
      <TitleInput
        label="Post Title"
        value={title}
        onChange={setTitle}
        maxCharacters={maxTitleLength}
      />
      <TitleTextArea
        label="Post Description"
        value={description}
        onChange={setDescription}
        maxCharacters={maxDescriptionLength}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
