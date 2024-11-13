import axios, { AxiosInstance } from 'axios';

// export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const baseURL = 'http://localhost:8000';

const defaultAxios = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

// async function refreshAccessToken() {
//   const session = await getSession();

//   if (session && session.refreshToken) {
//     try {
//       const response = await axios.post(`${baseURL}auth/refresh-token`, {
//         refreshToken: session.refreshToken,
//       });

//       await signIn('internal_credentials', {
//         accessToken: response.data.accessToken,
//         refreshToken: response.data.refreshToken,
//         user: JSON.stringify(response.data.user),
//       });

//       return response.data.accessToken;
//     } catch (error) {
//       console.error('Failed to refresh token:', error);
//       return null;
//     }
//   }
//   return null;
// }

// api.interceptors.request.use(
//   async (config) => {
//     const session = await getSession();

//     if (session && session.accessToken) {
//       const token = session.accessToken;
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const newAccessToken = await refreshAccessToken();

//       if (newAccessToken) {
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return api(originalRequest);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

export default defaultAxios;
