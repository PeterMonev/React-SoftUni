import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as gameService from "../../services/gameService";

const Details = ({ addComment }) => {
  const { gameId } = useParams();
  const { comment, setComment } = useState({
    username: "",
    comment: "",
  });
  const [currentGame, setCurrentGame] = useState({});

  const [error, setError] = useState({
    username: "",
    comment: "",
  });

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      setCurrentGame(result);
    });
  }, []);



  const addCommentHandler = (e) => {
    e.preventDefault();

    addComment(gameId, `${comment.username}: ${comment.comment}`);
  };

  const onChange = (e) => {
    setComment((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const validateUsername = (e) => {
    const username = e.target.value;

    if (username.length < 4) {
      setError((state) => ({
        ...state,
        username: "Username is must longer then 4 character",
      }));
    }
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={currentGame.imageUrl} />
          <h1>{currentGame.title}</h1>
          <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
          <p className="type">{currentGame.category}</p>
        </div>
        <p className="text">{currentGame.summary}</p>
        {/* Bonus ( for Guests and Users ) */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {currentGame.comments?.map((x) => (
              <li className="comment">
                <p>{x}</p>
              </li>
            ))}
          </ul>

          {!currentGame.comments && <p className="no-comment">No comments.</p>}
          {/* Display paragraph: If there are no games in the database */}
        </div>
        {/* Edit/Delete buttons ( Only for creator of this game )  */}
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>
      {/* Bonus */}
      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          <input
            name="username"
            placeholder="John Doe"
            onChange={onChange}
            value={comment.username}
            onBlur={validateUsername}
          />

          {error.username && (
            <div style={{ color: "red" }}>{error.username}</div>
          )}

          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={onChange}
            value={comment.comment}
          />

          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
};

export default Details;
