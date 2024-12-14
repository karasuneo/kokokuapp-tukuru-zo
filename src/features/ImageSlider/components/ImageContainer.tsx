import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { DialogContent, Button, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  images: string[];
  onClose: () => void;
};

export function ImageContainer({ images, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Box
      {...swipeHandlers}
      sx={{ position: "relative", height: "100%", display: "flex" }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 16, right: 16, zIndex: 1000 }}
      >
        <CloseIcon />
      </IconButton>
      <Button
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
        }}
      >
        <ArrowBackIosNewIcon />
      </Button>
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 0,
          width: "100%",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </DialogContent>
      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
        }}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
}
