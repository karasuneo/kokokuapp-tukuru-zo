import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../repository/db";

function useFileModel() {
  const displayFiles = useLiveQuery(async () => {
    return db.displayFiles.toArray();
  });

  const addFile = async (file: File) => {
    try {
      const id = await db.displayFiles.add({
        file: file,
        type: file.type,
      });

      console.log(`Display file URL added with ID ${id}`);
    } catch (error) {
      console.error("Error adding display file URL", error);
    }
  };

  return { displayFiles, addFile };
}

export default useFileModel;
