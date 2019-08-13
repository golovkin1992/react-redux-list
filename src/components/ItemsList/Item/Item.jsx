import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeItemPropertyAction } from '../../../actions';
import fields from '../../../constants/Fields';
import NotFound from '../../NotFound';
import './Item.sass';


const mapStateToProps = state => ({
  items: state.items,
});
class Item extends PureComponent {
  state = {
    item: null,
    editableField: '',
  }

  inputFocusRef = React.createRef();


  componentDidMount() {
    const { items, match } = this.props;
    this.setState({ item: items.find(el => el.id === match.params.id) });
  }

  componentDidUpdate() {
    const { editableField } = this.state;
    if (editableField.length !== 0) {
      this.inputFocusRef.current.focus();
    }
  }

  handleDblClick = (e) => {
    const { value } = e.target.attributes.name;
    this.setState({ editableField: value });
  }

  handleKeyDown = (e) => {
    this.handleInputEdit(e);
  }

  handleBlur = (e) => {
    this.handleInputEdit(e);
  };

  handleInputEdit = (e) => {
    const { editableField, item } = this.state;
    const { changeItemProperty } = this.props;
    const { id } = item;
    const text = e.target.value;
    if (!e.keyCode || e.keyCode === 13) {
      if (item[editableField].length !== 0) {
        changeItemProperty(id, editableField, text);
        this.setState({ editableField: '' });
      }
    }
  };

   handleChange = (e) => {
     const { editableField, item } = this.state;
     const text = e.target.value;
     this.setState({ item: Object.assign({}, { ...item, [editableField]: text }) });
   }

   render() {
     const { item, editableField } = this.state;
     return (

       !item ? (
         <NotFound />
       ) : (
         <div className="items-wrap">
           {
      fields.map(field => (
        <div className="item" key={field.name}>
          <span className="item__title">{field.label}</span>
          {
           editableField === field.name ? (
             <input
               className="item__edit"
               type="text"
               ref={this.inputFocusRef}
               value={item[field.name]}
               onChange={this.handleChange}
               onBlur={this.handleBlur}
               onKeyDown={this.handleKeyDown}
             />
           ) : (
             <span
               className="item__value"
               name={field.name}
               onDoubleClick={this.handleDblClick}
             >
               {item[field.name]}
             </span>
           )}
        </div>
      ))
      }
           <Link className="link link_item" to="/"> Назад</Link>
         </div>
       )
     );
   }
}
Item.propTypes = {
  changeItemProperty: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, { changeItemProperty: changeItemPropertyAction })(Item);
