import React from 'react';
import { PropTypes } from 'prop-types';
import {
  InfoMovie,
  InfoTitle,
  InfoName,
  InfoText,
} from './MovieDetails.styled';

const MovieDetails = ({ movie }) => {
  return (
    <InfoMovie>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt="poster the film"
      ></img>
      <div>
        <InfoTitle>{`${movie.title} (${movie.release_date.slice(
          0,
          4
        )})`}</InfoTitle>
        <InfoText>
          <InfoName>User Score: </InfoName>
          {`${movie.vote_average}`}
        </InfoText>
        <InfoText>
          <InfoName>Overview: </InfoName>
          {`${movie.overview}`}
        </InfoText>
        <InfoText>
          <InfoName>Genres: </InfoName>
          {`${movie.genres.map(genre => genre.name).join(', ')}`}
        </InfoText>
      </div>
    </InfoMovie>
  );
};

MovieDetails.propTyps = {
  movie: PropTypes.object.isRequared
};
export default MovieDetails;
