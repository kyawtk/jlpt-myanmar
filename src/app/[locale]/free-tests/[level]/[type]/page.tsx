import { useGetQuestions } from '#/services/questions.service';
import React from 'react';

const Page = ({ params }: { params: { level: string; type: string } }) => {
  const { data } = useGetQuestions({ level: params.level, type: params.type });

  return (
    <div>
      {params.level} - {params.type}

      
    </div>
  );
};

export default Page;
