import React from 'react'
import InfoList from '../components/InfoList'

const InfoContainer = ({ skills = [], contacts = [], pageName }) => {

  if (!contacts) {
    return null
  }
  if (!skills) {
    return null
  }



  return (
    <div className='projects-wrapper'>
      <h1>{pageName}</h1>
      <div className='white-bg' style={{ flexDirection: 'column' }}>
        {
          skills.map
            (({ id, header, text }) => (
              <InfoList
                key={id}
                header={header}
                text={text}
              />
            ))
        }
        {
          contacts.map
            (({ id, header, text }) => (
              <InfoList
                key={id}
                header={header}
                text={text}
              />
            ))
        }
      </div>

    </div>
  )
}
export default InfoContainer; 