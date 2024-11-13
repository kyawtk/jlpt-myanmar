// components/QuestionPreview.tsx

import React from 'react';
import { QuestionFormData } from './CreateQuestionFrom';
import Image from 'next/image';

interface QuestionPreviewProps {
  questionData: QuestionFormData;
}

const QuestionPreview: React.FC<QuestionPreviewProps> = ({ questionData }) => {
  const {
    content,
    type,
    passage,
    audioUrl,
    imageUrl,
    correctOptionIndex,
    options,
  } = questionData;

  return (
    <div className=" min-w-96 space-y-4 rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800">Question Preview</h2>
      <div>
        <p className="text-gray-600">
          Type: <span className="font-medium text-gray-800">{type}</span>
        </p>
        <p className="mt-2 text-gray-800">{content}</p>
      </div>

      {passage && (
        <div className="rounded-md bg-gray-100 p-4 text-gray-700">
          <h3 className="font-semibold">Passage:</h3>
          <p>{passage}</p>
        </div>
      )}

      {imageUrl && (
        <div className="my-2">
          <h3 className="font-semibold text-gray-700">Image:</h3>
          <Image
            width={300}
            height={300}
            src={imageUrl}
            alt="Question related"
            className="h-auto w-full rounded-md"
          />
        </div>
      )}

      {audioUrl && (
        <div className="my-2">
          <h3 className="font-semibold text-gray-700">Audio:</h3>
          <audio controls src={audioUrl} className="mt-2 w-full">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      <div>
        <h3 className="font-semibold text-gray-700">Options:</h3>
        <ul className="mt-2 space-y-2">
          {options.map((option, index) => (
            <li
              key={option}
              className={`rounded-md p-2 ${
                index === correctOptionIndex
                  ? 'border border-green-400 bg-green-100'
                  : 'bg-gray-50'
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionPreview;
