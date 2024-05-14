import { successAction } from '../../lib/actionType';
import { EpisodesItem } from '../../models/EpisodesItem';
import { GET_EPISODES_DATA_SERVER } from '../actions/episodesAction';

import { RootReducer } from './rootReducer';

export interface EpisodesInitialType {
  episodesData: any;
  isLoading: boolean;
}

const episodesInitialState: EpisodesInitialType = {
  episodesData: [],
  isLoading: false,
};

export const episodesReducer = (state = episodesInitialState, action: any) => {
  switch (action.type) {
    case successAction(GET_EPISODES_DATA_SERVER): {
      const data = action.payload.data.results;
      return { ...state, episodesData: data };
    }

    case GET_EPISODES_DATA_SERVER: {
      return { ...state, isLoading: true };
    }

    default:
      return state;
  }
};

export const getEpisodesData = (state: RootReducer) =>
  state.episodes.episodesData;