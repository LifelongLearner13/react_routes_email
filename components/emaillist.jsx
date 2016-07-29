var React = require('react');
var Email = require('./email');
var router = require('react-router');
var Link = router.Link;


var EmailList = function(props) {
    console.log('props.emails: ', props.emails);
    var emails = Object.keys(props.emails).map(function(emailId, index) {
        var email = props.emails[emailId];

        return (
            <li key={index}>

         <div>
            <Link to={'emails/' + props.folder + '/' + email.id}>{email.title}</Link>

        </div>
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
