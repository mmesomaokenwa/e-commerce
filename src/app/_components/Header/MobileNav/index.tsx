'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import { Button } from '../../Button'

const MobileNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  const [show, setShow] = useState(false)

  return (
    <div className={classes.container}>
      {user && <CartLink />}
      <div
        className={[classes.mobileBar, show ? classes.active : ''].filter(Boolean).join(' ')}
        onClick={() => setShow(!show)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav
        className={[classes.nav, user === undefined && classes.hide, show ? classes.show : '']
          .filter(Boolean)
          .join(' ')}
      >
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="none" />
        })}
        {/* <CartLink /> */}
        {user && (
          <Link href="/account" onClick={() => setShow(false)} style={{ textAlign: 'center' }}>
            Account
          </Link>
        )}
        {!user && (
          <Button
            el="link"
            label="Login"
            href="/login"
            appearance="primary"
            onClick={() => (window.location.href = '/login')}
          />
        )}
      </nav>
    </div>
  )
}

export default MobileNav