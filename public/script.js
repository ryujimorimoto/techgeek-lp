const params = new URLSearchParams(window.location.search);
const rd_code = params.get('rd_code');
if (rd_code) {
  window.sessionStorage.setItem('moshimo-techgeek', rd_code);
}