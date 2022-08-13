import KEY from "./KEY"

export const fetchPrefix = "https://api.themoviedb.org/3/";


export async function FetchSearch(request, hook) {
    if(!request){return alert("Put in the request")}
    try {
        await fetch(`${fetchPrefix}search/movie?api_key=${KEY}&query=${request}&language=en-US&page=1`)
            .then(result => result.json())
            .then(arr => hook(arr.results))
        
    } catch (e) {
        alert(`${e}`)
    }
};

export async function FetchTrending(hook) {
    try {
        await fetch(`${fetchPrefix}trending/all/day?api_key=${KEY}`)
            .then(result => result.json())
            .then(arr =>  hook(arr.results))
    } catch (e) {
        alert(`${e}`)
    }
};

export async function FetchDetails(movieId, hook) {
    if (!movieId) {
        return
    }
    try {
        await fetch(`${fetchPrefix}movie/${movieId}?api_key=${KEY}&language=en-US`)
            .then(result => result.json())
            .then(arr =>  hook(arr))
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

