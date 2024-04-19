// React & Core
import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect';
import { supaBase, NavigationBar, SetGeoLocation, GetGeoLocation } from '@core';

function NewAccountSetup({ session }) {
  const [loading, setLoading] = useState(false)
  const [canProceed, setcanProceed] = useState(false)
  const [user, setUser] = useState('');
  const locData = GetGeoLocation();
  console.log(locData)

  const updateProfile = async (event) => {
    event.preventDefault();
    setLoading(true)

    // const data = new FormData(event.target);
    const { user } = session

    // const updates = {
    //   id: user.id,
    //   username: data.get('username'),
    //   title: data.get('title'),
    //   full_name: data.get('fullname'),
    //   location: data.get('location'),
    //   first_login: 0,
    //   updated_at: new Date(),
    // }
    const updates = {
      id: user.id,
      username: user,
      first_login: 0,
      updated_at: new Date(),
    }
    console.log(updates)

    const { error } = await supaBase.from('profiles').upsert(updates)
    if (error) {
      alert(error.message)
    }
    // if (!error) {
    //   window.location.href = "/account"
    // }else{
    //   alert(error.message)
    // }
    // else {
    //   window.location.href = "/connect/get-loc";
    // }
    setLoading(false)
  }

  const setUsernameInit = async (e) => {
    setUser(e);
  }

  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
      <NavigationBar />
      <div className={"container py-5 h-100" + (isMobile ? ' bg-blue-custom' : '')}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-blue-custom text-white" style={{ borderRadius: (isMobile ? '0rem' : '1rem'), border: (isMobile ? 'none' : 'inherit') }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4">
                  <p className="mb-4">We noticed this is the first time you've created an account, please fill out the information below to continue.</p>
                  <form onSubmit={updateProfile} className="form-widget">
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control form-control-lg mb-3"
                        placeholder="Username"
                        value={user}
                        onChange={setUsernameInit}
                      />
                      {/* <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg mb-3"
                        placeholder="Email"
                      /> */}
                      {/* <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="form-control form-control-lg mb-3"
                        placeholder="Full Name"
                      />
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="form-control form-control-lg mb-3"
                        placeholder="Address"
                      />
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control form-control-lg mb-3"
                        placeholder="Job Title"
                      /> */}
                      {/* <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control form-control-lg mb-3"
                        value={session.user.phone}
                        disabled
                      /> */}
                      {/* <input type="text" id="typeEmailX" className="form-control form-control-lg" placeholder="" /> */}
                    </div>
                    {
                      !locData.loc ?
                      <>
                        <button className="btn btn-outline-light btn-md px-5 mb-3" type="button" onClick={(e) => SetGeoLocation(e)}>Allow Location Permissions</button>
                      </> :
                      <>
                        <button className="btn btn-outline-light btn-md px-5" type="submit" disabled={loading}>{loading ? 'Loading ...' : 'Finish Register'}</button>
                      </>
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default NewAccountSetup;