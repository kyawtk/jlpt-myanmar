import { cn } from '#/lib/utils';
import { TQuestion } from '#/services/questions.service';
import React from 'react';

//questions = [{id: 1, content: "question 1", options: ["A", "B", "C"], correctOptionIndex: 0}, {id: 2, content: "question 2", options: ["D", "E", "F"], correctOptionIndex: 1}]
//answers = {1: "A", 2: "D"}

const Review = ({
  questions,
  answers,
}: {
  questions: TQuestion[];
  answers: { [key: string]: string };
}) => {
  console.log("🚀 ~ answers:", answers)
  const score = questions.reduce((acc, question) => {
    const correctOptionIndex = question.correctOptionIndex;
    console.log('🚀 ~ score ~ correctOptionIndex:', correctOptionIndex);

    const selectedOption = answers[question.id];
    console.log('🚀 ~ score ~ selectedOption:', selectedOption);
    if (selectedOption === question.options[correctOptionIndex]) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div>
      <p>Score: {score}</p>
      {questions.map((question, index) => {
        return (
          <div key={index} className={cn('flex items-center gap-2')}>
            {index + 1}. {question.content}
          </div>
        );
      })}
    </div>
  );
};

export default Review;
