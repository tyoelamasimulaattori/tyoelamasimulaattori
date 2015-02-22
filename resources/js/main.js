var React = require('react');
var App = require('./app');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var StartView = require('views/start');
var DiscSelectView = require('views/start/disc-select');
var IntroView = require('views/start/intro');

var routes = (
  <Route handler={App} path="/">
    <Route handler={StartView}>
      <Route name="disc" path="disc" handler={DiscSelectView} />
      <Route name="intro" path="intro" handler={IntroView} />
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
