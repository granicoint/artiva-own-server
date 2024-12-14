export const interceptorsRequest = (request) => {
    let authenticationData = localStorage.getItem("authToken");

    if (authenticationData) {
        request.headers.Authorization = `Bearer ${authenticationData}`;
    }

    return request;
};

export const interceptorsRequestError = (error) => {
    return Promise.reject(error);
};

export const interceptorsResponse = (response) => {
    return response;
};

export const interceptorsResponseError = (error) => {
    throw error;
};
