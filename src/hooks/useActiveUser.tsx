import { useSession } from 'next-auth/react';

interface User {
  role: 'student' | 'teacher';
  name: string;
  imageUrl: string;
}
const useActiveUser = () => {
  const { data: session } = useSession();
  const role = session?.user?.role as 'student' | 'teacher' | undefined;
  const isStudent = session?.user?.role == 'student';
  const isTeacher = session?.user?.role == 'teacher';

  return {
    isStudent,
    isTeacher,
    user: session?.user,
    role,
  };
};

export default useActiveUser;
