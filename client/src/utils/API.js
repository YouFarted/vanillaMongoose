import axios from "axios";

function createTimeoutPromise(time) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(null);
    }, time);
  });
}


// This code is meant to serve as a mock fetch from an API.
export async function fakeGetUsers() {

    await createTimeoutPromise(1000);
    return [{name:"user1"},{name:"user2"}];
}

export function getUsers() {
  return axios.get("/api/users/");
}