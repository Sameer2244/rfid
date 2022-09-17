import React from 'react'
import { Link } from 'react-router-dom'

export default function SecondPage(props) {
  return (
    <div>
      <h1>RFID file tracker</h1>
      <div className='file-btn-container'>
        <div className='btn' onClick={() => { }}>
          <a>FILE {props.section === 1 ? '1' : props.section === 2 ? '6' : '11'}</a>
        </div>
        <div className='btn' onClick={() => { }}>
          <a>FILE {props.section === 1 ? '2' : props.section === 2 ? '7' : '12'}</a>
        </div>
        <div className='btn' onClick={() => { }}>
          <a>FILE {props.section === 1 ? '3' : props.section === 2 ? '8' : '13'}</a>
        </div>
        <div className='btn' onClick={() => { }}>
          <a>FILE {props.section === 1 ? '4' : props.section === 2 ? '9' : '14'}</a>
        </div>
        <div className='btn' onClick={() => { }}>
          <a>FILE {props.section === 1 ? '5' : props.section === 2 ? '10' : '15'}</a>
        </div>
      </div>

      <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
        <div className='backbtn' >
          <a>Back</a>
        </div>
      </Link>
    </div>
  )
}
