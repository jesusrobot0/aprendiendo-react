import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: true,
    },
    {
      userName: "lexfridman",
      name: "Lex Fridman",
      isFollowing: false,
    },
    {
      userName: "JonErlichman",
      name: "Jon Erlichman",
      isFollowing: false,
    },
  ];

  return (
    <div className="App">
      <h2 style={{ color: "#fff", margin: "0 0 1rem" }}>A quién seguir</h2>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </div>
  );
}
