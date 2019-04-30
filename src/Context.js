import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.lists.filter(list => list.id !== action.payload)
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: [action.payload,
        ...state.lists]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    Lists: [],
    List:[],
    Lead:[],
    dispatch: action => this.setState(state => reducer(state,action))
  };


  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
