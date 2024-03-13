import { useEffect } from "react";

function ArticleSort({ searchParams, setSearchParams }) {
    useEffect(() => {
        const ascButton = document.getElementById("sort-asc");
        if (searchParams.get("order") === "asc") {
            ascButton.checked = true;
        } else {
            ascButton.checked = false;
        }

        const sorted_by = searchParams.get("sorted_by");
        if (sorted_by) {
            document.getElementById(`sort-${sorted_by}`).checked = true;
        } else {
            document.getElementById("sort-created_at").checked = true;
        }
    }, [searchParams]);

    function changeSortedBy(event) {
        setSearchParams((searchParams) => {
            searchParams.set("sorted_by", event.target.value);
            return searchParams;
        });
    }

    function changeSortDirection(event) {
        const order = event.target.checked ? "asc" : "desc";
        setSearchParams((searchParams) => {
            searchParams.set("order", order);
            return searchParams;
        });
    }

    return (
        <section className="article-sort">
            <div className="article-sort-inside">
                <div className="sort-by-text">Sort By</div>
                <div className="radio-button-grid">
                    <label htmlFor="sort-created_at">
                        Date
                        <input
                            type="radio"
                            className="sort-radio"
                            id="sort-created_at"
                            name="sort-by"
                            value="created_at"
                            onChange={changeSortedBy}
                        />
                    </label>

                    <label htmlFor="sort-comment_count">
                        Comments
                        <input
                            type="radio"
                            className="sort-radio"
                            id="sort-comment_count"
                            name="sort-by"
                            value="comment_count"
                            onChange={changeSortedBy}
                        />
                    </label>

                    <label htmlFor="sort-votes">
                        Votes
                        <input
                            type="radio"
                            className="sort-radio"
                            id="sort-votes"
                            name="sort-by"
                            value="votes"
                            onChange={changeSortedBy}
                        />
                    </label>
                </div>
                <label htmlFor="sort-asc">
                    Lowest First
                    <input
                        type="checkbox"
                        id="sort-asc"
                        onChange={changeSortDirection}
                    />
                </label>
            </div>
        </section>
    );
}

export default ArticleSort;
