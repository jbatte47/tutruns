import { FC } from 'react';
import { InputGroup } from 'react-bootstrap';

import { INavHooks, useNavHooks } from '../use-nav-hooks';
import { RouterExperiments } from './router-experiments';

export const SecretRouterExperiments: FC<INavHooks> = hooks => {
  const {
    params: { someInternalId },
    setSearchParams,
  } = hooks;
  return (
    <>
      <RouterExperiments { ...hooks }>
        <p>
          The <strong>Secret Internal ID</strong> value is: <strong>{ someInternalId }</strong>.
          <InputGroup>
            <InputGroup.Text>Set an arg value:</InputGroup.Text>
            <input
              type="text"
              aria-label="route"
              onChange={ ({ currentTarget: { value } }) => setSearchParams({ programmaticArg: value }) }>
            </input>
          </InputGroup>
        </p>
      </RouterExperiments>
    </>
  );
};

const WithHooks = () => {
  const navHooks = useNavHooks();
  return (
    <div>
      { <SecretRouterExperiments { ...navHooks } /> }
    </div>
  );
};

export default WithHooks;
