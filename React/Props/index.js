class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Josh"
                    from="diyora"
                    qty={10}
                />
                <LoopJSX
                    name="Elton"
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))