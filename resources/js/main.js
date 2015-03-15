import { default as React } from 'react';
import { default as App } from './app';

import { default as Router, Route } from 'react-router';

import { default as StartView } from 'views/start';
import { default as DiscSelectView } from 'views/start/disc-select';
import { default as IntroView } from 'views/start/intro';
import { default as EndScreen } from 'views/end';
import { default as CaseView } from 'views/case';

const routes = (
  <Route handler={App} path="/">
    <Route handler={StartView}>
      <Route name="disc" path="disc" handler={DiscSelectView} />
      <Route name="intro" path="intro" handler={IntroView} />
    </Route>
    <Route name="step" path="case/:id/step/:step" handler={CaseView} />
    <Route name="end" path="end" handler={EndScreen} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body);
});
