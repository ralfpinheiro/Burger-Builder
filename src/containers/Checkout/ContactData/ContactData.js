import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Ralf Pinheiro',
        address: {
          street: 'Test Street 1',
          zipCode: '123',
          country: 'Canada',
          email: 'test@test.com'
        },
        deliveryMethod: 'Fastest'
      }
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error =>
        this.setState({
          loading: false
        })
      );
  };

  render() {
    let form = (
      <form>
        <input className='Input' type='text' name='name' placeholder='Your Name' />
        <input className='Input' type='text' name='email' placeholder='Your Email' />
        <input className='Input' type='text' name='street' placeholder='Street' />
        <input className='Input' type='text' name='postal' placeholder='Postal Code' />
        <Button clicked={this.orderHandler} btnType='Success'>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className='ContactData'>
        <h4>Enter your contact</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
