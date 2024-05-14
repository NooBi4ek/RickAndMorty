import { useDispatch } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { useEffect } from "react";
import { getEpisodesDataServer } from "../store/actions/episodesAction";
import { Box, Pagination, Stack } from "@mui/material";
import EpisodesInfo from "../components/EpisodesInfo";

const Episodes = () => {
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    dispatch(getEpisodesDataServer(event.target.textContent));
  };

  useEffect(() => {
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
              count={3}
              variant="outlined"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Stack>
        </Box>
      </MainLayout>
    </>
  );
};

export default Episodes;
