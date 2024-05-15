<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { useEffect } from "react";
import {
  getEpisodesDataServer,
  getPagesEpisodesDataServer,
} from "../store/actions/episodesAction";
import { Box, Pagination, Stack } from "@mui/material";
import { getCountPages } from "../store/reducers/episodesReducer";
import EpisodesInfo from "../components/EpisodesInfo";

const Episodes = () => {
  const dispatch = useDispatch();
  const countPage = useSelector(getCountPages);

  const handleChange = (event: any) => {
    dispatch(getEpisodesDataServer(event.target.textContent));
  };

  useEffect(() => {
    dispatch(getPagesEpisodesDataServer());
    dispatch(getEpisodesDataServer("1"));
  }, []);

  return (
    <>
      <MainLayout>
        <Box>
          <Stack
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <EpisodesInfo />
            <Pagination
              count={countPage}
              variant="outlined"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Stack>
        </Box>
      </MainLayout>
=======
import MainLayout from "../layout/MainLayout";

const Episodes = () => {
  return (
    <>
      <MainLayout />
>>>>>>> 0c16d32ed13a087223d2680dc4f9d8abc4613b32
    </>
  );
};

export default Episodes;
