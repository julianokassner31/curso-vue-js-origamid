export function serialize(query) {
    let queryString = "";
    
    for (const key in query) {
        queryString += `&${key}=${query[key]}`;
    }

    return queryString;
}