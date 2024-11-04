import { cn } from '#/lib/utils';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface IconSaungpokkiProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

const IconSaungpokki: React.FC<IconSaungpokkiProps> = ({
  className,
  ...props
}) => {
  return (
    <Image
      src={'/images/Logo.svg'}
      alt="logo"
      width={163}
      height={30}
      className={cn('', className)}
      {...props}
    />
  );
};

export default IconSaungpokki;
