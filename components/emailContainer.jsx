var React = require('react');
var Email = require('./email');
var EMAILS = require('./emails');

var EmailContainer = function(props) {
    var email = EMAILS[props.params.folder][props.params.id];
    console.log(email);
    return <Email id={email.id} title={email.title} to={email.to} from={email.from} content={email.content} />
};

module.exports = EmailContainer;