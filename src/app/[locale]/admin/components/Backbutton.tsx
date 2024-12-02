'use client';
import { Button } from '#/components/ui/button';
import { useRouter } from '#/navigation';
import React from 'react';

const Backbutton = () => {
  const router = useRouter();
  return (
    <div className="absolute left-0 top-0">
      <Button variant={'link'} onClick={() => router.back()}>Back</Button>
    </div>
  );
};

export default Backbutton;
