import PWABadge from "./PWABadge.tsx";
import "./App.css";
import FullscreenFileViewer from "./components/FullscreenFileViewer.tsx";

function App() {
  return (
    <>
      <FullscreenFileViewer />
      <PWABadge />
    </>
  );
}

export default App;
