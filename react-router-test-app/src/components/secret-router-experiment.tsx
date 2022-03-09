import { FC } from 'react';
import { InputGroup } from 'react-bootstrap';

import { INavHooks, useNavHooks } from '../use-nav-hooks';
import { RouterExperiments } from './router-experiments';

export const SecretRouterExperiments: FC<INavHooks> = hooks => {
  const {
    params: { someInternalId },
    getSearchParamsObject,
    updateSearchParams,
  } = hooks;
  const { programmaticArg } = getSearchParamsObject();
  return (
    <RouterExperiments { ...hooks }>
      <p>
        The <strong>Secret Internal ID</strong> value is: <strong>{ someInternalId }</strong>.
      </p>
      <p>
        <InputGroup>
          <InputGroup.Text>Set an arg value:</InputGroup.Text>
          <input
            type="text"
            aria-label="route"
            onChange={ ({ currentTarget: { value } }) => updateSearchParams({ programmaticArg: value }) }>
          </input>
        </InputGroup>
      </p>
      { programmaticArg && (
        <p>
          I descructured a search param: "programmaticArg" is set to <strong>{ programmaticArg }</strong>!
        </p>
      ) }
    </RouterExperiments>
  );
};

const WithHooks = () => {
  const navHooks = useNavHooks();
  return <SecretRouterExperiments { ...navHooks } />;
};

export default WithHooks;
