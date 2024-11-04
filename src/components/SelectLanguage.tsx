import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '#/components/ui/dropdown-menu';
import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Import ChevronDown icon

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const handleSelect = (value: string) => {
    setSelectedLanguage(value);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex h-[34px] w-[132px] items-center justify-between rounded-full border border-gray-400/30 bg-transparent px-3 ring-0 dark:border-[#888888] dark:bg-[#888888] dark:text-[#B0B0B0]">
        {selectedLanguage === 'english' ? (
          <span className="flex items-center gap-2 text-[13px] xl:text-[16px]">
            <Image
              src="/images/EngFlag.svg"
              width={20}
              height={12}
              alt="eng-flag"
            />
            English
          </span>
        ) : (
          <span className="flex items-center gap-2 text-[13px] xl:text-[16px]">
            <Image
              src="/images/MyanmarFlag.svg"
              width={20}
              height={12}
              alt="myanmar-flag"
            />
            Myanmar
          </span>
        )}
        <ChevronDown className="h-4 w-4 text-gray-600 dark:text-[#B0B0B0]" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => handleSelect('english')}>
          <span className="flex items-center gap-2 text-[13px] xl:text-[16px]">
            <Image
              src="/images/EngFlag.svg"
              width={20}
              height={12}
              alt="eng-flag"
            />
            English
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSelect('myanmar')}>
          <span className="flex items-center gap-2 text-[13px] xl:text-[16px]">
            <Image
              src="/images/MyanmarFlag.svg"
              width={20}
              height={12}
              alt="myanmar-flag"
            />
            Myanmar
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
