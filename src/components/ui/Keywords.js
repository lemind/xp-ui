// @flow
/* global SyntheticInputEvent */

import React, { Component } from 'react'
import '../../assets/react-select.css'

import Select from 'react-select'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  formTagList: cmz(typo.baseText, `
    & {
      font-size: 16px
      text-rendering: optimizeLegibility
      -webkit-font-smoothing: antialiased
    }
    & .Select-control {
      display: flex
      padding-left: 14px
      border: 1px solid ${theme.lineSilver2}
      border-radius: 2px
    }
    & .Select-control,
    & .Select-control .Select-placeholder {
      height: 40px
    }
    & .Select-control .Select-placeholder {
      line-height: 38px !important
      color: ${theme.typoParagraph}
      cursor: text
      padding-left: 14px !important
    }
    & .Select-control .Select-value .Select-value-label {
      color: ${theme.typoParagraph}
    }
    & .Select-input input {
      max-width: 165px
      border: none
      padding-top: 0
      padding-bottom: 0
      margin-left: 0
    }
    &.Select--multi .Select-control .Select-value {
      padding: 0 !important
      line-height: initial !important
      margin: 0 5px 0 0
      font-size: 16px
    }
    &.Select--multi .Select-control .Select-input {
      margin: 0 5px 0 0
      line-height: 40px
      height: 40px
      padding: 0 !important;
    }
    &.Select--multi .Select-multi-value-wrapper {
      white-space: nowrap
      flex: 1
      overflow-x: auto
      overflow-y: hidden
      display: flex
      align-items: center
    }
    &.Select--multi .Select-control .Select-arrow-zone {
      display: none
    }
    &.Select--multi .Select-control .Select-clear-zone {
      padding-right: 10px
      padding-left: 10px
      width: 45px
    }
    &.Select--multi .Select-control .Select-clear-zone span {
      line-height: 40px
    }
  `)
}

type Props = {
  values: string,
  onChange: Function,
  onSubmit: Function,
  className: string
}

type State = {
  values: string
}

class Keywords extends Component<Props, State> {
  static defaultProps = {
    values: '',
    className: ''
  }

  state: State = {
    values: this.props.values
  }

  componentDidUpdate (prevProps: Props) {
    const values = this.props.values
    const prevValues = prevProps.values
    if (values !== prevValues) {
      this.setState(() => ({ values }))
    }
  }

  uppercaseOperators = (value: string) => {
    const upperCasedLabel = value.toUpperCase()
    return ['AND', 'OR'].includes(upperCasedLabel) ? upperCasedLabel : value
  }

  handleChange = (values: Array<*>) => {
    const newValues = values
      .map(keyword => this.uppercaseOperators(keyword.label))
      .join(',')

    this.setState(prevState => ({ values: newValues }), () => {
      const { onChange } = this.props
      onChange && onChange(newValues)
    })
  }

  handleInputKeyDown = (event: SyntheticInputEvent<>) => {
    // ENTER
    if (event && event.keyCode === 13) {
      const { onSubmit } = this.props
      onSubmit && onSubmit()
    }
  }

  handleBlur = (event: SyntheticInputEvent<>) => {
    const { values } = this.state
    const { target: { value: input } } = event
    const newValues = [values, input].filter(Boolean).join(',')

    this.setState({ values: newValues }, () => {
      const { onChange } = this.props
      onChange && onChange(newValues)
    })
  }

  render () {
    const keywords = this.state.values
      .split(',')
      .map(String)
      .filter(Boolean)
      .map((keyword, i) => ({
        value: i,
        label: this.uppercaseOperators(keyword)
      })) || []

    return (
      <Select.Creatable
        className={[cx.formTagList.toString(), this.props.className].join(' ')}
        name='keywords'
        placeholder='Type keywords'
        value={keywords}
        multi
        clearable
        onChange={this.handleChange}
        onInputKeyDown={this.handleInputKeyDown}
        onBlur={this.handleBlur}
      />
    )
  }
}

export default Keywords
