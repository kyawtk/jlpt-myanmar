'use client';
import { useCreateQuestion } from '#/services/questions.service';
import QuestionForm from './components/CreateQuestionFrom';

const Page = () => {
  const { mutate } = useCreateQuestion();

  const handleSubmit = (data: any) => {
    mutate(data);
  };
  return (
    <div>
      <QuestionForm onSubmit={(data) => handleSubmit(data)} />
    </div>
  );
};

export default Page;
