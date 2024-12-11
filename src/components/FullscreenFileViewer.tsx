import React, { useState } from "react";

const FullscreenFileViewer: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file); // ファイルを Blob URL に変換
      setFileUrl(url);
      setFileType(file.type); // MIME タイプを取得
    }
  };

  const handleClose = () => {
    setFileUrl(null); // ファイルを閉じる
    setFileType(null);
  };

  return (
    <div>
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      {fileUrl && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={handleClose}
        >
          {/* ファイルタイプに応じて表示方法を変更 */}
          {fileType?.startsWith("image/") ? (
            <img
              src={fileUrl}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : fileType?.startsWith("video/") ? (
            <video
              src={fileUrl}
              controls
              autoPlay
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <p style={{ color: "white" }}>対応していないファイル形式です</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FullscreenFileViewer;
