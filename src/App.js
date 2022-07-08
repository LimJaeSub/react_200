import './App.css';
import React,{useState,useRef} from 'react';
//import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const [inputs,setInputs] = useState({
    username:'',
    email:''
  }); //input의 초기 상태

  const {username,email} = inputs;//객체 안의 값을 추출해서 변수 또는 상수로 만듬

  const onChange = (e) =>{
    const {name,value}=e.target; //e.target 객체 안의 name,value를 비구조화할당을 통해 바로 상수 또는 변수로 사용이 가능
    setInputs({
      ...inputs,
      [name]:value
    }); //inputs를 복사한 뒤 name이라는 새로운 객체의 객체값을 value로 넣음
  }

  const [users,setUsers] = useState(
    [
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
  );
  


  const nextId=useRef(4);
  const onCreate = ()=>{
    const user={
      id:nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));//새로운 원소인 user를 추가해서 users라는 새로운 배열을 만들어줌

    setInputs({
      username:'',
      email:''
    }); // 입력 다 했으면 공백으로 초기화
    nextId.current+=1;
  }
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate} 
      />
      <UserList users={users} />
    </div>
  );
    
    
}

export default App;
