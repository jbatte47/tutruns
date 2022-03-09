import { FC } from 'react';
import { InputGroup } from 'react-bootstrap';

import { INavHooks, useNavHooks } from '../use-nav-hooks';

import { ReactComponent as Brain } from '../svg/brain.svg';

export const RouterExperiments: FC<INavHooks> = ({
  navigate,
  location : { pathname, search },
  searchParams,
  children,
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <Brain className="App-logo-3" />
        Let's try some experiments!
        <p>
          <div>Try typing some extra stuff into the URL field below.</div>
          <div>
            (Whatever you do, don't paste in something like <code>../secret/sauce?with=params&and=searchParams</code>)</div>
        </p>
        <p>
          Take me somewhere!
          <InputGroup>
            <InputGroup.Text>Enter a route here:</InputGroup.Text>
            <input
              type="text"
              aria-label="route"
              onChange={ ({ currentTarget: { value } }) => navigate(value) }>
            </input>
          </InputGroup>
        </p>
        <p>
          Right now, we're at <strong>{ pathname }</strong>.
        </p>
        { search && (
          <p>
            The query string was: <strong>{ search }</strong>.
          </p>
        ) }
        <p>
          { searchParams && Array.from(searchParams.entries()).map(([key, value]) => (
            <div>
              The searchParam with key "{ key }" has value: <strong>{ value }</strong>.
            </div>
          )) }
        </p>
        { children }
      </header>
    </div>
  );
};

const WithHooks = () => {
  const navHooks = useNavHooks();
  return (
    <div>
      { <RouterExperiments {...navHooks} /> }
    </div>
  );
};

export default WithHooks;
