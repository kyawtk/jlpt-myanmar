'use client';
import { Button } from '#/components/ui/button';
import { Label } from '#/components/ui/label';
import { RadioGroup, RadioGroupItem } from '#/components/ui/radio-group';
import { useGetQuestions } from '#/services/questions.service';
import { useState } from 'react';
import Review from '../../components/Review';
import { useQueryState } from 'nuqs';
const Page = ({ params }: { params: { level: string; type: string } }) => {
  const [page, setPage] = useQueryState('page', {
    defaultValue: 1,
    parse: Number,
  });
  const [isReveiw, setIsReveiw] = useState(false);
  const { data } = useGetQuestions({
    level: params?.level.toUpperCase(),
    type: params?.type,
    limit: 3,
    page,
  });

  // State to store user responses
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleOptionChange = (questionId: number, selectedOption: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: selectedOption,
    }));
  };
  // Submit handler to log the responses
  const handleSubmit = () => {
    setIsReveiw(true);
    // Add logic to process the responses, such as sending them to an API
  };

  if (isReveiw) {
    return (
      <>
        <Review questions={data?.data || []} answers={responses} />
        <Button onClick={() => setIsReveiw(false)}>Try Again</Button>
        <Button
          onClick={() => {
            setPage(page + 1);
            setIsReveiw(false);
            setResponses({});
          }}
        >
          Next
        </Button>
      </>
    );
  }
  return (
    <div className='pt-20'>
      {params.level} - {params.type}
      <div className="space-y-4 ">
        {data?.data?.map((question, index) => {
          return (
            <div key={question.id}>
              <p className="my-2">
                {index + 1}. {question.content}
              </p>

              {question?.audioUrl && <audio controls src={question.audioUrl} />}
              {/* {question?.imageUrl && (
              <Image
                src={question.imageUrl}
                alt="Image"
                width={300}
                height={300}
              />
            )} */}
              {question?.passage && (
                <p className="max-w-lg">{question.passage.text}</p>
              )}

              <RadioGroup
                value={responses[question.id] || ''}
                className="flex flex-col gap-1"
              >
                {question.options.map((option, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <RadioGroupItem
                      key={index}
                      value={option}
                      onClick={(e) =>
                        handleOptionChange(question.id, e.target.value)
                      }
                      id={`${question.id}-${option}`}
                    />
                    <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          );
        })}
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Page;
