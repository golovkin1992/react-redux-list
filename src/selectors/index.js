import { createSelector } from 'reselect';

const getFilter = state => state.filter;
const getItems = state => state.items;

export const getVisibleItems = createSelector(
  [getFilter, getItems],
  (filter, items) => {
    if (!filter || filter === '') {
      return items;
    } return items.filter(el => el.title.indexOf(filter) > -1);
  },
);
export default getVisibleItems;
