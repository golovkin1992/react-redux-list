import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './SearchBlock.sass';

class SearchBlock extends PureComponent {
  handleChange = (e) => {
    const { onChangeFilter, history } = this.props;
    const { value } = e.target;
    if (value) {
      history.push({ search: `search=${value}` });
    } else history.push('/');
    onChangeFilter(value);
  }

  render() {
    const { value } = this.props;
    return (

      <div className="search-field">
        <h1 className="header-title">Simple BookList</h1>
        <input
          className="search-input"
          onChange={this.handleChange}
          type="text"
          value={value}
          placeholder="Введите строку для поиска"
        />
      </div>
    );
  }
}
SearchBlock.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default withRouter(SearchBlock);
