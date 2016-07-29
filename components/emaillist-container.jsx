var React = require('react');
var EmailList = require('./emaillist');
var EMAILS = require('./emails');


var EmailListContainer = function(props) {
   var emails = EMAILS[props.params.folder];
    
    return <EmailList emails={emails} />;
};

module.exports = EmailListContainer;