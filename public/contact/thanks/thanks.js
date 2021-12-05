const moshimoSession = sessionStorage.getItem("moshimo-techgeek");
if (moshimoSession) {
  const headTag = document.getElementsByTagName("head")[0];
  const today = new Date(Date.now() + 9 * 3600000).toISOString().replace(/\..*/, '').replace(/T|:/g, "-");
  const sSrc = `https://r.moshimo.com/af/r/result.js?p_id=3903&pc_id=9703&m_v=${today}&rd_code=${moshimoSession}`;
  let oScript = document.createElement("script");
  oScript.type = "text\/javascript";
  oScript.src = sSrc;
  headTag.appendChild(oScript);
  
  const headTag2 = document.getElementsByTagName("head")[0];
  const sSrc2 = `https://r.moshimo.com/af/r/result.js?p_id=3903&pc_id=9701&m_v=${today}&rd_code=${moshimoSession}`;
  let oScript2 = document.createElement("script");
  oScript2.type = "text\/javascript";
  oScript2.src = sSrc2;
  headTag2.appendChild(oScript2);
  sessionStorage.removeItem("moshimo-techgeek");
  console.log("moshimo-techgeek");
}
