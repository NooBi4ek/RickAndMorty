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
import { getCountPages } from "../store/reducers/episodesReducer";

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
