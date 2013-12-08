/*Cookies*/
window.setCookie = function(key, value) {
  document.cookie = key + '=' + escape(value);
}

window.getCookie = function(key) {
  // Separate key / value pairs
  var cookies = document.cookie.split(";");
  var index;
  for(index = 0; index < cookies.length; index++) {
    cookieEntry = cookies[index].split("=");
    // first part of the split string holds the key ...
    if (key == cookieEntry[0].replace(" ", "")) {
       // ... and the second one the value
       return cookieEntry[1];
    }
  }
  return null;
}