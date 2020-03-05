import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import PlaceOrderItem from '../PlaceOrderItem';

class PlaceOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuitems: []
        }
    }

    componentDidMount() {
        this.getMenuItem();
    }

    getMenuItem = () => {
        axios.get('/api/menuItems')
            .then((res) => {
                console.log(res.data);
                this.setState({ menuitems: res.data });
            })
            .catch((err) => console.log(err));

    }

    render() {
        return (
            <div className="row m-3">
                {this.state.menuitems.map(item => (

                    <PlaceOrderItem item={item} />

                ))}
            </div>
        )
    }
}

export default PlaceOrder;