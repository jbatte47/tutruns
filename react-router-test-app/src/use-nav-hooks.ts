import {
  NavigateFunction,
  Params,
  useLocation,
  useNavigate,
  useParams,
  Location,
  useSearchParams,
  URLSearchParamsInit,
} from "react-router-dom";

export interface INavHooks {
  navigate: NavigateFunction,
  params: Readonly<Params<string>>,
  location: Location,
  searchParams: URLSearchParams,
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: {
      replace?: boolean | undefined;
      state?: any;
    } | undefined
  ) => void,
  updateSearchParams: (
    nextInit: Record<string,string>,
    navigateOptions?: {
      replace?: boolean | undefined;
      state?: any;
    } | undefined
  ) => void,
};

export const useNavHooks = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const updateSearchParams = (
    nextInit: Record<string, string>,
    navigateOptions?: {
      replace?: boolean | undefined;
      state?: any;
    } | undefined
  ) => {
    const currentParams = Array.from(searchParams.entries())
      .map(([key, value]) => ({ [key]: value }))
      .reduce((curr, next) => ({ ...curr, ...next }), {});
    const newParams = {
      ...currentParams,
      ...nextInit,
    };
    setSearchParams(newParams, navigateOptions);
  };
  return {
    navigate,
    params,
    location,
    searchParams,
    setSearchParams,
    updateSearchParams,
  } as INavHooks;
};
