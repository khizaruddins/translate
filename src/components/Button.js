import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {
  // by using this.context method
  // static contextType = LanguageContext;
  // render() {
  //   const text = this.context === 'english' ? 'Button' : 'Voorleggen';
  //   return <button className='ui primary button'>{text}</button>;
  // }

  // by using Consumer MEthod

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui ${color} button`}>
            <LanguageContext.Consumer>
              {({ language }) =>
                language === 'english' ? 'Button' : 'Voorleggen'
              }
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
