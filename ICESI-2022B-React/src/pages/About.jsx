import React from 'react'
import {useParams} from 'react-router-dom'

function About() {
  let params = useParams()
  return (
    <div>ID: {params.id}</div>
  )
}

export default About