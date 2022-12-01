import ReactDOM from 'react-dom';

function Root(props) {
    return (
        <div>Hello World {props.test}</div>
    );
}

export function mountRoot(rootElement, props) {
    ReactDOM.render(<Root {...props} />, rootElement);
    return () => {
            ReactDOM.unmountComponentAtNode(rootElement);
    };
}