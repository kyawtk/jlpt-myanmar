'use client';
import { Button } from '#/components/ui/button';
import {
  useCreateQuestion,
  useUploadAudio,
} from '#/services/questions.service';
import { useState } from 'react';
import { toast } from 'sonner';

const Page = () => {
  const { mutate } = useCreateQuestion();
  const { mutate: uploadAudio } = useUploadAudio();
  const [audio, setAudio] = useState('');
  const handleSubmit = (data: any) => {
    mutate(data);
  };
  const handleAudio = () => {
    uploadAudio(audio, {
      onSuccess: (data) => {
        toast.success('Audio file uploaded successfully');
      },
      onError: (error) => {
        toast.error('Error uploading audio file');
      },
    });
  };
  return (
    <div>
      {/* <QuestionForm onSubmit={(data) => handleSubmit(data)} /> */}
      <div className="">
        <h1>Audio file upload</h1>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAudio(e.target.files[0])}
        />

        <Button  variant={'ghost'} onClick={handleAudio}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default Page;
