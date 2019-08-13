import languages from './languagesList';
import countries from './Countries';

const fields = [
  {
    name: 'title',
    label: 'Название',
  },
  {
    name: 'country',
    label: 'Страна издания',
    isDropDown: true,
    options: countries,
  },
  {
    name: 'language',
    label: 'Язык',
    isDropDown: true,
    options: languages,
  },
  {
    name: 'pages',
    label: 'Страниц',
  },
  {
    name: 'author',
    label: 'Автор:',
  },
  {
    name: 'year',
    label: 'Год издания:',
  },
];
export default fields;
