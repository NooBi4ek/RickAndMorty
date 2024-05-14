export enum EpisodesActionTypes {
    GET_EPISODES_DATA_SERVER = "GET_EPISODES_DATA_SERVER",
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
  }
export const getEpisodesDataServer = (props:string) =>({
    type: EpisodesActionTypes.GET_EPISODES_DATA_SERVER,
    payload: {
        request: {
            method: "GET",
            url: `/episode?page=${props}`
        }
    }
})

export const openModal = (props:number) =>({
    type: EpisodesActionTypes.OPEN_MODAL,
    payload: {
        request: {
            method: "GET", 
            url: `/episode/${props}`
        }
    }
})

export const closeModal = () =>({
    type: EpisodesActionTypes.CLOSE_MODAL,
    payload: {},
})