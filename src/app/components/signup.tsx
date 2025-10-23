'use client'

import Script from 'next/script'

export const Signup = () => {
  return (
    <>
      <Script src='/signup.js' />
      <div
        style={{ textAlign: 'left' }}
        className='sender-form-field mb-[50px] mt-10'
        data-sender-form-id='bYEXN2'
      ></div>
    </>
  )
}
