function TweetForm() {

  const hummingText = 'What are you humming about?';

  const formSubmit = e => {
    e.preventDefault();
  }


  return (
      <section className="newtweet">
        <form method="post" action="/tweets" className="newtweet__form" onSubmit={formSubmit}>
          <textarea className="form__textarea" name="text" placeholder={hummingText}></textarea>
          <input type="submit" value="Tweet" className="form__input"/>
          <span className="form__counter">140</span>
        </form>
      </section>
  );
}

export default TweetForm;
