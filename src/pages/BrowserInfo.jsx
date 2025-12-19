import { useEffect, useState } from "react";

export default function BrowserInfo() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("https://api.apicagent.com/?ua=" + navigator.userAgent)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  if (!info) {
    return <p>Carregando informações do navegador...</p>;
  }

  return (
    <div className="card">
      <h2>Informações do Navegador</h2>

      <p><b>Browser Family:</b> {info.browser_family}</p>
      <p><b>Version:</b> {info.version}</p>
      <p><b>Brand:</b> {info.brand}</p>
      <p><b>Type:</b> {info.type}</p>
      <p><b>OS Family:</b> {info.os_family}</p>
    </div>
  );
}
