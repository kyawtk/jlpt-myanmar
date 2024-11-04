import { z } from 'zod';
import dotenv from 'dotenv';
import fs from 'fs';
import chalk from 'chalk';
import boxen from 'boxen';

// Load .env file if it exists
if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}

// Load .env.local file if it exists (will override .env variables)
if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' });
}

// Define the schema using Zod
const envSchema = z.object({
//   NODE_ENV: z.string().min(1, 'NODE_ENV is required'),
//   NEXT_PUBLIC_API_BASE_URL: z
//     .string()
//     .min(1, 'NEXT_PUBLIC_API_BASE_URL is required'),
//   NEXT_PUBLIC_BASE_URL: z.string().min(1, 'NEXT_PUBLIC_BASE_URL is required'),
//   NEXTAUTH_SECRET: z.string().min(1, 'NEXTAUTH_SECRET is required'),
//   NEXTAUTH_URL: z.string().min(1, 'NEXTAUTH_URL is required'),
//   NEXT_PUBLIC_GOOGLE_CLIENT_ID: z
//     .string()
//     .min(1, 'NEXT_PUBLIC_GOOGLE_CLIENT_ID is required'),
});

// Perform the validation only if it's not already validated
const validateEnv = () => {
  const envValidationResult = envSchema.safeParse(process.env);

  if (!envValidationResult.success) {
    const errors = envValidationResult.error.format();
    const errorMessages = Object.entries(errors)
      .map(([key, value]) => {
        const errorMessage = value?._errors?.join(', ') || 'Unknown error';
        return `${chalk.red(key)}: ${chalk.red(errorMessage)}`;
      })
      .join('\n');

    console.error(
      boxen(
        `${chalk.red.bold('Environment variable validation failed:')}\n\n${errorMessages}`,
        {
          padding: 1,
          margin: 1,
          borderColor: 'red',
          borderStyle: 'round',
        },
      ),
    );
    process.exit(1); // Exit with an error code to prevent the build
  } else {
    console.log(
      boxen(chalk.green.bold('Environment variable validation passed.'), {
        padding: 1,
        margin: 1,
        borderColor: 'green',
        borderStyle: 'round',
      }),
    );
  }
};

// Run the validation
validateEnv();
