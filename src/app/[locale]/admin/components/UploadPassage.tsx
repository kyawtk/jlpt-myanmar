'use client';
import { useCreatePassage } from '#/services/questions.service';
import React from 'react';

const UploadPassage = ({ onSuccess }: { onSuccess: any }) => {
  const { mutate } = useCreatePassage();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      { text: e.target.passage.value },
      {
        onSuccess: (data) => {
          onSuccess(data);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="passage" placeholder="Create passage" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadPassage;
