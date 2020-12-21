import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Field extends Component {
  // by using this.context
  // static contextType = LanguageContext;
  // render() {
  //   const text = this.context === 'english' ? 'Name' : 'Naam';
  //   return (
  //     <div className='ui field'>
  //       <label>{text}</label>
  //       <input />
  //     </div>
  //   );
  // }

  // by using Consumer component
  render() {
    return (
      <div className='ui field'>
        <label>
          <LanguageContext.Consumer>
            {(value) => (value.language === 'english' ? 'Name' : 'Naam')}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
