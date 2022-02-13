/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import instance from "./instance";

export const singup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};

export const singin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};
