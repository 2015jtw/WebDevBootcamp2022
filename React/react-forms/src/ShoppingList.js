import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';
// import uuid from './uuid/dist/v4'

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Milk', qty: '4 loaves' },
                { name: 'Bread', qty: '5 liters' }
            ]
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {

        this.setState(st => ({
            items: [...st.items, item]
        }))

    }

    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li>
                        {item.name}: {item.qty}
                    </li>
                ))}
            </ul>
        )
    }


    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <ShoppingListForm
                    addItem={this.addItem}
                />
            </div>
        )
    }


}

export default ShoppingList;