import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.sass';

const NotFound = () => (
  <div className="not-found">
    <p className="not-found__text">Элемент не найден! Вернуться <Link to="/">на главную</Link></p>
  </div>
);
export default NotFound;
