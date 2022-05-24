import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
                    <Link href="/apps/CredoEncryption" style={{fontSize: '14px'}}className='button'>VIEW</Link>
                  </div>
              </div>
          </div>
          <strong style={{fontFamily: 'lex'}}>*** Just for testing ***</strong>
      </div>
    </div>
  )
}
