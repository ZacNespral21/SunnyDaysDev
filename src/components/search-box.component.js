// React & Core
// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { isMobile } from 'react-device-detect';
import { LoadingSpinner, SetGeoLocation, GetGeoLocation } from '@core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchange, faCalendar, faSearch, faPerson, faUser, faPlaneDeparture, faArrorRightLong } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import AutoComplete from "react-google-autocomplete";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Person from '@mui/icons-material/Person';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// Import Assets & Styling
import 'assets/styles/components/search-box.scss';
import "react-datepicker/dist/react-datepicker.css";

function SearchBox() {
  const [loading, setLoading] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [age, setAge] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault()

    setLoading(true)
    window.location.href = '/results';
    // const { error } = await supaBase.auth.signInWithOtp({ email })
    // const { error } = await supaBase.auth.signInWithOtp({
    //   phone: phoneNum,
    // })

    // if (error) {
    //   alert(error.message)
    // } else {
    //   window.location.href = "/otp?phone=" + phoneNum;
    // }
    setLoading(false)
  }

  const formatPhoneNum = async (e) => {
    setPhoneNum(e);
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (<>
    <form className="form-widget" onSubmit={handleLogin}>
      <div className="container">
        <div className="card border-start-lg border-start-primary">
          <div className="card-body search-box-card-body">
            <div className="row p-4 pb-0">
              <div className="row">
                <div className="col-md-2 float-left p-0 m-0">
                  <Select sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0, outline: 0 }, '.MuiOutlinedInput-notchedOutline:focus-visible': { outline: 0 } }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="round-trip"
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value='round-trip'><FontAwesomeIcon icon={faExchange} size="lg" className="mx-2" />Round Trip</MenuItem>
                    <MenuItem value='one-way'><FontAwesomeIcon icon={faPlaneDeparture} size="lg" className="mx-2" />One Way</MenuItem>
                  </Select>
                </div>
                <div className="col-md-2 float-left p-0 m-0">
                  <Select sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0, outline: 0 }, '.MuiOutlinedInput-notchedOutline:focus-visible': { outline: 0 } }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-2"
                    value="round-trip"
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value='one'><FontAwesomeIcon icon={faUser} size="lg" className="mx-2" />1</MenuItem>
                    <MenuItem value='couple'><FontAwesomeIcon icon={faUser} size="lg" className="mx-2" />2</MenuItem>
                    <MenuItem value='multiple'><FontAwesomeIcon icon={faUser} size="lg" className="mx-2" />3+</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 float-left p-0 mt-4">
                  {/* <input type="text" className="form-control" id="firstName" name="firstName" /> */}
                  <div className="departure-field col-md-4 float-left">
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
                      placeholder="Departure"
                    />
                  </div>
                  <div className="exchange-field col-md-2 float-left">
                    <FontAwesomeIcon icon={faExchange} size="lg" className="mx-4" />
                  </div>
                  <div className="destination-field col-md-4 float-left">
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
                      placeholder="Destination"
                    />
                  </div>
                </div>
                <div className="col-md-6 float-left p-0 mt-4">
                  <div className="exchange-field col-md-2 float-left">
                    <FontAwesomeIcon icon={faCalendar} size="lg" className="mx-4" />
                  </div>
                  <div className="col-md-4 float-left">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control form-control-lg mb-3" 
                    />
                  </div>
                  <div className="exchange-field col-md-2 float-left">
                    <FontAwesomeIcon icon={faExchange} size="lg" className="mx-4" />
                  </div>
                  <div className="col-md-4 float-left">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control form-control-lg mb-3"
                    />
                    {/* <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value="round-trip"
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value='round-trip'><FontAwesomeIcon icon={faExchange} size="lg" className="m-1" />Round Trip</MenuItem>
                      <MenuItem value='one-way'><FontAwesomeIcon icon={faPlaneDeparture} size="lg" className="m-1" />One Way</MenuItem>
                    </Select> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="search-box-btn-container">
              <button className={'btn btn-theme-primary btn-outline-light btn-lg mt-4 px-5'} disabled={loading}>
                {loading ? <span>Loading</span> : <span><FontAwesomeIcon icon={faSearch} size="md" className="search-box-btn-icon" /> Search</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </>);
}

export default SearchBox;