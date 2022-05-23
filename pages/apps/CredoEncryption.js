

export default function App(){
    return (
        <div>
        <div className='home'>
            <h1>CredoEncryption</h1>
            <p className='desc'>This program is used to encrypt stuff. Demo program.</p>
            <div className='appList'>
                <div className='app'>
                    <img width='48px' src='/images/download.png'></img>
                    <div className='appInfo'>
                      <div className='downloadBtn'>
                          <h2>Download Latest Version</h2>
                          <small>released 1 day ago.</small>
                          </div>
                    </div>
                </div>
            </div>
            <div className='flow'>
                <h1>Download Instructions</h1>
                <div className='instruction'>
                    <img width='48px' src='/images/download.png'></img>
                    <div className='text'>
                        <a>STEP ONE</a>
                        <h3>Download from above</h3>
                    </div>
                </div>
                <div className='instruction'>
                    <img width='48px' src='/images/tap.png'></img>
                    <div className='text'>
                        <a>STEP TWO</a>
                        <h3>Double-click the .zip file</h3>
                    </div>
                </div>
                <div className='instruction'>
                    <img width='48px' src='/images/tap.png'></img>
                    <div className='text'>
                        <a>STEP THREE</a>
                        <h3>Double-click the installer</h3>
                    </div>
                </div>
                <div className='instruction'>
                    <img width='48px' src='/images/correct.png'></img>
                    <div className='text'>
                        <a>STEP FOUR</a>
                        <h3>Done! </h3>
                    </div>
                </div>
        
            </div>
        </div>
      </div>
    )
}