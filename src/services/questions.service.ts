import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from './api';

export const useCreateQuestion = () => {
  return useMutation({
    mutationFn: (payload) => {
      return api.post('/question', payload);
    },
  });
};

export const useGetQuestions = ({
  type,
  level,
}: {
  type?: string;
  level?: string;
}) => {
  return useQuery<TQuestionResponse>({
    queryKey: ['questions'],
    queryFn: () => api.get('/question', { params: { type, level } }),
  });
};

export type TQuestionResponse = {
  data: TQuestion[];
};

export type TQuestion = {
  id: number;
  type: string; // e.g., "vocabulary", "grammar", etc.
  content: string;
  level: string | null;
  passage: string;
  audioUrl: string;
  imageUrl: string;
  createdAt: string; // ISO date string format
  updatedAt: string; // ISO date string format
  options: string[];
  correctOptionIndex: number;
  testId: number | null;
  sectionId: number | null;
};
