const LOCALE = "ru-RU";
export const getMovieTitle = (movie, type = "default") => {
    const title = movie?.title || movie?.original_title || movie?.name;
    if (type === "default") return title;
    else if (type === "link") return title.replace(/ /g, "_");
}

export const dateToLocale = (date, locale = LOCALE) => {
    const DATETIME_OPTS = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'};
    return new Intl.DateTimeFormat(locale, DATETIME_OPTS).format(new Date(date))
}

export const getMovieLink = (movie, type) => {
    const isMovieExist = Object.keys(movie).length;
    return isMovieExist ? `/overview/${movie.media_type || type}/${movie.id}-${getMovieTitle(movie, "link")}` : "/404"
}