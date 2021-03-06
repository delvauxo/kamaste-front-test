import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const userToken = createAction('user/token', ({ token, expire }) => {
    const { pseudo, isAdmin } = jwtDecode(token);
    return {
        payload: {
            token,
            expire,
            pseudo,
            isAdmin
        }
    };
});

export const userLogout = createAction('user/logout');
export const userSendError = createAction('user/sendError');
export const userClearError = createAction('user/clearError');

export const userLogin = ({ identifier, password }) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_BACK_URL}/api/auth/login`, { identifier, password })
            .then(({ data }) => {
                dispatch(userToken(data));
            }).catch(() => {
                dispatch(userSendError());
            });
    };
};

export const userRegister = ({ pseudo, email, password }) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_BACK_URL}/api/auth/register`, { pseudo, email, password })
            .then(({ data }) => {
                dispatch(userToken(data));
            }).catch(() => {
                dispatch(userSendError());
            });;
    };
};