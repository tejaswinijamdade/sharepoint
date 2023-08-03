import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneHorizontalRule,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  PropertyPaneLabel
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import {
  PropertyFieldColorPicker,
  PropertyFieldColorPickerStyle,
} from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

// import * as strings from 'ButtonWebPartStrings';
import Button from './components/Button';
import { IButtonProps } from './components/IButtonProps';

export interface IButtonWebPartProps {
  addButtonText: string;
  buttonAlignment: string;
  buttonColor: string;
  buttonTextColor:string;
  buttonTextWeight:string;
  fontSize: number;
  borderRadius:number;
  borderColor:string;
  buttonLink: string;
  buttonTarget: string;
  buttonBorderStyle: string;
  borderWidth:number;
  buttonFontFamily: string;
  buttonBoxShadow: string;
}

export default class ButtonWebPart extends BaseClientSideWebPart<IButtonWebPartProps> {

 
  public render(): void {
    const element: React.ReactElement<IButtonProps> = React.createElement(
      Button,
      {
        addButtonText: this.properties.addButtonText,
        buttonAlignment: this.properties.buttonAlignment,
        buttonColor: this.properties.buttonColor,
        buttonTextColor:this.properties.buttonTextColor,
        buttonTextWeight:this.properties.buttonTextWeight,
        fontSize:this.properties.fontSize,
        borderRadius:this.properties.borderRadius,
        borderColor:this.properties.borderColor,
        buttonLink:this.properties.buttonLink,
        buttonTarget:this.properties.buttonTarget,
        buttonBorderStyle:this.properties.buttonBorderStyle,
        borderWidth:this.properties.borderWidth,
        buttonFontFamily:this.properties.buttonFontFamily,
        buttonBoxShadow:this.properties.buttonBoxShadow
      }
    );

    ReactDom.render(element, this.domElement);
  }


  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Button Custom Webpart'
          },
          groups: [
            {
              groupName: 'Button Setting' ,
              groupFields: [
                PropertyPaneTextField('addButtonText', {
                  label: 'Enter Button Text'
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneTextField('buttonLink', {
                  label: 'Enter Button Link'
                }),
                PropertyPaneDropdown('buttonTarget', {
                  label: 'Button Target',
                  options: [
                    { key: '_blank', text: 'Open in New Tab' },
                    { key: '_self', text: 'Open in Same Tab' },
                    { key: '_parent', text: 'Open in Parent Frame' },
                    { key: '_top', text: 'Open in Top Frame' }
                  ]
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneSlider('fontSize', {
                  label: 'Choose Fontsize',
                  min: 10,
                  max: 100,
                  step: 1,
                  showValue: true
                }),
                PropertyPaneTextField('buttonFontFamily', {
                  label: 'Button Font Family (Enter manually)'
                }),
                PropertyPaneDropdown('buttonFontFamily', {
                  label: 'Button Font Family',
                  options: [{ key: 'Arial', text: 'Arial' },
                  { key: 'Arial Black', text: 'Arial Black' },
                  { key: 'Arial Narrow', text: 'Arial Narrow' },
                  { key: 'Book Antiqua', text: 'Book Antiqua' },
                  { key: 'Calibri', text: 'Calibri' },
                  { key: 'Cambria', text: 'Cambria' },
                  { key: 'Candara', text: 'Candara' },
                  { key: 'Comic Sans MS', text: 'Comic Sans MS' },
                  { key: 'Courier New', text: 'Courier New' },
                  { key: 'Georgia', text: 'Georgia' },
                  { key: 'Helvetica', text: 'Helvetica' },
                  { key: 'Lucida Console', text: 'Lucida Console' },
                  { key: 'Lucida Sans Unicode', text: 'Lucida Sans Unicode' },
                  { key: 'Monospace', text: 'Monospace' },
                  { key: 'MS Sans Serif', text: 'MS Sans Serif' },
                  { key: 'MS Serif', text: 'MS Serif' },
                  { key: 'Palatino Linotype', text: 'Palatino Linotype' },
                  { key: 'Segoe UI', text: 'Segoe UI' },
                  { key: 'Tahoma', text: 'Tahoma' },
                  { key: 'Times New Roman', text: 'Times New Roman' },
                  { key: 'Trebuchet MS', text: 'Trebuchet MS' },
                  { key: 'Verdana', text: 'Verdana' },]
                }),
                PropertyPaneDropdown('buttonTextWeight', {
                  label: 'Button Font weight',
                  options: [
                    { key: 'normal', text: 'Normal' },
                    { key: 'bold', text: 'Bold' },
                    { key: '100', text: '100' },
                    { key: '200', text: '200' },
                    { key: '300', text: '300' },
                    { key: '400', text: '400' },
                    { key: '500', text: '500' },
                    { key: '600', text: '600' },
                    { key: '700', text: '700' },
                    { key: '800', text: '800' },
                    { key: '900', text: '900' }
                  ]
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneDropdown('buttonAlignment', {
                  label: 'Button Alignment',
                  options: [
                    { key: 'left', text: 'Left' },
                    { key: 'center', text: 'Center' },
                    { key: 'right', text: 'Right' }
                  ]
                }),
                PropertyPaneHorizontalRule(),
                PropertyFieldColorPicker('buttonColor', {
                  label: 'Button Color',
                  selectedColor: this.properties.buttonColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  key: 'buttonColor',
                  style: PropertyFieldColorPickerStyle.Inline,
                  alphaSliderHidden: false,
                  iconName: 'Precipitation',
                  disabled: false,                  
                }),
                PropertyPaneHorizontalRule(),
                PropertyFieldColorPicker('buttonTextColor', {
                  label: 'Button Text Color',
                  selectedColor: this.properties.buttonTextColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  key: 'buttonTextColor',
                  style: PropertyFieldColorPickerStyle.Inline,
                  alphaSliderHidden: false,
                  iconName: 'Precipitation',
                  disabled: false,                  
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneSlider('borderWidth', {
                  label: 'Border Width',
                  min: 0,
                  max: 10,
                  step: 1,
                  showValue: true
                }),
                PropertyPaneSlider('borderRadius', {
                  label: 'Border Radius',
                  min: 0,
                  max: 50,
                  step: 2,
                  showValue: true
                }),
                PropertyPaneDropdown('buttonBorderStyle', {
                  label: 'Button Border Style',
                  options: [
                    { key: 'none', text: 'None' },
                    { key: 'solid', text: 'Solid' },
                    { key: 'dashed', text: 'Dashed' },
                    { key: 'dotted', text: 'dotted' },
                    { key: 'groove', text: 'groove' },
                    { key: 'ridge', text: 'ridge' },
                    { key: 'inset', text: 'inset' },
                    { key: 'outset', text: 'outset' },
                    { key: 'initial', text: 'initial' },
                    // Add more border style options as needed
                  ]
                }),
                PropertyFieldColorPicker('borderColor', {
                  label: 'Button Border Color',
                  selectedColor: this.properties.borderColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  key: 'borderColor',
                  style: PropertyFieldColorPickerStyle.Inline,
                  alphaSliderHidden: false,
                  iconName: 'Precipitation',
                  disabled: false,                  
                }),
                PropertyPaneTextField('buttonBoxShadow', {
                  label: 'Button Box Shadow'
                }),
                PropertyPaneLabel(null, {
                  text: ' ** Note : If you want to remove any style, keep the property field blank. ** '
                })        
              ]
            }
          ]
        }
      ]
    };
  }
}
