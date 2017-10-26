// @flow

import React, { PureComponent } from 'react'
import { compose, withState, onlyUpdateForKeys } from 'recompose'
import cmz from 'cmz'
import theme, { breakpoints } from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

type Props = {
  title?: string,
  isTwoColumns?: boolean,
  isCollapsed?: boolean,
  toggleCollapse?: Function,
  visible?: Element<*>|string,
  children?: Element<*>|string,
}

/**
 * CSS Classes
 */
const cx = {
  section: cmz([ typo.family.base, `
    & {
      margin: 0;
      padding: 1rem;
      font-size: 1rem;
      border-top: 1px solid ${theme.grayBorder};
      position: relative;
    }

    &.twoColSection {
      display: flex;
    }
  `]),

  header: cmz([ typo.family.smallHeading, `
    & {
      cursor: pointer;
      padding-left: 10px;
    }

    .twoColSection & {
      width: 500px;
    }

    &:hover {
      color: ${theme.blackHighlight};
    }

    &:before {
      content: '';
      position: absolute;
      left: 10px;
      top: 22px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent silver transparent;
    }

    .collapsed &::before {
      border-width: 5px 5px 0 5px;
      border-color: silver transparent transparent transparent;
    }
  `]),

  content: cmz(`
    & {
    }

    .twoColSection & {
    }

    & > :first-child {
      margin-top: 0;
    }
  `),

  collapsibles: cmz(`
    & {
      display: block;
    }

    .collapsed & {
      display: none;
    }
  `)
}

/**
 * Elements
 */
const Root = elem.section(cx.section)
const Header = elem.h1(cx.header)
const Content = elem.div(cx.content)
const Collapsibles = elem.div(cx.collapsibles)

class CollapsibleSection extends PureComponent<Props> {
  static defaultProps = {
    title: '',
    isTwoColumns: false,
    isCollapsed: true,
    toggleCollapse: () => {},
    visible: null,
    children: null,
  }

  render () {
    const {
      title,
      isTwoColumns,
      isCollapsed,
      toggleCollapse,
      visible,
      children,
    } = this.props

    return Root({
      className: [
        isTwoColumns && 'twoColSection',
        isCollapsed && 'collapsed',
      ].filter(x => x !== false).join(' ')
    },
      Header({ onClick: () => toggleCollapse(!isCollapsed) }, title),
      Content([visible, Collapsibles(children)])
    )
  }
}

export default compose(
  withState('isCollapsed', 'toggleCollapse', true),
  onlyUpdateForKeys(['isCollapsed', 'visible', 'children']),
)(CollapsibleSection);
