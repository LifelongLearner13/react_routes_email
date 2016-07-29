var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var EmailList = require('./components/emaillist');
var EmailListContainer = require('./components/emaillist-container');
var EmailContainer = require('./components/emailContainer');

var App = function(props) {
    return (
        <div>
            <h1>Email App</h1>
            <nav>
              <Link to={'emails/inbox'}>Indox</Link>
              <br/>
              <Link to={'emails/spam'}>Spam</Link>
            </nav>
            <div>
                {props.children}
            </div>
        </div>
    );
};

var routes = (
  <Router history={hashHistory}>
    <Route path="/emails" component={App}>
      <Route path=":folder" >
        <IndexRoute component={EmailListContainer} />
          <Route path=":id" component={EmailContainer}>
            <IndexRoute component={EmailContainer} />
          </Route>
      </Route>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});