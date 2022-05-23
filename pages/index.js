import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='home'>
          <h1>Credo App Center</h1>
          <div className='appList'>
              <div className='app'>
                  <img width='48px' src='/images/encrypted.png'></img>
                  <div className='appInfo'>
                    <a>Credo Encryption</a>
                    <p>This program is used to encrypt stuff.</p>
                  
                  </div>
                  <div className='download'>
                    <a href="/apps/CredoEncryption" style={{fontSize: '14px'}}className='button'>VIEW</a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
