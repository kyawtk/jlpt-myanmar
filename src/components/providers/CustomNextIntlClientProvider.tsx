import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';

const CustomNextIntlClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default CustomNextIntlClientProvider;
