var React = require('react');
var Email = require('./email');


var EmailList = function(props) {
    console.log('props.emails: ', props.emails);
    var emails = Object.keys(props.emails).map(function(emailId, index) {
        var email = props.emails[emailId];
        return (
            <li key={index}>
                <Email id={email.id} title={email.title} to={email.to} from={email.from} content={email.content} />
            </li>
        );
    });
    return (
        <ul>
            {emails}
        </ul>
    );
};

module.exports = EmailList;
