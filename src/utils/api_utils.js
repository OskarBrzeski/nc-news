export function linkWithParams(link, searchParams) {
    if (searchParams.size === 0) {
        return link;
    }

    let queryStrings = [];

    for (let [key, value] of searchParams.entries()) {
        queryStrings.push(`${key}=${value}`);
    }

    return link + "?" + queryStrings.join("&");
}
