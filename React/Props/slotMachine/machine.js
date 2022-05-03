class Machine extends React.Component {
    render() {
        // destructure props
        const { s1, s2, s3 } = this.props;

        let isWinner = (s1 === s2) && (s2 === s3)

        return (
            <div>
                <p>{s1}  {s2}  {s3}</p>
                <p>{isWinner ? 'Winner' : 'Loser'}</p>
            </div>
        )
    }
}