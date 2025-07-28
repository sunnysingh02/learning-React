
import { useEffect, useState } from "react";
function App() {

  const users = [
    {
      userName: "sunny05",
      name: "Sunny Singh",
      avatarImage: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "MERN Stack Developer | 100xDev Learner",
    },
    {
      userName: "priya07",
      name: "Priya Sharma",
      avatarImage: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "UI/UX Designer | Loves Figma & React",
    },
    {
      userName: "rahul09",
      name: "Rahul Mehta",
      avatarImage: "https://randomuser.me/api/portraits/men/76.jpg",
      bio: "Backend Wizard | Node.js & Databases",
    },
  ];


  return (
    <div>
      {users.map(user => (
        <ProfileCard
          userName={user.userName}
          avatarImage={user.avatarImage}
          name={user.name}
          bio={user.bio}
        />
      ))}


    </div>
  );
}

const ProfileCard = ({ userName, avatarImage, name, bio }) => {
  const [like, setLike] = useState(0);
  useEffect(() => {
    if (like > 0) {
      alert(`${name} received a like!`);
    }
  }, [like]);


  return (
    <div>
      <h1>userName:- {userName}</h1>
      <form style={{ backgroundColor: "", border: '2px dotted #4CAF50', padding: '20px', margin: '10px', borderRadius: '8px' }}>
        <img src={avatarImage} style={{ width: 50, height: 50, }} /><br />
        <b>{name}</b>
        <p>{bio}</p>

      </form>
      <div>
        <button onClick={() => setLike(like + 1)} disabled={like >= 10}>Like {like}</button>
        {like > 0 && <p>This profile is liked!</p>}

      </div>

    </div>
  )


}

export default App;
