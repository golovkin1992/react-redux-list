import { TextField, SelectField, DatePicker } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';

const RenderField = (props) => {
  const {
    options, input: { name }, meta: { error }, onTranslate,
  } = props;
  switch (name) {
    case 'language':
    case 'country': {
      return (
        <SelectField
          {...props}
          meta={{ ...props.meta, error: error && onTranslate(`fields.errors.${error}`) }}
        >
          {options.map(item => (
            <MenuItem
              key={item}
              value={item}
              primaryText={item}
            />
          ))}
        </SelectField>
      );
    }
    case 'year': {
      return (
        <DatePicker
          {...props}
          meta={{ ...props.meta, error: error && onTranslate(`fields.errors.${error}`) }}
          openToYearSelection
          formatDate={date => date.getFullYear()}
        />
      );
    }
    default: {
      return (
        <TextField
          {...props}
          meta={{ ...props.meta, error: error && onTranslate(`fields.errors.${error}`) }}
        />
      );
    }
  }
};

export default RenderField;
