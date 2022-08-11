import KEY from "./KEY"

const fetchPrefix = "https://api.themoviedb.org/3/"

export async function FetchSearch() {
    try {
        await fetch(`${fetchPrefix}search/movie?api_key=${KEY}&language=en-US&page=1`)
            .then(result => result.json())
            //then logic
    } catch (e) {
        alert(`${e}`)
    }
};

export async function FetchTrending() {
    try {
        await fetch(`${fetchPrefix}trending/all/day?api_key=${KEY}`)
            .then(result => result.json())
            //then logic
    } catch (e) {
        alert(`${e}`)
    }
};

export async function FetchDetails(movieId) {
    try {
        await fetch(`${fetchPrefix}movie/${movieId}?api_key=${KEY}&language=en-US`)
            .then(result => result.json())
            //then logic
    } catch (e) {
        alert(`${e}`)
    }
};

export async function FetchCredits(movieId) {
    try {
        await fetch(`${fetchPrefix}movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
            .then(result => result.json())
            //then logic
    } catch (e) {
        alert(`${e}`)
    }
};

export async function FetchRewiews(movieId) {
    try {
        await fetch(`${fetchPrefix}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
            .then(result => result.json())
            //then logic
    } catch (e) {
        alert(`${e}`)
    }
};
