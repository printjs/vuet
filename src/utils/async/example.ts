import request from "@utils/async/__mocks__/request";


export function getUserName(userID: number) {
    return request("/users/" + userID).then((user: any) => user.name);
}