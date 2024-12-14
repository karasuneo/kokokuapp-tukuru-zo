import { Dialog } from "@mui/material";
import { ImageContainer } from "./ImageContainer";

type Props = {
  images: string[];
  open: boolean;
  onClose: () => void;
};

export function FullscreenImageSlider({ images, open, onClose }: Props) {
  if (!images || images.length === 0) return null;

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <ImageContainer images={images} onClose={onClose} />
    </Dialog>
  );
}
