class Machine extends React.Component {
    render() {
        // destructure props
        const { s1, s2, s3 } = this.props;

        // creating css style object to use inline
        const colors = {
            fontSize: '50px',
            backgroundColor: 'blue'
        }

        let isWinner = (s1 === s2) && (s2 === s3)

        return (
            <div className="Machine">
                <p style={colors}>{s1}  {s2}  {s3}</p>
                <p className={isWinner ? 'win' : 'lose'}>{isWinner ? 'Winner' : 'Loser'}</p>
            </div>
        )
    }
}