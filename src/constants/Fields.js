import languages from './languagesList';
import countries from './Countries';
import { required, numbers } from '../utils/validate';

const fields = [
  {
    name: 'title',
    validate: required,
  },
  {
    name: 'country',
    options: countries,
    validate: required,
  },
  {
    name: 'language',
    options: languages,
    validate: required,
  },
  {
    name: 'pages',
    validate: [required, numbers],
  },
  {
    name: 'author',
    validate: required,
  },
  {
    name: 'year',
    validate: required,
  },
];
export default fields;
