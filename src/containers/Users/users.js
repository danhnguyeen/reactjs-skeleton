import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Table, Button } from 'reactstrap'

import * as actions from './user-actions';

class Users extends Component {
  componentDidMount() {
    this.props.onFetchUser();
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-people"></i> User List
          </div>
          <div className="card-body">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Birthday</th>
                <th>Status</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
                {this.props.users.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.profile.name}</td>
                      <td>{user.email}</td>
                      <td className="text-capitalize">{user.profile.gender}</td>
                      <td>{user.profile.birthday}</td>
                      <td align="center">
                        <Badge className="text-capitalize" color="success">{user.status}</Badge>
                      </td>
                      <td align="center">
                        <Button color="dark" size="xs">Edit</Button>
                        <Button className="ml-1" color="danger" size="xs">Delete</Button>
                      </td>
                    </tr>
                  )
                })}
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
    users: state.userState.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: () => dispatch(actions.fetchUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
