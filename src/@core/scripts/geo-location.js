function SetGeoLocation() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    localStorage.setItem('locLat', crd.latitude);
    console.log(`Longitude: ${crd.longitude}`);
    localStorage.setItem('locLng', crd.longitude);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        console.log(result);
        if (result.state === "granted") {
          //If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success, errors, options);
          window.location.reload();
        } else if (result.state === "prompt") {
          //If prompt then the user will be asked to give permission
          navigator.geolocation.getCurrentPosition(success, errors, options);
          window.location.reload();
        } else if (result.state === "denied") {
          return false;
          //If denied then you have to show instructions to enable location
        }
      });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

export default SetGeoLocation;