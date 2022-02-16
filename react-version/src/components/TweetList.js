import Tweet from './Tweet'


function TweetList() {
  return (
    <section className="tweets">
      <Tweet
        pic= 'https://i.imgur.com/73hZDYK.png'
        name= 'Newton'
        handle= '@SirIsaac'
        tweet= 'If I have seen further it is by standing on the shoulders of giants'
        timeAgo= '10 days ago'/>
      <Tweet
        pic= 'https://i.imgur.com/nlhLi3I.png'
        name= 'Descartes'
        handle= '@rd'
        tweet= 'Je pense , donc je suis'
        timeAgo= '10 days ago'/>
    </section>
  );
}

export default TweetList;