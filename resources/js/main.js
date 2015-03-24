import { default as React } from 'react';
import { default as App } from './app';

import { default as Router, Route } from 'react-router';
import { MainView, EndView, CaseView } from 'views';

import {DiscSelectView, IntroView} from 'views/index';

const routes = (
  <Route handler={App} path="/">
    <Route handler={MainView}>
      <Route name="disc" path="disc" handler={DiscSelectView} />
      <Route name="intro" path="intro" handler={IntroView} />
    </Route>
    <Route name="step" path="case/:id/step/:step" handler={CaseView} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler params={state.params} />, document.body);
});
