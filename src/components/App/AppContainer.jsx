import { connect } from 'react-redux';
import App from './App';
import { getVisibleItems } from '../../selectors';
import {
  changeNewItemAction,
  addNewItemAction,
  changeFilterAction,
  deleteItemAction,
} from '../../actions/index';

const hasEmptyFields = newItem => Object.keys(newItem).some(item => newItem[item] === '');

const mapStateToProps = state => ({
  newItem: state.newItem,
  hasEmptyFields: hasEmptyFields(state.newItem),
  filter: state.filter,
  filterItems: getVisibleItems(state),
});

export default
connect(mapStateToProps,
  {
    changeNewItem: changeNewItemAction,
    addNewItem: addNewItemAction,
    changeFilter: changeFilterAction,
    deleteItem: deleteItemAction,

  })(App);
