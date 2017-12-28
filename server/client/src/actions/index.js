import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
        const user = await axios.get("/api/current_user");

        dispatch({ type:FETCH_USER, payload: user.data });
}

export const submitNote = (values) => async dispatch => {
        const res = await axios.post("/api/new/simplenote", values);

        dispatch({ type:FETCH_USER, payload: res.data});
}