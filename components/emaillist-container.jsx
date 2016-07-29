var React = require('react');
var EmailList = require('./emaillist');
var EMAILS = require('./emails');

var EmailListContainer = function(props) {
   var emails = EMAILS[props.params.folder];
   var folder = props.params.folder;
    
    return <EmailList emails={emails} folder={folder} />;
};

module.exports = EmailListContainer;