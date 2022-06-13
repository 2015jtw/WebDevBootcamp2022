import React, { Component } from 'react';


class CardList extends Component {

    render() {

        console.log('render from cardlist')
        const { monsters } = this.props;

        return (

            <div>
                {monsters.map((monster) => {
                    return <h3 key={monster.id}>{monster.name}</h3>
                })}
            </div>
        )
    }
}

export default CardList;