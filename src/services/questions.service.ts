import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from './api';

export const useCreateQuestion = () => {
  return useMutation({
    mutationFn: (payload) => {
      return api.post('/question', payload).then((res) => res.data);
    },
  });
};
export const useUploadAudio = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const formData = new FormData();
      formData.append('file', payload);
      return await api
        .post('/file', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => res.data);
    },
  });
};
export const useCreatePassage = () => {
  return useMutation({
    mutationFn: async (payload) => {
      return api.post('/passage', payload).then((res) => res.data);
    },
  });
};

export const useGetQuestions = ({
  type,
  level,
  limit,
  page,
}: {
  type?: string;
  level?: string;
  limit?: number;
  page?: number;
}) => {
  return useQuery<TQuestionResponse>({
    queryKey: ['questions', { type, level, limit, page }],
    queryFn: () =>
      api
        .get('/question', { params: { type, level, limit, page } })
        .then((res) => res.data),
  });
};

export type TQuestionResponse = {
  data: TQuestion[];
  currentPage: number;
  totalPages: number;
  total: number;
};

export type TQuestion = {
  id: number;
  type: string; // e.g., "vocabulary", "grammar", etc.
  content: string;
  level: string | null;
  passage: {
    id: number;
    text: string;
  };
  audioUrl: string;
  imageUrl: string;
  createdAt: string; // ISO date string format
  updatedAt: string; // ISO date string format
  options: string[];
  correctOptionIndex: number;
  testId: number | null;
  sectionId: number | null;
};
