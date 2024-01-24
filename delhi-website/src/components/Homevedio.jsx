import React from 'react'

const Homevedio = () => {
  return (
    <>
       <div className="video-area">
            <div className="container-fluid gap-wide">
                <div className="video-part wow fadeInUp delay-0-2s">
                    <img src="assets/images/background/video-bg.jpg" alt="Video"/>
                    <a href="https://www.youtube.com/watch?v=JW1jSINTzaw" className="mfp-iframe video-play" tabIndex="-1"><i className="fas fa-play"></i></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Homevedio;
