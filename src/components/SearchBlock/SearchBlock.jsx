import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './SearchBlock.sass';

class SearchBlock extends PureComponent {
  componentDidMount() {
    this.handleLocationChange();
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getQueryParams = location => new URLSearchParams(location.search).get('search');

  handleLocationChange = () => {
    const { history, onChangeFilter } = this.props;
    const { location } = history;
    let value = this.getQueryParams(location);
    if (!value) {
      value = '';
    }
    onChangeFilter(value);
    this.unlisten = history.listen((location) => {
      let value = this.getQueryParams(location);
      if (!value) {
        value = '';
      }
      onChangeFilter(value);
    });
  }

  handleChange = (e) => {
    const { history } = this.props;
    const { value } = e.target;
    if (value) {
      history.push({ search: `search=${value}` });
    } else history.push('/');
  }

  render() {
    const { value } = this.props;
    return (
      <div className="search-field">
        <h1 className="header-title">Simple BookList</h1>
        <input
          className="search-input"
          onChange={this.handleChange}
          type="search"
          value={value}
          placeholder="Введите строку для поиска"
        />
      </div>
    );
  }
}
SearchBlock.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
};
export default withRouter(SearchBlock);
