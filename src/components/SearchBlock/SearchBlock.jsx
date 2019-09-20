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

  handleChangeLanguage = (e) => {
    const { i18n } = this.props;
    i18n.changeLanguage(e.target.value);
  }

  render() {
    const {
      value,
      onTranslate,
    } = this.props;
    return (
      <Fragment>
        <header className="header-wrap">
          <h1 className="header-title">{onTranslate('title')}</h1>
          <div className="btn-wrap">
            <button
              value="de"
              type="button"
              onClick={this.handleChangeLanguage}
              className="btn-lng btn-lng_de"
            />
            <button
              value="en"
              type="button"
              onClick={this.handleChangeLanguage}
              className="btn-lng btn-lng_en"
            />
            <button
              value="ru"
              type="button"
              onClick={this.handleChangeLanguage}
              className="btn-lng btn-lng_ru"
            />
          </div>
        </header>
        <div className="search-field">
          <input
            className="search-input"
            onChange={this.handleChange}
            type="search"
            value={value}
            placeholder={onTranslate('placeholderSearch')}
          />
        </div>
      </Fragment>
    );
  }
}
SearchBlock.propTypes = {
  i18n: PropTypes.func.isRequired,
  onTranslate: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
};
export default withRouter(SearchBlock);
