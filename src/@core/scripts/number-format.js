// const formatPhoneNumber = (e) => {
//   let formattedNumber;
//   const { name, value } = e.target;
//   const { length } = value;
//   // Filter non numbers
//   const regex = () => value.replace(/[^0-9\.]+/g, "");
//   // Set area code with parenthesis around it
//   const areaCode = () => `(${regex().slice(0, 3)})`;

//   // Set formatting for first six digits
//   const firstSix = () => `${areaCode()} ${regex().slice(3, 6)}`;

//   // Dynamic trail as user types
//   const trailer = (start) => `${regex().slice(start,
//     regex().length)}`;
//   if (length < 3) {
//     // First 3 digits
//     formattedNumber = regex();
//   } else if (length === 4) {
//     // After area code
//     formattedNumber = `${areaCode()} ${trailer(3)}`;
//   } else if (length === 5) {
//     // When deleting digits inside parenthesis
//     formattedNumber = `${areaCode().replace(")", "")}`;
//   } else if (length > 5 && length < 9) {
//     // Before dash
//     formattedNumber = `${areaCode()} ${trailer(3)}`;
//   } else if (length >= 10) {
//     // After dash
//     formattedNumber = `${firstSix()}-${trailer(6)}`;
//   }
//   const formattedObject = {
//     target: { name: name, value: formattedNumber }
//   };
//   handleChange(formattedObject);
// };

// export default formatPhoneNumber;