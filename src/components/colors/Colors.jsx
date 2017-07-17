import React from 'react'

import BaseColorController from './BaseColorController.jsx'
import AccentColorController from './AccentColorController.jsx'

import {COLORS, MATERIAL_COLORS, IOS_COLORS} from '../helpers/constants/colors.js'
import {SCOPES} from '../helpers/constants/scopes.js'

class Colors extends React.Component {
  constructor(props) {
    super(props)

    // Set the colorset to be used
    this.colorSet = this.getColorsetForScope()

    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleColorPickerChange = this.handleColorPickerChange.bind(this)
    this.handleColorSelectorClick = this.handleColorSelectorClick.bind(this)
    this.getColorsetForScope = this.getColorsetForScope.bind(this)
  }

  // Get the colors for the currently set scope
  getColorsetForScope() {
    switch (this.props.scopes[1]) {
      case SCOPES.ANDROID:
        return MATERIAL_COLORS
      case SCOPES.IOS:
        return IOS_COLORS
      default:
        return COLORS
    }
  }

  /**
   * Gets the corresponding color for the selected adjective in the dropdown
   * and writes it to the state
   */
  handleDropdownChange(key, value) {
    for (var i = 0; i < this.colorSet.length; i++) {
      let currColor = this.colorSet[i]
      if (currColor.adjective === value) {
        this.props.setValueForKey(key, currColor.color)
      }
    }
  }

  /**
   * Explicitly handles the change of the <ChromePicker> Component as
   * that component returns a color object with color representations
   * for the different color models. We want to optain the hex value here.
   */
  handleColorPickerChange(value) {
    this.props.setValueForKey('baseColor', value.hex)
  }

  handleColorSelectorClick(value) {
    this.props.setValueForKey('baseColor', value)
  }

  // Display controller for the current step
  displayControllerForScope() {
    if (this.props.step === 1) {
      return (
        <BaseColorController
          scope={this.props.scopes[1]}
          colorSet={this.colorSet}
          color={this.props.baseColor}
          dropdownChange={this.handleDropdownChange}
          colorSelectorClick={this.handleColorSelectorClick}
          colorPickerChange={this.handleColorPickerChange}
          onButtonClick={this.props.nextSetupStep}
        />
      )
    } else {
      return (
        <AccentColorController />
      )
    }
  }

  render() {
    return (
      <div>
        {this.displayControllerForScope()}
      </div>
    )
  }
}

export default Colors
