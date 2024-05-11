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
import Invoice from './components/payments/invoice.component';
import Receipt from './components/payments/receipt.component';

/* Pages */
import Home from './pages/home';
import Login from './pages/auth'
import OTPVerify from './pages/auth/otp-verify'
import PrivacyPage from './pages/global/privacy'
import TermsPage from './pages/global/terms'
import ResourcesPage from './pages/global/resources'
import ContactUsPage from './pages/global/contact-us'
import ErrorFourOFour from './pages/errors/404'
import ErrorFiveHundered from './pages/errors/500'
import Results from './pages/results';
import ResultsMapPage from './pages/results/map';
import ResultsFlights from './pages/results/flights';
import ResultsHotels from './pages/results/hotels';

//Auth Account Pages (Payment/Billing/ChangePWD)
import NewAccountPage from './pages/auth/new-account';
import UserAccountPage from './pages/account';
import UserAccountBillingPage from './pages/account/billing';
import UserAccountSecurityPage from './pages/account/security';
import UserAccountNotificationsPage from './pages/account/notifications';

//Auth Profile Pages (Username/Password)
import ProfilePage from './pages/profile'
import ProfileTripsPage from './pages/profile/trips'
import ProfileUpcomingTripsPage from './pages/profile/upcoming-trips'
import ProfileTripAlertsPage from './pages/profile/alerts'
import ProfileFavoritesPage from './pages/profile/favorites'

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
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/otp" element={<OTPVerify />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/500" element={<ErrorFiveHundered />} />
          <Route path="/404" element={<ErrorFourOFour />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/map" element={<ResultsMapPage />} />
          <Route path="/results/hotels" element={<ResultsHotels />} />
          <Route path="/results/flights" element={<ResultsFlights />} />
          {/* Auth Routes */}
          <Route path="/profile" element={!session ? <Login /> : <ProfilePage key={session.user.id} session={session} />} />
          <Route path="/profile/trips" element={!session ? <Login /> : <ProfileTripsPage key={session.user.id} session={session} />} />
          <Route path="/profile/upcoming-trips" element={!session ? <Login /> : <ProfileUpcomingTripsPage key={session.user.id} session={session} />} />
          <Route path="/profile/trip-alerts" element={!session ? <Login /> : <ProfileTripAlertsPage key={session.user.id} session={session} />} />
          <Route path="/profile/favorites" element={!session ? <Login /> : <ProfileFavoritesPage key={session.user.id} session={session} />} />
          <Route path="/account" element={!session ? <Login /> : <UserAccountPage key={session.user.id} session={session} />} />
          <Route path="/account/new" element={!session ? <Login /> : <NewAccountPage key={session.user.id} session={session} />} />
          <Route path="/account/billing" element={!session ? <Login /> : <UserAccountBillingPage key={session.user.id} session={session} />} />
          <Route path="/account/notifications" element={!session ? <Login /> : <UserAccountNotificationsPage key={session.user.id} session={session} />} />
          <Route path="/account/security" element={!session ? <Login /> : <UserAccountSecurityPage key={session.user.id} session={session} />} />
          {/* <Route path="/" element={< />} /> */}
          {/* <Route path="/accountauth" element={!session ? <Login /> : <AccountAuth key={session.user.id} session={session} />} /> */}
        </Routes>
      </Router>
    </div>
  )
}
export default App