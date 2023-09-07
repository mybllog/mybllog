import React from 'react';
import Ep from "../Assests/img/uipath.png"
import np from "../Assests/img/access.png"
import dp from "../Assests/img/cisco.png"
import sp from "../Assests/img/dell-emc-logo.png"
import pp from "../Assests/img/dangote.jpeg"
import yp from "../Assests/img/fcmb.png"
import up from "../Assests/img/firsteandp.jpeg"
import rp from "../Assests/img/huawei-logo.png"
import gp from "../Assests/img/ribbon.png"
import cp from "../Assests/img/nnpc.png"
import vp from "../Assests/img/netapp-logo.png"
import jp from "../Assests/img/saipem.png"
import mp from "../Assests/img/uba.png"
import bp from "../Assests/img/polaris.png"
import kp from "../Assests/img/nutanix-logo.png"
import op from "../Assests/img/seep.jpeg"
import "./Carous.css"
const Sliders = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  

  return (
    <div className="marquee-container">
    <div className="marquee-content">
      {/* Add your content that you want to scroll */}
      <img src={Ep} alt='ep' className="Image" />
      <img src={np} alt='ep' className="Image" />
      <img src={bp} alt='ep' className="Image" />
      <img src={vp} alt='ep' className="Image" />
      <img src={mp} alt='ep' className="Image" />
    </div>
  </div>
  );
}

export default Sliders;
