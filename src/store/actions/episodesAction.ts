export const GET_EPISODES_DATA_SERVER = "GET_EPISODES_DATA_SERVER"

export const getEpisodesDataServer = () =>({
    type: GET_EPISODES_DATA_SERVER,
    payload: {
        request: {
            method: "GET",
            url: '/episode/'
        }
    }
})