import api from '#/services/api';
import { useMutation } from '@tanstack/react-query';

interface GetUploadUrlParams {
  fileName: string;
  type: string;
  size: number;
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

const useGetFileUploadUrlMutation = () => {
  return useMutation({
    mutationFn: async (
      payload: GetUploadUrlParams,
    ): Promise<UploadUrlResponse> => {
      return await api
        .post<UploadUrlResponse>('/uploads/uploadUrl', payload)
        .then((res) => res.data);
    },
  });
};

const useUploadFile = () => {
  const { mutate: getFileUploadUrlMutate } = useGetFileUploadUrlMutation();
  //   const { mutateAsync: fileUploadMutate } = useFileUploadMutation();

  const uploadAndGetFileId = async (file: GetUploadUrlParams) => {
    getFileUploadUrlMutate(file, {
      onSuccess: (response) => {},
    });
    // try {
    //   const data = await getFileUrlMutate();
    //   await fileUploadMutate({
    //     url: data.uploadUrl,
    //     file,
    //   });
    //   return {
    //     imageId: data?.objectId,
    //   };
    // } catch (error: any) {
    //   toast.error(
    //     error?.response?.data?.message || error?.message || "Failed to upload",
    //   );
    //   return { imageId: null };
    // }
    return;
  };

  return {
    uploadAndGetFileId,
  };
};

export default useUploadFile;
