import React, { useState } from 'react';
import "./../../assets/styles/newPostForm.scss";
import { NewPostFormProps } from '../../types/posts.type';

const NewPostForm: React.FC<NewPostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxTitleLength = 50; // Example: Maximum 50 characters for title

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= maxTitleLength) {
      setTitle(value);
      setCharCount(value.length);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDescription(value);
    setCharCount(value.length); // Track character count
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title, description);
    setTitle('');
    setDescription('');
    setCharCount(0);
  };

  return (
    <form className={'post-form'} onSubmit={handleSubmit}>
      <div className={'post-form__input-group'}>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={handleTitleChange}
          maxLength={maxTitleLength}
          required
        />
        <p>Characters left: {maxTitleLength - charCount}</p>
      </div>
      <div className={'post-form__input-group'}>
        <label htmlFor="postDescription">Post Description</label>
        <textarea
          id="postDescription"
          value={description}
          onChange={handleDescriptionChange}
          maxLength={100}
          required
        />
        <p>Characters left: {100 - charCount}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
