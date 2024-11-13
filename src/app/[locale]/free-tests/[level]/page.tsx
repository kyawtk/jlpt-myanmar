'use client';
import { Button } from '#/components/ui/button';
import { Link } from '#/navigation';
import { useGetQuestions } from '#/services/questions.service';
import React from 'react';

enum QuestionTypes {
  vocabulary,
  grammar,
  reading,
  listening,
}
const questionTypes = [
  { name: 'Vocabulary', value: QuestionTypes[1] },
  { name: 'Grammar', value: QuestionTypes.grammar },
  { name: 'Reading', value: QuestionTypes.reading },
  { name: 'Listening', value: QuestionTypes.listening },
];

const Page = ({ params }: { params: { level: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      {questionTypes.map((type) => {
        return (
          <Button asChild key={type.value}>
            <Link
              href={`/free-tests/${params.level}/${type.name.toLocaleLowerCase()}`}
            >
              {params.level} - {type.name}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Page;
