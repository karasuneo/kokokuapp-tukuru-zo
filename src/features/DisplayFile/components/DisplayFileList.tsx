import { DisplayFile } from "@/types";
import useFile from "../hooks/useFile";

export function DisplayFileUrlList() {
  const { displayFiles } = useFile();

  return (
    <ul>
      {displayFiles?.map((displayFile: DisplayFile) => (
        <li key={displayFile.id}>
          {displayFile.type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(displayFile.file)}
              alt="Preview"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          ) : displayFile.type.startsWith("video/") ? (
            <video
              src={URL.createObjectURL(displayFile.file)}
              controls
              autoPlay
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          ) : (
            <p>Unsupported file type</p>
          )}
        </li>
      ))}
    </ul>
  );
}
