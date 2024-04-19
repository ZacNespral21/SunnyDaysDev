// App Core
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { supaBase } from '@core';

//Set Font Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* Import Styles */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css'

/* App Components */
// import Home from './components/home2.component';
import Profile from './components/auth/profile.component';
import Invoice from './components/payments/invoice.component';
import Notifications from './components/global/notifications.component';
import Receipt from './components/payments/receipt.component';
// import  from './components/.component';

/* Pages */
import Home from './pages/home';
import Login from './pages/auth'
import Account from './pages/auth/account';
import NewAccount from './pages/auth/new-account';
import Billing from './pages/auth/billing';
import Admin from './pages/auth/admin'
import OTPVerify from './pages/auth/otp-verify'
import Privacy from './pages/more/privacy'
import Terms from './pages/more/terms'
import Resources from './pages/more/resources'
import ContactUs from './pages/more/contact-us'
import ErrorFourOFour from './pages/errors/404'
import ErrorFiveHundered from './pages/errors/500'

if (isMobile) {
  document.body.classList.add('mobile-system');
} library.add(fas)

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supaBase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supaBase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/otp" element={<OTPVerify />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/500" element={<ErrorFiveHundered />} />
          <Route path="/404" element={<ErrorFourOFour />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/receipt" element={<Receipt />} />
          {/* Auth Routes */}
          {/* <Route path="/" element={< />} /> */}
          <Route path="/account" element={!session ? <Login /> : <Account key={session.user.id} session={session} />} />
          <Route path="/new-account" element={!session ? <Login /> : <NewAccount key={session.user.id} session={session} />} />
          <Route path="/account/billing" element={!session ? <Login /> : <Billing key={session.user.id} session={session} />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App