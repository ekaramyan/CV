import React from 'react'
import InfoList from '../components/InfoList'

const InfoContainer = ({ pageName, header = [], text, id }) => {
  let i = 0

  for (i; i > header.length; i++) {
    console.log(i)
  }


  return (
    <div className='projects-wrapper'>
      <h1>{pageName}</h1>
      <div className='white-bg'>
        {header.map(() => (
          <InfoList
            key={id}
            header={header[i]}
            text={text} />
        ))}
      </div>

    </div>
  )
}
export default InfoContainer; 