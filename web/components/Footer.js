import React from 'react'

function Footer (props) {
  return (
    <footer>
      <center>
        <p><a href='mailto:info@studiozoen.com'>info@studiozoen.com</a></p>
        <p>&copy; {new Date().getFullYear()} Studio van Zoen</p>
      </center>
    </footer>
  )
}

export default Footer
