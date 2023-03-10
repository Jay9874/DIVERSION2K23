import React from 'react'
import './projects.css'
import Card from '../Card/Card'
import data from '../Card/data'

export default function Projects () {
  return (
    <div className='dash-proj-container'>
      <div className='proj-container'>
        {data.map(data => {
          return (
            <div className='proj-item'>
              <Card
                title={data.title}
                image={data.image}
                description={data.description}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
