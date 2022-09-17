import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage(props) {
  return (
    <div>
      <h1>RFID file tracker</h1>
      <div>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/rfid'}>
          <div className='btn' onClick={() => { props.setsection(1) }}>
            <a>SECTION 1</a>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/rfid'}>
          <div className='btn' onClick={() => { props.setsection(2) }}>
            <a>SECTION 2</a>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/rfid'}>
          <div className='btn' onClick={() => { props.setsection(3) }}>
            <a>SECTION 3</a>
          </div>
        </Link>
      </div>
    </div>
  )
}
