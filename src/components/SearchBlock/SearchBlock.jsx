import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './SearchBlock.sass';

class SearchBlock extends PureComponent {
  componentDidMount() {
    this.handleLocationChange();
  }

  componentWillUnmount() {
    this.unsubscribe();
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
    this.unsubscribe = history.listen((location) => {
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
      <Fragment>
        <header>
          <h1 className="header-title">Simple BookList</h1>
        </header>
        <div className="search-field">
          <input
            className="search-input"
            onChange={this.handleChange}
            type="search"
            value={value}
            placeholder="Введите название книги для поиска"
          />
        </div>
      </Fragment>
    );
  }
}
SearchBlock.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
};
export default withRouter(SearchBlock);
