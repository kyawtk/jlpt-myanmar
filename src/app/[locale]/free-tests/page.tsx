// app/levels/page.tsx
'use client';
import { Button } from '#/components/ui/button';
import { cn } from '#/lib/utils';
import Link from 'next/link';

export default function LevelsPage() {
  const levels = [
    { name: 'JLPT N5', href: 'free-tests/n5' },
    { name: 'JLPT N4', href: 'free-tests/n4' },
    { name: 'JLPT N3', href: 'free-tests/n3' },
    { name: 'JLPT N2', href: 'free-tests/n2' },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="flex-center flex-col gap-3">
        {levels.map((level) => (
          <Button asChild key={level.href}>
            <Link
              className={cn(
                'w-full text-center',
                'bg-blue-500 text-white hover:bg-blue-600',
                'rounded-lg shadow',
              )}
              href={level.href}
            >
              {level.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
