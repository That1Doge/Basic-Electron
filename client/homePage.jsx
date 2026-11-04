const React = require('react');
const {createRoot} = require('react-dom/client');

const HelloWorld = (props) => {

    return (
        <>
            <h1>Hello {props.username}!</h1>
            <p>Welcome to Electron!!!</p>
        </>
    );
};

const init = () => {
    const root = createRoot(document.getElementById('content'));
    root.render(<HelloWorld username="DL"/>)
};

window.onload = init;
