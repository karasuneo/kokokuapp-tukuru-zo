import useFile from "../hooks/useFile";

export function AddDisplayFileForm() {
  const { handleFileChange, onClickAddFile } = useFile();

  return (
    <>
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      <button onClick={onClickAddFile}>Add</button>
    </>
  );
}
