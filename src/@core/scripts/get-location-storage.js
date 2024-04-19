const GetGeoLocation = () => {
  const locTrue = (localStorage.getItem('locLat') && localStorage.getItem('locLng') !== '' ? true : false)
  const data = {
    loc: locTrue,
    lat: Number(localStorage.getItem('locLat')),
    lng: Number(localStorage.getItem('locLng'))
  }
  return data;
};

export default GetGeoLocation;