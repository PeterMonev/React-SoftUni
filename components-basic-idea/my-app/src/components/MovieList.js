import Movie from './Movie';

const MovieList = (props) => {
    return (<div>
             <h1>Movie List</h1>
      <Movie 
      title={props.movie[0].title}
      year={props.movie[0].year}
      cast={props.movie[0].year}
      isNew={false}
      />
    </div>);
};

export default MovieList;