import React from 'react'

import Details from './Details';
import AddressInfo from './AddressInfo';
const ContactInfo = () => {
  return (
    <div className="contactFlex">
      <Details/>
      <AddressInfo/>
  </div>
  )
}

export default ContactInfo