'use client';

import { Button } from '#/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '#/components/ui/form';
import { Input } from '#/components/ui/input';
import { RadioGroup, RadioGroupItem } from '#/components/ui/radio-group';
import { Textarea } from '#/components/ui/textarea';
import { UploadButton } from '#/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { DeleteIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import QuestionPreview from './QuestionPreview';

// Define the Zod schema for validation
const questionSchema = z.object({
  content: z
    .string()
    .min(5, { message: 'Content must be at least 5 characters.' }),
  type: z.enum(['vocabulary', 'grammar', 'reading', 'listening']),
  passage: z.string().optional(),
  audioUrl: z.string().optional(),
  imageUrl: z.string().optional(),
  correctOptionIndex: z.number(),
  options: z
    .array(z.string())
    .min(3, { message: 'Please provide at least two options.' }),
});

// Define TypeScript types based on schema
export type QuestionFormData = z.infer<typeof questionSchema>;

interface QuestionFormProps {
  onSubmit: SubmitHandler<QuestionFormData>;
}

function QuestionForm({ onSubmit }: QuestionFormProps) {
  // Setup react-hook-form with zod validation
  const form = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      content: '',
      type: 'vocabulary',
      passage: '',
      audioUrl: '',
      imageUrl: '',
      correctOptionIndex: 0,
      options: ['', '', '', ''],
    },
  });

  // Manage form submit
  const handleFormSubmit = (data: QuestionFormData) => {
    onSubmit(data);
    form.reset({
      content: '',
      type: 'vocabulary',
      passage: '',
      audioUrl: '',
      imageUrl: '',
      correctOptionIndex: 0,
      options: ['', '', '', ''],
    });
  };

  // Watch all form data for real-time preview
  const formData = form.watch();

  return (
    <div className="flex w-full flex-wrap justify-evenly gap-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-4 p-4 "
        >
          {/* Type */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="listening" />
                      </FormControl>
                      <FormLabel className="font-normal">Listening</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="grammer" />
                      </FormControl>
                      <FormLabel className="font-normal">Grammar</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="reading" />
                      </FormControl>
                      <FormLabel className="font-normal"> Reading</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="vocabulary" />
                      </FormControl>
                      <FormLabel className="font-normal"> Vocabulary</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter question content" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Passage */}
          <FormField
            control={form.control}
            name="passage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passage</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter passage (optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Audio URL */}
          <FormField
            control={form.control}
            name="audioUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Audio URL</FormLabel>
                <FormControl>
                  <Input placeholder="URL for audio (optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Assuming 'res' is an array and the first file's URL is what you need.
              if (res && res.length > 0) {
                const uploadedImageUrl = res[0].url; // Adjust if your response format differs.
                form.setValue('imageUrl', uploadedImageUrl); // Set the imageUrl in the form.
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />

          {form.watch('imageUrl') && (
            <div className="flex justify-center">
              <Image
                src={form.watch('imageUrl') || ''}
                alt="Image Preview"
                className="w-full max-w-lg rounded-lg"
                width={300}
                height={300}
              />

              <Button
                className="ml-2"
                onClick={() => form.setValue('imageUrl', '')}
              >
                <DeleteIcon className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Options with Radio Buttons */}
          {/* Options with Radio Buttons */}
          <FormField
            control={form.control}
            name="correctOptionIndex"
            render={() => (
              <FormItem>
                <FormLabel>Options</FormLabel>
                <RadioGroup
                  value={String(form.watch('correctOptionIndex'))}
                  onValueChange={(value) =>
                    form.setValue('correctOptionIndex', parseInt(value, 10))
                  }
                >
                  {form.watch('options').map((_, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <FormControl>
                        <Input
                          placeholder={`Option ${index + 1}`}
                          {...form.register(`options.${index}`)}
                        />
                      </FormControl>
                      <FormLabel className="flex items-center space-x-1">
                        <RadioGroupItem value={String(index)} />
                        <span>Correct</span>
                      </FormLabel>
                    </div>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4 w-full">
            Submit
          </Button>
        </form>
      </Form>
      {/* Preview Component */}
      <QuestionPreview questionData={formData} />
    </div>
  );
}

export default QuestionForm;
