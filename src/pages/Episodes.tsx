import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { getEpisodesData } from "../store/reducers/episodesReducer";
import { useEffect } from "react";
import { getEpisodesDataServer } from "../store/actions/episodesAction";

const Episodes = () => {
  const dispatch = useDispatch();
  const episodesData = useSelector(getEpisodesData);

  useEffect(() => {
    dispatch(getEpisodesDataServer());
  }, []);

  return (
    <>
      <MainLayout>
        <div>Episodes</div>
      </MainLayout>
      {console.log(episodesData)}
    </>
  );
};

export default Episodes;
