import { ReadonlyURLSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useRouter } from 'next/navigation';

type urlStateProps = {
  currUrl: string;
  phoneId?: string;
  urlParams: ReadonlyURLSearchParams;
  requestId?: number;
  status?: boolean;
  display?: number;
  expireAt?: string;
  to?: string;
};
const useUrlState = () => {
  const router = useRouter();
  const handleUrlState = async ({
    display,
    requestId,
    phoneId,
    expireAt,
    to,
    urlParams,
    status,
    currUrl,
  }: urlStateProps) => {
    const currentQuery = urlParams ? qs.parse(urlParams.toString()) : {};
    const updateQuery = {
      ...currentQuery,
      display: display,
      request_id: requestId,
      phoneId: phoneId,
      expire_at: expireAt,
      phone: to,
      status: status,
    };
    const url = qs.stringifyUrl(
      { url: currUrl, query: updateQuery },
      { skipEmptyString: true },
    );
    router.replace(url);
  };
  return {
    handleUrlState,
  };
};
export default useUrlState;
