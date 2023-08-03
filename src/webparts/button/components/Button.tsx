import * as React from 'react';
import styles from './Button.module.scss';
import { IButtonProps } from './IButtonProps';

export default class Button extends React.Component<IButtonProps, {}> {
  public render(): React.ReactElement<IButtonProps> {
   
    return (
      <section className={`${styles.button}`}>
         <div style={{display:'flex',justifyContent:this.props.buttonAlignment}}>

         <a href={this.props.buttonLink} target={this.props.buttonTarget} rel="noopener noreferrer">
         <button className={`${styles.buttonClass}`} 
                style={{ backgroundColor: this.props.buttonColor, 
                           alignContent: this.props.buttonAlignment,
                            color: this.props.buttonTextColor, 
                            fontWeight:this.props.buttonTextWeight,
                            fontSize:this.props.fontSize,boxShadow:this.props.buttonBoxShadow,
                            borderRadius:this.props.borderRadius, borderColor: this.props.borderColor,fontFamily:this.props.buttonFontFamily,
                            borderStyle:this.props.buttonBorderStyle,borderWidth:this.props.borderWidth}}>{this.props.addButtonText} </button>
         </a>
           
          </div>
      </section>
    );
  }
}
