import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './SearchBlock.sass';

class SearchBlock extends PureComponent {
  state= {
    search: '',
  }

  componentDidMount() {
    const { history, onChangeFilter } = this.props;
    this.unlisten = history.listen((location) => {
      const { search } = location;
      const params = new URLSearchParams(search);
      const value = params.get('search');
      if (value !== '') {
        this.setState({ search: value });
        onChangeFilter(value);
      } else {
        this.setState({ search: value });
        history.push('/');
        onChangeFilter(value);
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleChange = (e) => {
    const { onChangeFilter, history } = this.props;
    const { value } = e.target;
    if (value) {
      history.push({ search: `search=${value}` });
    } else history.push('/');
    this.setState({ search: value });
    onChangeFilter(value);
  }

  render() {
    const { search } = this.state;
    return (
      <div className="search-field">
        <h1 className="header-title">Simple BookList</h1>
        <input
          className="search-input"
          onChange={this.handleChange}
          type="text"
          value={search}
          placeholder="Введите строку для поиска"
        />
      </div>
    );
  }
}
SearchBlock.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default withRouter(SearchBlock);
