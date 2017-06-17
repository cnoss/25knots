import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import { buttonReset } from '../styles/shared/buttonReset.js'
import { fontSizes, fontWeights } from '../styles/base/fonts.js'
import { baseColors, appColors } from '../styles/base/colors.js'
import SpacingSquishedInset from './helpers/spacing/SpacingSquishedInset.jsx'

function SecondaryButton(props) {
  return(
    <button
      className={css(
        styles.buttonReset,
        styles.buttonStyles,
        props.inactive && styles.buttonInactiveStyles
      )}
      onClick={props.inactive ? '' : props.onClick}
    >
      <SpacingSquishedInset size='l'>
        {props.children}
      </SpacingSquishedInset>
    </button>
  )
}

const styles = StyleSheet.create({
  buttonReset: {
    ...buttonReset
  },
  buttonStyles: {
    fontSize: fontSizes.m,
    fontWeight: fontWeights.semiBold,
    color: baseColors.white,
    backgroundColor: appColors.secondary,
    borderColor: appColors.secondaryDarkened,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    lineHeight: 1,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: appColors.secondaryDarkened
    },
    ':focus': {
      outline: 'none'
    }
  },
  buttonInactiveStyles: {
    opacity: '0.6',
    cursor: 'not-allowed',
    ':hover': {
      backgroundColor: appColors.secondary
    }
  }
})

export default SecondaryButton
