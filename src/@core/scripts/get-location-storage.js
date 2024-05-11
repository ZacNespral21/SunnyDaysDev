const GetGeoLocation = () => {
  // const locTrue = (localStorage.getItem('locLat') && localStorage.getItem('locLng') !== '' ? true : false)
  // const data = {
  //   loc: locTrue,
  //   lat: Number(localStorage.getItem('locLat')),
  //   lng: Number(localStorage.getItem('locLng'))
  // }
  const data = {
    loc: true,
    lat: Number(39.7392364),
    lng: Number(-104.984862)
  }
  return data;
};

export default GetGeoLocation;