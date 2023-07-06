export const getTimeDifference = (currentDate, givenDate) => {
  var diff = Math.abs(givenDate - currentDate);
  var minutes = Math.floor((diff / (1000 * 60)) % 60);
  var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days > 0) {
    return days + " days " + hours + " hours " + minutes + " mins";
  } else if (hours > 0) {
    return hours + " hours " + minutes + " mins";
  } else {
    return minutes + " mins";
  }
};
