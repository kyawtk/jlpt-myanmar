import { api } from '#/services/api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

interface HandleGetUrlAndUploadParams {
  file: File;
  fileType?: string;
}

// Define the payload structure
interface FilePayload {
  fileName: string;
  type: string;
  size: number;
}

// Define the response structure from the upload URL API
interface UploadUrlResponse {
  uploadUrl: string;
  url: string;
  fileName: string;
}

const useFileUpload = (): UseMutationResult<
  UploadUrlResponse, // Success response type
  Error, // Error type
  FilePayload, // Payload type for the mutation
  unknown // Optional context type (not needed here)
> => {
  return useMutation({
    mutationFn: async (payload: FilePayload): Promise<UploadUrlResponse> => {
      const response = await api.post<UploadUrlResponse>(
        '/lms/uploads/uploadUrl',
        payload,
      );
      return response.data;
    },
  });
};

const useGetFileUploadUrl = () => {
  const { mutateAsync } = useFileUpload();
  const [uploadProgress, setUploadProgress] = useState<number>(0); // Progress state

  const handleGetUrlAndUpload = async ({
    file,
    fileType = 'image',
  }: HandleGetUrlAndUploadParams): Promise<{
    url: string;
    fileName: string;
  }> => {
    const payloadFile: FilePayload = {
      fileName: file.name,
      type: fileType,
      size: file.size,
    };

    try {
      const { uploadUrl, url, fileName } = await mutateAsync(payloadFile);

      // Upload the file to the returned `uploadUrl` and track progress
      await axios.put(uploadUrl, file, {
        headers: {
          'Content-Type': file.type,
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total!,
          );
          setUploadProgress(percentCompleted); // Update progress state
        },
      });

      // Reset progress after success
      setUploadProgress(0);

      return { url, fileName };
    } catch (error) {
      // Reset progress in case of error
      setUploadProgress(0);
      throw error; // Re-throw the error so that it can be handled properly
    }
  };

  return {
    handleGetUrlAndUpload,
    uploadProgress, // Return progress so the component can use it
  };
};

export default useGetFileUploadUrl;
