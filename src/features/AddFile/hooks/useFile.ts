import { ChangeEvent, useState } from "react";
import useFileModel from "@/hooks/useFileModel";

function useFile() {
  const [file, setFile] = useState<File>();
  const { addFile } = useFileModel();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const onClickAddFile = async () => {
    if (!file) return;

    await addFile(file);
    setFile(undefined);
  };

  return { file, handleFileChange, onClickAddFile };
}

export default useFile;
