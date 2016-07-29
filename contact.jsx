var React = require('react');

var Email = function(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>From: {props.from}</p>
            <p>To: {props.to}</p>
            <p>{props.content}</p>
        </div>
    );
};

module.exports = Contact;