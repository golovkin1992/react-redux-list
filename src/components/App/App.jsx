import PropTypes from 'prop-types';
import React from 'react';
import NewItemBlock from '../NewItemBlock';
import ItemsList from '../ItemsList';
import SearchBlock from '../SearchBlock';
import './App.sass';

const App = ({
  newItem,
  changeNewItem,
  addNewItem,
  hasEmptyFields,
  changeFilter,
  filter,
  filterItems,
  deleteItem,
}) => (
  <div className="wrap">
    <SearchBlock
      onChangeFilter={changeFilter}
      value={filter}
    />
    <NewItemBlock
      newItem={newItem}
      onChangeNewItem={changeNewItem}
      addNewItem={addNewItem}
      hasEmptyFields={hasEmptyFields}
    />
    <ItemsList
      filterItems={filterItems}
      onDeleteItem={deleteItem}
    />
  </div>
);

App.propTypes = {
  changeNewItem: PropTypes.func.isRequired,
  addNewItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filterItems: PropTypes.objectOf(PropTypes.object).isRequired,
  newItem: PropTypes.objectOf(PropTypes.object).isRequired,
  hasEmptyFields: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};
export default App;
