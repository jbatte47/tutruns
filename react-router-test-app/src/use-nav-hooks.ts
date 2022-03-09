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
};

export const useNavHooks = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  return {
    navigate,
    params,
    location,
    searchParams,
    setSearchParams,
  } as INavHooks;
};
