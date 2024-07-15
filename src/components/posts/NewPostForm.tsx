import React, { useState } from 'react';
import "./../../assets/styles/newPostForm.scss";
import { NewPostFormProps } from '../../types/posts.type';
import TitleInput from '../TitleInput';
import TitleTextArea from '../TitleTextArea';


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
