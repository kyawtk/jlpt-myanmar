import { type ClassValue, clsx } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';
// utils/formatDate.ts
import { ApiErrorResponse } from '#/types/general';
import { AxiosError } from 'axios';
import { format, formatDistance } from 'date-fns';
import { toast } from 'sonner';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Utility function to remove the locale from the pathname
export const removeLocaleFromPathname = (pathname: string): string => {
  return pathname.replace(/^\/[a-z]{2}\//, '/');
};

export const removeImgTag = (html: string) => {
  return html.replace(/<img[^>]*>/g, '');
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).replace('_', ' ');
};
export const getMonthsFromSeconds = (seconds?: number) => {
  const duration = moment.duration(seconds, 'seconds').asMonths().toFixed(0);
  return duration;
};
export const getWeeksFromSeconds = (seconds?: number) => {
  const duration = moment.duration(seconds, 'seconds').asWeeks().toFixed(0);
  return duration;
};

export const formatDate = (date: string | Date | undefined) => {
  try {
    const validDate = date ? new Date(date) : null;

    if (!validDate || isNaN(validDate.getTime())) {
      return { formattedDate: 'Invalid Date', timeAgo: 'N/A' };
    }

    const formattedDate = format(validDate, 'd MMM yyyy');
    const timeAgo = formatDistance(validDate, new Date());

    return { formattedDate, timeAgo };
  } catch (error) {
    console.error('Date formatting error:', error);
    return { formattedDate: 'Invalid Date', timeAgo: 'N/A' };
  }
};

//copy to clipboard
export const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};

export function decodeBase64(encoded: string): string | null {
  try {
    return Buffer.from(encoded, 'base64').toString('utf-8');
  } catch (error) {
    console.error('Failed to decode Base64 string:', error);
    return null; // Return null if decoding fails
  }
}

export function onError(error: AxiosError<ApiErrorResponse>) {
  toast.error(
    error.response?.data.message || error.message || 'Something went wrong',
  );
}
