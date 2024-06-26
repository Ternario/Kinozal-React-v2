export default class MoviesData {
    async getResource(url) {
        const OPTIONS = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzE4MDYxODJlZTdmMTJkMTkwNjc2NGUxZTk4ZTkzZSIsInN1YiI6IjYwODQzNjlmZTYxZTZkMDAyOWIxYWUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jkipb8q3gnHjeZABR2wQSrSTKb6Hs_udZvXbYOrHsJU",
            },
        };

        const res = await fetch(url, OPTIONS);

        return await res.json();
    }

    getMovies = async () => {
        const URL =
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getUpcomingMovies = async () => {
        const URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getTopRated = async () => {
        const URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getNowPlayingMovies = async () => {
        const URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getPopularMovies = async () => {
        const URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getMoviesByGenres = async (genresId) => {
        const URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&with_genres=${genresId}&page=1&sort_by=popularity.desc`;

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getSerials = async () => {
        const URL =
            "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getAiringTodaySerials = async () => {
        const URL = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getOnTheAirSerials = async () => {
        const URL = "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getPopularSerials = async () => {
        const URL = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getTopRatedSerials = async () => {
        const URL = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getSerialsByGenres = async (genresId) => {
        const URL = `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&with_genres=${genresId}&page=1&sort_by=popularity.desc`;

        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getMoviesList = async () => {
        const URL = "https://api.themoviedb.org/3/genre/movie/list?language=en";

        const res = await this.getResource(URL);

        return res.genres.map(this._transformItemList);
    };

    getSerialsList = async () => {
        const URL = "https://api.themoviedb.org/3/genre/tv/list?language=en";

        const res = await this.getResource(URL);

        return res.genres.map(this._transformItemList);
    };

    getCustomSearch = async (query) => {
        const URL = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getCustomMoviesSearch = async (query) => {
        const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getCustomTvSearch = async (query) => {
        const URL = `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`;
        const res = await this.getResource(URL);

        return res.results.map(this._transformItem);
    };

    getCustomPersonSearch = async (query) => {
        const URL = `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`;
        const res = await this.getResource(URL);

        return res.results.map(this._transformPerson);
    };

    // getItemByName = async (name) => {
    //     const res = await this.getResource();
    //     const item = res.filter((item) => {
    //         return item.title.toLowerCase().indexOf(name.toLowerCase()) > -1;
    //     });

    //     return item.map(this._transformItem);
    // };

    // getItemById = async (id) => {
    //     const res = await this.getResource();
    //     const itemId = res.filter((item) => {
    //         return item.id === id;
    //     });

    //     return itemId.map(this._transformItemId);
    // };

    _transformItem(item) {
        return {
            poster: item.poster_path,
            title: item.title || item.name,
            id: item.id,
            releaseDate: item.release_date || item.first_air_date,
            type: item.media_type,
        };
    }

    _transformPerson(item) {
        return {
            photo: item.profile_path,
            name: item.name,
            id: item.id,
            popularity: item.popularity,
        };
    }

    _transformItemList(item) {
        return { id: item.id, genre: item.name };
    }

    _transformItemId(item) {
        return {
            id: item.id,
            title: item.title,
            year: item.year,
            director: item.director,
            writer: item.writer,
            poster: item.poster,
            genres: item.genres,
            type: item.type,
            trailer: item.trailer,
            rank: item.rank,
            likesCount: item.likes_count,
            commentsCount: item.comments_count,
            link: item.link,
            content: item.content,
        };
    }
}
