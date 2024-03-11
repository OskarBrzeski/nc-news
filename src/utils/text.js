export function shortenTitle(title) {
    let newTitle = "";

    for (let word of title.split(" ")) {
        if (newTitle.length > 60) {
            newTitle = newTitle.slice(1) + "...";
            return newTitle;
        }

        newTitle += " ";
        newTitle += word;
    }

    return title;
}
