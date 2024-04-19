import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
import { NavigationBar } from '@core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Styling
import 'assets/styles/notifications.scss';

export default class Notifications extends Component {
  render() {
    return (
      <section className="vh-90">
        <NavigationBar />
        <div className={"container py-3 h-100" + (isMobile ? ' bg-blue-custom' : '')}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 left"></div>
                        <div className="col-lg-8 right">
                            <div className="box shadow-sm rounded bg-white mb-3">
                                <div className="box-title border-bottom p-3">
                                    <h6 className="m-0">Recent</h6>
                                    {/* <button type="submit" name="submit" className="btn btn-primary right">Submit</button> */}
                                </div>
                                <div className="box-body p-0">
                                    <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                                        <div className="col-md-11 left">
                                            <div className="text-truncate">DAILY RUNDOWN: WEDNESDAY</div>
                                            <div className="small">Income tax sops on the cards, The bias in VC funding, and other top news for you</div>
                                        </div>
                                        <div className="col-md-1 right">
                                            <div className="text-right pt-1">3d <FontAwesomeIcon icon={faTrash} size="sm" className="ml-3" /></div>                                            
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                                        <div className="col-md-11 left">
                                            <div className="text-truncate">DAILY RUNDOWN: MONDAY</div>
                                            <div className="small">We found a job at askbootstrap Ltd that you may be interested in Vivamus imperdiet venenatis est...</div>
                                        </div>
                                        <div className="col-md-1 right">
                                            <div className="text-right pt-1">5d <FontAwesomeIcon icon={faTrash} size="sm" className="ml-3" /></div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}