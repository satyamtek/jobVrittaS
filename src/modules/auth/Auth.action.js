import { put, call, takeLatest } from "redux-saga/effects";
import { requestPromise, createQueryString, createHeaders, createHeadersWithAuth } from '../../networking/request';
import { actionTypes, actions } from './Auth.action';
import { API_ENDPOINTS } from "../../constants";

/*
 * Login Saga with username & password
 */
export async function postLogin(payload, onSuccess, onError) {
    let requestURL = API_ENDPOINTS.LOGIN;

    let options = {};
    options.headers = createHeaders();

    options.method = 'POST';
    options.body = JSON.stringify(payload);

    try {
        // const { email, password } = action.payload;
        console.log("postLogin options +++", requestPromise, requestURL, options);
        const response = await requestPromise(requestURL, options)
        console.log("postLogin After Response +++", response);

        //if login success then fetch user details and then forward to login success
        if (response && response?.token) {
            onSuccess(response);
        } else {
            onError(response);
        }
    } catch (error) {
        console.log("Saga Error postLogin+++", error);
        onError({ s: '500', m: "Error while process your request!", log: error });
    }
}




