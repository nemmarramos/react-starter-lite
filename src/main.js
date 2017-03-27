import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import { AppContainer } from 'react-hot-loader'

const render = Container => {
  ReactDOM.render(
    <AppContainer>
      <Container />
    </AppContainer>,
    document.getElementById('mount')
  );
}

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root) })
}
