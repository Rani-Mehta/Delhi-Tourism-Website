import React from 'react'
import Artscraftcomponents from '../components/Artscraftcomponents';
import { Link } from 'react-router-dom';
const Artscratspage = () => {
  return (
    <>
    <section className="page-banner-area pt-170 rpt-110 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{backgroundImage: 'url(assets/images/background/banner-two.jpg)'}}>
            <div className="container">
                <div className="banner-inner text-white rpb-25">
                    <h1 className="page-title wow fadeInUp delay-0-2s">Arts & Crafts</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                            <li className="breadcrumb-item"><Link to="/">home</Link></li>
                            <li className="breadcrumb-item active">Arts & Crafts</li>
                        </ol>
                    </nav>
                </div>
            </div>
        
        </section>
<Artscraftcomponents/>
    </>
  )
}

export default Artscratspage;
