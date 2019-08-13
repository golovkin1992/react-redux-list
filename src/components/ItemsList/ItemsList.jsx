import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ItemList.sass';

export class ItemsList extends PureComponent {
  handleClick = (id, e) => {
    e.preventDefault();
    const { onDeleteItem } = this.props;
    onDeleteItem(id);
  }

  render() {
    const { filterItems } = this.props;
    return (
      <ul className="book-list">
        {
        filterItems.map(el => (
          <li key={el.id}>
            <div className="book-item">
              <div className="cover" />
              <Link className="link" to={`/items/${el.id}`}>
                <h1 className="title">{el.title}</h1>
              </Link>
              <button
                type="submit"
                onClick={this.handleClick.bind(this, el.id)}
              >
              X
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
ItemsList.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  filterItems: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default ItemsList;
