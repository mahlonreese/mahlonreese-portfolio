import React, { useState } from 'react'
import '../styles/Info.css'


const emailAddress = 'mpreese5@gmail.com'

export default function Info() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      alert('Email copied!')
    } catch (error) {
      console.error('Copy failed:', error)
      alert('Copy failed. Please copy manually.')
    }
  }
  return (
    <div className='infoPageContent'>

      <div className='infoBackground'>
          
            I graduated from West Virginia University with a degree in Information Systems and Fashion Merchandising. I now work as a full stack software engineer outside of Miami, Florida.
            This site is a collection of everything I make. 
          
      </div>
      
      <div className='infoContact'>
        <a>
        Contact me:
        </a>
        <a className='infoLink' onClick={() => setIsResumeOpen(true)} >
          resume
        </a>
        <a className='infoLink' onClick={copyEmail}>
          email
        </a>
        <a className='infoLink' href='https://www.instagram.com/mahlonreese' target='_blank' rel='noopener noreferrer'>
          instagram
        </a>
        <a className='infoLink' href='https://www.linkedin.com/in/mahlonreese/' target='_blank' rel='noopener noreferrer' >
          linkedIn
        </a>
      </div>
      {isResumeOpen && (
        <div className='modalOverlay' onClick={() => setIsResumeOpen(false)}>
          <div className='modalContent' onClick={(e) => e.stopPropagation()}>
            
            <div className='navContainer'>
              <a className='closeLink' type='button' onClick={() => setIsResumeOpen(false)}>
                [x]
              </a>
            </div>

            <iframe
              src='/Resume_MahlonReese2026.pdf'
              title='Resume'
              style={{ width: '100%', height: '70vh', border: 'none' }}
            />
            <div className='navContainer'>
              <a className='downloadLink' href='/Resume_MahlonReese2026.pdf' download>
                [Download PDF]
              </a>
            </div>
            
          </div>
        </div>
      )}
      
    </div>
  )
}