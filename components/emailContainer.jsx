var React = require('react');
var EmailList = require('./email');
var EMAILS = require('./emails');

var EmailContainer = function(props) {
    var emails = EMAILS[props.params.folder];
    return <EmailList emails={emails} />;
};

module.exports = EmailContainer;