import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";

function useFile() {
  const displayFiles = useLiveQuery(async () => {
    const displayFileUrls = db.displayFiles.toArray();

    return displayFileUrls;
  });

  return { displayFiles };
}

export default useFile;
