// flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import EmailFeed from './EmailFeed'

const currentData = new Date()

const getEmailObjectStructure = index => {
  const emailNumber = index + 1
  return {
    subject: `Welcomen Subject ${emailNumber}`,
    from: `from${emailNumber}@x-team.com`,
    to: `to-${emailNumber}@x-team.com`,
    body: `Welcome to x-team ${emailNumber}`,
    createdAt: new Date()
  }
}

const emailsLarge = [...Array(14).keys()].map(getEmailObjectStructure)
const emailsSmall = [...Array(5).keys()].map(getEmailObjectStructure)
const emailsExtraSmall = [...Array(1).keys()].map(getEmailObjectStructure)

storiesOf('UI Components|EmailFeed', module)
  .add('basic usage', () => (
    <EmailFeed
      emails={emailsSmall}
      lastSyncRefresh={currentData
      } />
  ))

storiesOf('UI Components|EmailFeed/States', module)
  .add('refreshing', () => (
    <EmailFeed
      isRefreshing
      emails={emailsExtraSmall}
      lastSyncRefresh={currentData}
      onRefreshEmails={action('this can`t be trigger in refresh')}
    />
  ))
  .add('error', () => (
    <EmailFeed
      errorMessage='Emails not <a href="testing">found</a>'
    />
  ))
  .add('expanded', () => (
    <EmailFeed
      initialExpandedAll
      emails={emailsSmall}
      lastSyncRefresh={currentData}
    />
  ))

storiesOf('UI Components|EmailFeed/Use Cases', module)
  .add('responsive sizing at 300px', () => (
    <div style={{ width: '300px' }}>
      <EmailFeed
        emails={emailsLarge}
      />
    </div>
  ))
  .add('responsive sizing at 500px', () => (
    <div style={{ width: '500px' }}>
      <EmailFeed
        emails={emailsLarge}
      />
    </div>
  ))
  .add('responsive sizing at 700px', () => (
    <div style={{ width: '700px' }}>
      <EmailFeed
        emails={emailsLarge}
      />
    </div>
  ))

storiesOf('UI Components|EmailFeed/Debug', module)
  .add('missing props (does component explode?)', () => <EmailFeed />)
  .add('initial expanded all', () => (
    <EmailFeed
      initialExpandedAll
      emails={emailsLarge}
      lastSyncRefresh={currentData} />
  ))
  .add('with refresh email action', () => (
    <EmailFeed
      emails={emailsLarge}
      onRefreshEmails={action('refresh emails action')}
      lastSyncRefresh={currentData}
    />
  ))
  .add('with large list of emails', () => (
    <EmailFeed
      emails={emailsLarge}
      lastSyncRefresh={currentData}
    />
  ))
  .add('with end button link', () => (
    <EmailFeed
      emails={emailsSmall}
      endButtonUrl='http://www.google.com'
      lastSyncRefresh={currentData}
    />
  ))
  .add('with error message and refresh button', () => (
    <EmailFeed
      errorMessage='Emails not <a href="testing">found</a>'
      onRefreshEmails={action('refresh email action')}
    />
  ))
  .add('last sync refresh 5 minutes ago', () => {
    const lastSyncRefresh = new Date()
    lastSyncRefresh.setMinutes(lastSyncRefresh.getMinutes() - 5)
    return (
      <EmailFeed
        emails={emailsLarge}
        lastSyncRefresh={lastSyncRefresh}
      />
    )
  })
  .add('last sync refresh 3 hours ago', () => {
    const lastSyncRefresh = new Date()
    lastSyncRefresh.setHours(lastSyncRefresh.getHours() - 3)

    return (
      <EmailFeed
        emails={emailsLarge}
        lastSyncRefresh={lastSyncRefresh}
      />
    )
  })
  .add('last sync refresh 1 day ago', () => {
    const lastSyncRefresh = new Date()
    lastSyncRefresh.setDate(lastSyncRefresh.getDate() - 1)
    return (
      <EmailFeed
        emails={emailsLarge}
        lastSyncRefresh={lastSyncRefresh}
      />
    )
  })
  .add('last sync refresh 5 days ago', () => {
    const lastSyncRefresh = new Date()
    lastSyncRefresh.setDate(lastSyncRefresh.getDate() - 5)
    return (
      <EmailFeed
        emails={emailsLarge}
        lastSyncRefresh={lastSyncRefresh}
      />
    )
  })
