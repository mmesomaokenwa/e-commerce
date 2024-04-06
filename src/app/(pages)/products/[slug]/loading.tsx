import React from 'react'

import classes from '../index.module.scss'
import Loading from '../../../_components/Loading'


const LoadingPage = () => {
  return (
    <div className={classes.loadingPage}>
      <Loading />
    </div>
  )
}

export default LoadingPage
