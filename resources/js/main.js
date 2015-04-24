import { default as React } from 'react';
import { default as App } from './app';

import { default as Router, Route } from 'react-router';
import { EditorView, MainView, EndView, CaseView } from 'views';

import { IntroView } from 'views/main';
import { EditorMainView, EditorNewView } from 'views/editor';

const routes = (
  <Route handler={App} path="/">
    <Route handler={MainView}>
      <Route name="intro" path="intro" handler={IntroView} />
    </Route>
    <Route name="step" path="case/:id/step/:step" handler={CaseView} />
    <Route name="feedback" path="case/:id/step/:step/option/:option" handler={CaseView} />
    <Route handler={EditorView}>
      <Route name="editor" path="editor" handler={EditorMainView} />
      <Route name="new" path="editor/new" handler={EditorNewView} />
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler params={state.params} />, document.body);
});
