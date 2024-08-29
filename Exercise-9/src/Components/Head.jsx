import React, { useEffect } from 'react'

function Head({title, description}) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description)
  },[title])
  return (
    <></>
  )
}

export default Head