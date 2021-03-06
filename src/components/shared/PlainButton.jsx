import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import {baseColors, appColors} from '../../styles/base/colors.js'
import {fontSizes} from '../../styles/base/fonts.js'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'

class PlainButton extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHoverState = this.toggleHoverState.bind(this)
    this.state ={
      hover: false
    }
  }

  toggleHoverState() {
    this.setState({
      hover: !this.state.hover
    })
  }

  computeIconColor() {
    return this.state.hover || this.props.active ? appColors.secondary : baseColors.lighterMidGrey
  }

  render() {
    return (
      <button
        onMouseOver={this.toggleHoverState}
        onMouseOut={this.toggleHoverState}
        onClick={() => this.props.onClick(this.props.identifier)}
        className={css(
          styles.baseStyles,
          this.state.hover && styles.hoverStyles,
          this.props.active && styles.activeStyles
        )}
      >
        <SpacingInset size='m'>
          {this.props.children}
        </SpacingInset>
      </button>
    )
  }
}

const styles = StyleSheet.create({
  baseStyles: {
    backgroundColor: baseColors.white,
    borderRadius: '4px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: baseColors.lighterMidGrey,
    color: baseColors.lighterMidGrey,
    fontSize: fontSizes.m,
    cursor: 'pointer',
    ':focus': {
      outline: 0
    }
  },
  hoverStyles: {
    borderColor: appColors.secondary,
    color: appColors.secondary
  },
  activeStyles: {
    borderColor: appColors.secondary,
    color: appColors.secondary
  }
})

export default PlainButton
