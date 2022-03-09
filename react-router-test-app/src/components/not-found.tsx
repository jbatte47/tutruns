import { FC } from 'react';
import { Button } from 'react-bootstrap';

import { INavHooks, useNavHooks } from '../use-nav-hooks';

import { ReactComponent as Thinking } from '../svg/thinking.svg';

export const NotFound: FC<INavHooks> = ({
  navigate,
  location : { pathname, search },
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <Thinking className="App-logo-2" />
        I couldn't find what you're looking for!
        <p>
          It looks like you tried to visit: { pathname }.
        </p>
        { search && (
          <p>
            You also attempted to query me with: { search }.
          </p>
        ) }
        But why?
        <div>
          <Button
            variant="secondary"
            onClick={() => navigate('/')}
          >
            Head Back to the Landing Page
          </Button>
        </div>
      </header>
    </div>
  )
};

const WithHooks = () => {
  const navHooks = useNavHooks();
  return (
    <div>
      { <NotFound {...navHooks} /> }
    </div>
  );
};

export default WithHooks;
