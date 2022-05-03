// class based component

// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello There</h1>
//                 <h1>Weary Traveler</h1>
//                 <h1>I am Bilbo Baggins</h1>
//             </div>
//         )
//     }
// }

// function based component same as above
function Hello() {
    return (
        <div>
            <h1>Hello There</h1>
            <h1>Weary Traveler</h1>
            <h1>I am Bilbo Baggins</h1>
        </div>
    )
}
ReactDOM.render(<Hello />, document.querySelector("#root"))

