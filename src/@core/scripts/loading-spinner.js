// React & Core
import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';

// Styling
import 'assets/styles/loading-spinner.scss';

const LoadingSpinner = () => {
  return (
    <>
      <BrowserView>
        <div className="desktop-spinner">
          <div className="loader m-0"></div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile-spinner">
          <div className="loader m-0"></div>
        </div>
      </MobileView>
      {/* <div className="loader loader-jobdesc m-0"></div> */}
    </>
  );
};

export default LoadingSpinner;