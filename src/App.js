import Comment from './components/comment/Comment';
import './App.css';

const userComment = {
  userName: "Hello Kitty",
  commentText: "Lorem ipsum dolor sit amet.",
  commentDate: new Date(),
  avatarUrl: "https://meragor.com/files/styles//220_220_bottom_wm/1_9.jpg",
}

function App() {
  return (
    <div className="App">
      <Comment data={userComment}/>
    </div>
  );
}

export default App;
