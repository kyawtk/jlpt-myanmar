import * as z from 'zod';

let phoneRegex = new RegExp(/^9[0-9]{5,9}$/g);

export const requestOtpSchemaGenerator = (countryCode: string) => {
  let test;
  let phoneRegex;

  const switchRegex = () => {
    switch (countryCode) {
      case '+95':
        return (phoneRegex = new RegExp(/^9[0-9]{5,9}$/g));
      case '+66':
        return (phoneRegex = new RegExp(/(^[0-9]{8}$|^[0-9]{9}$)/g));
      case '+856':
        return (phoneRegex = new RegExp(/^[0-9]{8,10}$/g));
      case '+60':
        return (phoneRegex = new RegExp(/^[0-9]{7,9}$/g));
      default:
        return null;
    }
  };

  switch (countryCode) {
    case '+95':
      return (test = z.object({
        number: z
          .string()
          .min(5, { message: 'Phone number must be at least 5 digits' })
          .max(11, 'Phone number cannot exceed 11 digits')
          .regex(switchRegex()!, {
            message: 'Phone number is not valid',
          }),
      }));
    case '+66':
      return (test = z.object({
        number: z
          .string()
          .min(7, { message: 'Phone number must be at least 7 digits' })
          .max(11, 'Phone number cannot exceed 10 digits')
          .regex(switchRegex()!, {
            message: 'Phone number is not valid',
          }),
      }));
    case '+856':
      return (test = z.object({
        number: z
          .string()
          .min(7, { message: 'Phone number must be at least 7 digits' })
          .max(11, 'Phone number cannot exceed 11 digits')
          .regex(switchRegex()!, {
            message: 'Phone number is not valid',
          }),
      }));
    case '+60':
      return (test = z.object({
        number: z
          .string()
          .min(7, { message: 'Phone number must be at least 7 digits' })
          .max(11, 'Phone number cannot exceed 11 digits')
          .regex(switchRegex()!, {
            message: 'Phone number is not valid',
          }),
      }));
    default:
      return null;
  }
};

export const requestOtpNewPhone = z.object({
  emailOrPhone: z
    .string()
    .min(5, { message: 'Phone number must be at least 5 digits' })
    .max(11, 'Phone number cannot exceed 11 digits')
    .regex(phoneRegex, {
      message: 'Phone number is not valid',
    }),
});

export const requestOtpSchema = z.object({
  emailOrPhone: z
    .string()
    .min(5, { message: 'Phone number must be at least 5 digits' })
    .max(11, 'Phone number cannot exceed 11 digits')
    .regex(phoneRegex, {
      message: 'Phone number is not valid',
    }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 digits' }),
});

export const requestEmailOtpSchema = z.object({
  emailOrPhone: z.string().email({ message: 'Invalid email!' }),
});

export const saveChangeEmail = z.object({
  emailOrPhone: z.string().email({ message: 'Invalid email!' }),
  password: z.string().min(1, { message: 'Password required' }),
});

export const loginValidationSchema = z.object({
  number: z
    .string()
    .min(5, { message: 'Phone number must be at least 5 digits' })
    .max(11, 'Phone number cannot exceed 11 digits')
    .regex(phoneRegex, {
      message: 'Phone number is not valid',
    }),
  password: z.string().min(1, { message: 'Password required' }),
});
export const emailUpdateSchema = z.object({
  email: z.string().email({ message: 'Invalid Email' }).trim(),
  // .min(1, { message: "" }),
});

const getCharacterValidationError = (characterType: string) =>
  `Password must contain at least one ${characterType}.`;

export const resetPasswordValidationSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Password must have at least 8 characters' })
      .refine((value) => /[0-9]/.test(value), {
        message: getCharacterValidationError('digit'),
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: getCharacterValidationError('special character'),
      })
      .refine((value) => /[a-z]/.test(value), {
        message: getCharacterValidationError('lowercase'),
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: getCharacterValidationError('uppercase'),
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  });

export default function getDateOfYear(year: number) {
  const milliseconds = new Date().setFullYear(year);
  const date = new Date(milliseconds);
  return date;
}
export const registerValidationSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is Required' }),
    password: z
      .string()
      .min(8, { message: 'Password must have at least 8 characters' })
      .refine((value) => /[0-9]/.test(value), {
        message: getCharacterValidationError('digit'),
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: getCharacterValidationError('special character'),
      })
      .refine((value) => /[a-z]/.test(value), {
        message: getCharacterValidationError('lowercase'),
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: getCharacterValidationError('uppercase'),
      }),
    confirmPassword: z.string(),
    gender: z.string().min(1, { message: 'Select your gender' }),
    dob: z.coerce
      .date()
      .min(new Date('1970-01-01'), 'Date is required')
      .max(
        new Date('2014-01-01'),
        'Registration is not permitted for individuals under 10 years old',
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  });

export const updatePasswordValidationSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: 'Current Password is required' }),

    password: z
      .string()
      .min(8, { message: 'Password must have at least 8 characters' })
      .refine((value) => /[0-9]/.test(value), {
        message: getCharacterValidationError('digit'),
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: getCharacterValidationError('special character'),
      })
      .refine((value) => /[a-z]/.test(value), {
        message: getCharacterValidationError('lowercase'),
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: getCharacterValidationError('uppercase'),
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  });

export const deleteAccSchema = z.object({
  password: z.string().min(1, { message: 'Current password is required' }),
});

export const updateProfileSchemaStudent = z.object({
  fullName: z
    .string()
    .min(2, {
      message: 'Full name must be at least 2 characters.',
    })
    .refine((value) => /^[A-Za-z.]+(?:\s[A-Za-z.]+)*$/.test(value), {
      message: 'Full name must contain only english characters.',
    }),
  // bio: z.string().optional(),
  // dob: z.string().readonly(),
  // country: z.string().readonly(),
  // state: z.string().readonly(),
  // gender: z.string().readonly(),
});
export const updateProfileSchemaTeacher = z.object({
  fullName: z
    .string()
    .min(2, {
      message: 'Full name must be at least 2 characters.',
    })
    .refine((value) => /^[A-Za-z.]+(?:\s[A-Za-z.]+)*$/.test(value), {
      message: 'Full name must contain only english characters.',
    }),
  bio: z.string().optional(),
  email: z.string().readonly(),
});
