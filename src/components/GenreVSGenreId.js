//Function that return the names of the genre, in regard of the id of the genre
function GenreVSGenreId(genres, genresId) {
  //Variable that will keep the names of the genres
  let filteredGenre = [];

  //Loop ont the ids to find the good names and keep it on the variable filteredGenre
  genresId.map((genreId) => {
    const genreToKeep = genres.genres.find((genre) => genre.id === genreId);
    filteredGenre.push(genreToKeep.name);
    return null;
  });

  return filteredGenre;
}

export default GenreVSGenreId;
