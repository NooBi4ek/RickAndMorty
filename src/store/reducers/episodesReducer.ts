import { successAction } from '../../lib/actionType';
import { EpisodesActionTypes, openModal } from '../actions/episodesAction';

import { RootReducer } from './rootReducer';

export interface EpisodesInitialType {
  episodesData: any;
  episodeData: any;
  isLoading: boolean;
  openModal: boolean;
}

const episodesInitialState: EpisodesInitialType = {
  episodesData: [],
  episodeData: [],
  isLoading: false,
  openModal: false,
};

export const episodesReducer = (state = episodesInitialState, action: any) => {
  switch (action.type) {
    case successAction(EpisodesActionTypes.GET_EPISODES_DATA_SERVER): {
      const data = action.payload.data.results;
      console.log(data);
      return { ...state, episodesData: data };
    }

    case EpisodesActionTypes.GET_EPISODES_DATA_SERVER: {
      return { ...state, isLoading: true };
    }

    case successAction(EpisodesActionTypes.OPEN_MODAL): {
      const data = action.payload.data;
      console.log(data);
      return {...state, openModal:true,episodeData: data};
    }

    case EpisodesActionTypes.CLOSE_MODAL: {
      return {...state,openModal: false};
    }

    default:
      return state;
  }
};

export const getEpisodesData = (state: RootReducer) =>
  state.episodes.episodesData;

export const getEpisodeData = (state:RootReducer) =>
  state.episodes.episodeData;

export const getOpenModal = (state:RootReducer) =>
  state.episodes.openModal;