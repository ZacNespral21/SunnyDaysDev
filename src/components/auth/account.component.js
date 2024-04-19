import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect';
import { supaBase, LoadingSpinner, SetGeoLocation, GetGeoLocation } from '@core';
import NavigationBar from 'components/global/navigation.component';

function AccountComp({ session }) {
  const [loading, setLoading] = useState(true)
  const [isFirstLogin, setisFirstLogin] = useState(false)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [title, setTitle] = useState(null)
  const [location, setLocation] = useState(null)
  const [fullname, setFullname] = useState(null)
  //const [, set] = useState(null)
  const locData = GetGeoLocation();

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      const { user } = session

      const { data, error } = await supaBase
        .from('profiles')
        .select(`username, website, avatar_url, title, location, full_name, first_login`)
        .eq('id', user.id)
        .single()

      if (error) {
        console.warn(error)
      } else if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
        setTitle(data.title)
        setLocation(data.location)
        setFullname(data.full_name)
        setisFirstLogin(data.first_login)
      }

      setLoading(false)
    }

    getProfile()
  }, [session])

  // async function updateProfile(event, avatarUrl) {
  //   event.preventDefault()

  //   setLoading(true)
  //   const { user } = session
  //   console.log(user)

  //   const updates = {
  //     id: user.id,
  //     username,
  //     title,
  //     website,
  //     fullname,
  //     avatarUrl,
  //     updated_at: new Date(),
  //   }

  //   const { error } = await supaBase.from('profiles').upsert(updates)

  //   if (error) {
  //     alert(error.message)
  //   } else {
  //     setAvatarUrl(avatarUrl)
  //   }
  //   setLoading(false)
  // }

  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
      <NavigationBar />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <h5 className="my-3">{username}</h5>
                <p className="text-muted mb-1">{title}</p>
                <p className="text-muted mb-4">{location}</p>
                {
                  !locData.loc &&
                  <>
                    <button className="btn btn-primary btn-lg px-5 mb-3" type="button" onClick={(e) => SetGeoLocation(e)}>Allow Location Permissions</button>
                  </>
                }
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{fullname}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{session.user.phone}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{location}</p>
                  </div>
                </div>
              </div>
            </div><div className="card mb-4">
              <h5 className="my-3">Job History</h5>
              <div className="card-body">
                <div className="row">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 color--heading text-start">Foreman</span>
                    <span className="col-5 col-md-3 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> Full-Time</span>
                    <span className="col-7 col-md-3 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> New York, NY</span>
                    <span className="d-none d-md-block col-1 text-center color--text"><small><i className="fas fa-chevron-right"></i></small></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default AccountComp;