import { cn } from '#/lib/utils';
import { Loader } from 'lucide-react';
import React from 'react';

const IconSpinner = ({ className }: { className?: string }) => {
  return <Loader className={cn('h-4 w-4 animate-spin', className)} />;
};

export default IconSpinner;
