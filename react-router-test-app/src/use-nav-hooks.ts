import { useCallback } from "react";
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
  getSearchParamsObject: () => Record<string, string>,
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
  const getSearchParamsObject = useCallback(() => {
    return Array.from(searchParams.entries())
      .map(([key, value]) => ({ [key]: value }))
      .reduce((curr, next) => ({ ...curr, ...next }), {});
  }, [searchParams]);
  const updateSearchParams = useCallback((
    nextInit: Record<string, string>,
    navigateOptions?: {
      replace?: boolean | undefined;
      state?: any;
    } | undefined
  ) => {
    const currentParams = getSearchParamsObject();
    const newParams = {
      ...currentParams,
      ...nextInit,
    };
    setSearchParams(newParams, navigateOptions);
  }, [getSearchParamsObject, setSearchParams]);
  return {
    navigate,
    params,
    location,
    searchParams,
    getSearchParamsObject,
    setSearchParams,
    updateSearchParams,
  } as INavHooks;
};
