import { Avatar, Box, Button, Stack } from "@mui/material";
import { EpisodesItem } from "../models/EpisodesItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getEpisodesData,
  getOpenModal,
} from "../store/reducers/episodesReducer";
import rickAndMorty from "../img/rickandmorty.jpg";
import { closeModal, openModal } from "../store/actions/episodesAction";
import Modal from "./Modal";

const EpisodesInfo = () => {
  const episodesData = useSelector(getEpisodesData);
  const openPopup = useSelector(getOpenModal);

  const dispatch = useDispatch();

  const handleOpen = (id: number) => {
    dispatch(openModal(id));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Box
      sx={{ border: "1px solid #000", borderRadius: "5px", padding: "0 10px" }}
    >
      {episodesData.map((episode: EpisodesItem) => (
        <Stack
          sx={{
            flexDirection: "column",
            gap: "20px",
            borderBottom: "1px solid #000",
          }}
          key={episode.id}
        >
          <Avatar
            src={rickAndMorty}
            alt="R&M"
            sx={{ width: "40px", height: "40px" }}
          />
          <div>Name: {episode.name}</div>
          <div>Date: {episode.air_date}</div>
          <Button
            onClick={() => {
              handleOpen(episode.id);
            }}
          >
            Test
          </Button>
        </Stack>
      ))}
      {openPopup && <Modal open={openPopup} handleClose={handleClose} />}
    </Box>
  );
};

export default EpisodesInfo;
