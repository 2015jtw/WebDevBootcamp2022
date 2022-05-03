class Hello extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Hello There, {this.props.to}</h1>
                <h1>Weary Traveler</h1>
                <h1>I am {this.props.from}</h1>
            </div>
        )
    }
}