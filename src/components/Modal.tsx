import { Box, Button, Modal as MuiModal, Stack } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { getEpisodeData } from "../store/reducers/episodesReducer";
import { EpisodesItem } from "../models/EpisodesItem";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 574,
  maxWidth: "95%",
  bgcolor: "#141414",
  opacity: "1",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Modal: FC<Props> = ({ open, handleClose }) => {
  const episodeData: EpisodesItem = useSelector(getEpisodeData);

  return (
    <MuiModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack>
          <div>{episodeData.name}</div>
          <div>{episodeData.air_date}</div>
        </Stack>
        <Button variant="outlined" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </MuiModal>
  );
};

export default Modal;
