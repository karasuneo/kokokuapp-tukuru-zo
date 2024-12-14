import { Button } from "@mui/material";
import PWABadge from "./PWABadge.tsx";
import { AddDisplayFileForm } from "./features/AddFile/components/FileForm.tsx";
import { DisplayFileUrlList } from "./features/DisplayFile/components/DisplayFileList.tsx";

function App() {
  return (
    <>
      <Button variant="contained">Hello World</Button>
      <h2>Add DisplayFileUrl</h2>
      <AddDisplayFileForm />
      <h2>DisplayFileUrl List</h2>
      <DisplayFileUrlList />
      <PWABadge />
    </>
  );
}

export default App;
