import { ChangeEvent, useState } from "react";
import { db } from "@/db/db";

function useFile() {
  const [file, setFile] = useState<File>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const onClickAddFile = async () => {
    try {
      if (!file) return;

      const id = await db.displayFiles.add({
        file: file,
        type: file.type,
      });

      console.log(`Display file URL added with ID ${id}`);
    } catch (error) {
      console.error("Error adding display file URL", error);
    }
  };

  return { file, handleFileChange, onClickAddFile };
}

export default useFile;
