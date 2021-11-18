const moshimoSession = sessionStorage.getItem("moshimo-techgeek");
if (moshimoSession) {
  const headTag = document.getElementsByTagName("head")[0];
  const today = new Date();
  const sSrc = `https://r.moshimo.com/af/r/result.js?p_id=moshimoafi&pc_id=thanks&m_v=${today.toISOString()}&rd_code=${moshimoSession}`;
  let oScript = document.createElement("script");
  oScript.type = "text\/javascript";
  oScript.src = sSrc;
  headTag.appendChild(oScript);
  sessionStorage.removeItem("moshimo-techgeek");
}