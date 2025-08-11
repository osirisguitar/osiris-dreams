'use client'

import Script from 'next/script'

export const Signup = () => {
  return (
    <>
      <Script src='/signup.js' />
      <div
        style={{ textAlign: 'left' }}
        className='sender-form-field'
        data-sender-form-id='bYEXN2'
      ></div>
    </>
  )
}
