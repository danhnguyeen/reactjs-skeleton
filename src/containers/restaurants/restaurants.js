import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap'

import * as actions from './restaurant-actions';

class Restaurants extends Component {
  componentDidMount() {
    this.props.onFetchRestaurant();
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-map"></i> Restaurant List
          </div>
          <div className="card-body">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.restaurants.map(restaurant => {
                  return (
                    <tr key={restaurant.id}>
                      <td>{restaurant.name}</td>
                      <td>{restaurant.type}</td>
                      <td>{restaurant.description}</td>
                      <td align="center">
                        <Button color="dark" size="xs">Edit</Button>
                        <Button className="ml-1" color="danger" size="xs">Delete</Button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurantState.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRestaurant: () => dispatch(actions.fetchRestaurant())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
