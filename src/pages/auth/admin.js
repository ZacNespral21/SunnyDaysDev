// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';
import { supaBase, NavigationBar } from '@core';

function Admin() {

  const handleReset = async (e) => {
    e.preventDefault()

    const { error } = await supaBase.database.reset()

    if (error) {
      alert(error.message)
    } else {
      window.location.href = '/';
    }
  }
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
        <NavigationBar />
      <button className="btn btn-danger btn-outline-light btn-lg px-5" type="button" onClick={handleReset}>Reset DB</button>
    </section>
  </>;
}

export default Admin;