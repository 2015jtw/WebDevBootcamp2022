import React, { Component } from 'react';


class CardList extends Component {

    render() {

        const { monsters } = this.props;

        return (

            <div>
                {monsters.map((monster) => {
                    <div className=''>

                    </div>
                    return <h3 key={monster.id}>{monster.name}</h3>
                })}
            </div>
        )
    }
}

export default CardList;