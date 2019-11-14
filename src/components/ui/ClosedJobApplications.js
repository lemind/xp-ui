// @flow

import React from 'react'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    typo.baseText,
    `
      color: ${theme.typoParagraph}
      font-weight: 300
      font-size: 16px
      line-height: 1.4
    `
  ),

  list: cmz(`
    list-style: none
    padding: 0
    margin: 0 0 24px
  `),

  heading: cmz(
    typo.sectionHeading,
    `
      color: ${theme.typoHeading.fade(0.15)}
      font-weight: 700
      font-size: 24px
      letter-spacing: 0.48px
      text-transform: uppercase
      margin: 0 0 24px
    `
  ),

  item: cmz(`
    margin: 0 0 24px
  `),

  title: cmz(`
    color: ${theme.typoHeading}
    font-style: italic
    font-weight: 400
    font-size: 18px
    line-height: 1.4
    text-transform: none
    margin: 0
  `),

  description: cmz(`
    margin: 0
  `),

  message: cmz(`
    margin: 0
    padding: 24px 0 0
    border-top: 1px solid ${theme.lineSilver5.fade(0.5)}
  `)
}

type JobApplication = {
  title?: string,
  description?: string,
}

type Props = {
  applications?: Array<JobApplication>,
  message?: string
}

const ClosedJobApplications = ({ applications = [], message }: Props) => (
  <div className={cx.wrapper}>
    <h2 className={cx.heading}>Closed</h2>
    <ul className={cx.list}>
      {applications.map(application => application.title && (
        <li key={application.title} className={cx.item}>
          <h3 className={cx.title}>
            {application.title}
          </h3>
          <p className={cx.description}>
            {application.description}
          </p>
        </li>
      ))}
    </ul>
    {message && (
      <p className={cx.message}>{message}</p>
    )}
  </div>
)

export default ClosedJobApplications