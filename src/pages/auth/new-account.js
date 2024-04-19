// React & Core
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { supaBase, NavigationBar, GetGeoLocation } from '@core';
import AutoComplete from "react-google-autocomplete";

function NewAccount({ session }) {
  const [loading, setLoading] = useState(true)
  // const [isFirstLogin, setisFirstLogin] = useState(false)
  // const [canProceed, setcanProceed] = useState(false)
  // const [user, setUser] = useState('');
  const locData = GetGeoLocation();
  console.log(locData)

  async function updateProfile(event) {
    event.preventDefault();
    setLoading(true)

    const data = new FormData(event.target);
    const { user } = session

    const updates = {
      id: user.id,
      username: data.get('username'),
      title: data.get('title'),
      email: data.get('email'),
      full_name: data.get('fullname'),
      location: data.get('location'),
      first_login: 0,
      updated_at: new Date(),
    }
    // console.log(updates)

    const { error } = await supaBase.from('profiles').upsert(updates)
    if (error) {
      alert(error.message)
    }else{
      window.location.href = "/account"
    }
    setLoading(false)
  }

  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
      <NavigationBar />
      <div className={"container py-5 h-100" + (isMobile ? ' bg-blue-custom' : '')}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-blue-custom text-white" style={{ borderRadius: (isMobile ? '0rem' : '1rem'), border: (isMobile ? 'none' : 'inherit') }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-2 mt-md-4">
                  <p className="mb-4">We noticed this is the first time you've created an account, please fill out the information below to continue.</p>
                  <form onSubmit={updateProfile} className="form-widget">
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control form-control-lg mb-3"
                        placeholder="Username"
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg mb-3"
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="form-control form-control-lg mb-3"
                        placeholder="Full Name"
                      />
                      <AutoComplete
                        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                        onPlaceSelected={(place) => console.log(place)}
                        options={{
                          types: ["address"],
                          componentRestrictions: { country: "us" },
                        }}
                        className="form-control form-control-lg mb-3"
                        id="location"
                        name="location"
                        placeholder="Address"
                      />
                      {/* <input
                        type="text"
                        id="location"
                        name="location"
                        className="form-control form-control-lg mb-3"
                        placeholder="Address"
                      /> */}
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control form-control-lg mb-3"
                        placeholder="Job Title"
                      />
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control form-control-lg mb-3"
                        value={session.user.phone}
                        disabled
                      />
                    </div>
                    <button className="btn btn-outline-light btn-md px-5" type="submit">Finish Registration</button>
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

export default NewAccount;