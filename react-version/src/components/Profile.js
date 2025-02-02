function Profile() {
  const firstName = 'Ted';
  const lastName = 'Mosby';
  const profilePic = '/profile-hex.png';
  return (
    <aside>
      <div className="profile">
        <img className="profile__image" src={profilePic} />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
      </div>
    </aside>
  );
}

export default Profile;