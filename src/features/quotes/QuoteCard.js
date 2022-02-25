import React from "react";
import { useDispatch } from "react-redux";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";

function QuoteCard(
  props
  // {
  // quote,
  // removeQuote, upvoteQuote, downvoteQuote
  // }
) {
  const dispatch = useDispatch();

  function handleUpvoteClick(e) {
    dispatch(upvoteQuote(props.quote.id));
  }

  function handleDownvoteClick(e) {
    dispatch(downvoteQuote(props.quote.id));
  }

  function handleRemoveClick(e) {
    dispatch(removeQuote(props.quote.id));
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content}</p>
            <footer>
              - author <cite title="Source Title">{props.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              onClick={handleUpvoteClick}
              className="btn btn-primary"
            >
              Upvote
            </button>
            <button
              type="button"
              onClick={handleDownvoteClick}
              className="btn btn-secondary"
            >
              Downvote
            </button>
            <button
              type="button"
              onClick={handleRemoveClick}
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
