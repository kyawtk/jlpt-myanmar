// app/levels/page.tsx
'use client';
import { Button } from '#/components/ui/button';
import { cn } from '#/lib/utils';
import Link from 'next/link';

export default function LevelsPage() {
  const levels = [
    {
      name: 'JLPT N5',
      href: 'free-tests/n5',
      sections: [
        { name: 'Reading', href: 'free-tests/n5/reading' },

        { name: 'Listening', href: 'free-tests/n5/listening' },
        { name: 'Grammar', href: 'free-tests/n5/grammar' },
        { name: 'Vocabulary', href: 'free-tests/n5/vocabulary' },
      ],
    },
    {
      name: 'JLPT N4',
      href: 'free-tests/n4',
      sections: [
        { name: 'Reading', href: 'free-tests/n4/reading' },

        { name: 'Listening', href: 'free-tests/n4/listening' },
        { name: 'Grammar', href: 'free-tests/n4/grammar' },
        { name: 'Vocabulary', href: 'free-tests/n4/vocabulary' },
      ],
    },
    {
      name: 'JLPT N3',
      href: 'free-tests/n3',
      sections: [
        { name: 'Reading', href: 'free-tests/n3/reading' },

        { name: 'Listening', href: 'free-tests/n3/listening' },
        { name: 'Grammar', href: 'free-tests/n3/grammar' },
        { name: 'Vocabulary', href: 'free-tests/n3/vocabulary' },
      ],
    },
    {
      name: 'JLPT N2',
      href: 'free-tests/n2',
      sections: [
        { name: 'Reading', href: 'free-tests/n2/reading' },

        { name: 'Listening', href: 'free-tests/n2/listening' },
        { name: 'Grammar', href: 'free-tests/n2/grammar' },
        { name: 'Vocabulary', href: 'free-tests/n2/vocabulary' },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="flex-center gap-10">
        {levels.map((level) => (
          <div className="flex flex-col gap-3" key={level.href}>
            <h2 className="text-2xl font-bold">{level.name}</h2>
            {level.sections.map((section) => (
              <Button key={section.href}>
                <Link
                  className={cn(
                    'w-full text-center',
                    'bg-blue-500 text-white hover:bg-blue-600',
                    'rounded-lg shadow',
                  )}
                  href={section.href}
                >
                  {section.name}
                </Link>
              </Button>
            ))}
          </div>
          //   <Button asChild key={level.href}>
          //     <Link
          //       className={cn(
          //         'w-full text-center',
          //         'bg-blue-500 text-white hover:bg-blue-600',
          //         'rounded-lg shadow',
          //       )}
          //       href={level.href}
          //     >
          //       {level.name}
          //     </Link>
          //   </Button>
        ))}
      </div>
    </div>
  );
}
