import { Button } from "@mui/material";
import PWABadge from "./PWABadge.tsx";
import { useState } from "react";
import { FullscreenImageSlider } from "./features/ImageSlider/components/ImageSlider.tsx";
import { AddDisplayFileForm } from "./features/AddFile/components/FileForm.tsx";
import { DisplayFileUrlList } from "./features/DisplayFile/components/DisplayFileList.tsx";
import useFileModel from "./hooks/useFileModel.ts";

function App() {
  const { displayFiles } = useFileModel();
  const [isSliderOpen, setSliderOpen] = useState(false);
  const displayFileUrls: string[] = displayFiles
    ? displayFiles.map((file) => URL.createObjectURL(file.file))
    : [];

  return (
    <>
      <h2>ファイル追加</h2>
      <AddDisplayFileForm />
      <h2>保存ファイル一覧</h2>
      <DisplayFileUrlList />
      <Button onClick={() => setSliderOpen(true)}>Open Image Slider</Button>
      <FullscreenImageSlider
        images={displayFileUrls}
        open={isSliderOpen}
        onClose={() => setSliderOpen(false)}
      />
      <PWABadge />
    </>
  );
}

export default App;
