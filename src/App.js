import './App.css';
import InputSample from './InputSample';
import UserList from './UserList';


function App() {
  const users=[
    {
      id:1,
      username:'hello1',
      email:'fadsf1@naver.com'
    },
    {
      id:2,
      username:'hello2',
      email:'fadsf2@naver.com'
    },
    {
      id:3,
      username:'hello3',
      email:'fadsf3@naver.com'
    },
    {
      id:4,
      username:'hello4',
      email:'fadsf4@naver.com'
    },
  ]
  return (
    <UserList users={users} />
  );
}

export default App;
