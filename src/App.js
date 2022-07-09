import { Dialog } from "@mui/material";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [showMod, setShowMod] = useState(false);
  const openMod = () => setShowMod(true);
  const closeMod = () => setShowMod(false);

  const hyperlnk = () =>
    window.open("https://www.plufo.com/online-live-classes", "_blank");

  useEffect(() => {
    const interval = setTimeout(openMod, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, []);
  return (
    <Dialog open={showMod} onClose={closeMod}>
      <i class="fa-solid fa-xmark" id="close" onClick={closeMod}></i>
      <img src="/newimg.jpg" alt="popimg" id="img" onClick={hyperlnk}></img>
    </Dialog>
  );
}

export default App;
