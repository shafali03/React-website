import React from 'react'
import './Footer.css'


function Footer() {
  const year = new Date()

  return (
    <div>
      <footer className='footer'>
        <p>Created by Shafique Mohammed &copy; {year.getFullYear()}</p>
      </footer>
    </div>
  )
}


export default Footer