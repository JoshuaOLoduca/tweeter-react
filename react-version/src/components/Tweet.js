function Tweet(props) {

  return (
    <article className="tweet">
      <header className="tweet--header">
        <img className="tweet--avatar" src={props.pic} />
        <h2 className="tweet--name">{props.name}</h2>
        <small className="tweet--handle">{props.handle}</small>
      </header>

      <div className="tweet--body">
        <p>{props.tweet}</p>
      </div>

      <footer className="tweet--footer">
        <small className="footer--age">{props.timeAgo}<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>
            </span>
          </small></small></footer>
    </article>
  );
}

export default Tweet;