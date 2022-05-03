// can even pass functions into components
function getMood() {
    const moods = ['angry', 'hungry', 'sad', 'happy'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>Heading</h1>
                <h3>My current mood is {getMood()}</h3>
                <p>2 plus 2 is {2 * 2}</p>
                <img src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"></img>
            </div>

        )
    }
}

ReactDOM.render(<JSXDemo />, document.querySelector("#root"));