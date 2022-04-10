import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출 (변수name과 nickname에 객체 input의 속성값인 name,nickname을 집어넣음)

  const onChange = (e) => {
      console.log(e.target);
    const { value, name } = e.target; // 위와 마찬가지로 e.target(onchange 이벤트를 하는 input)의 속성값을 value와 name이라는 새로운 변수에 넣음
    console.log(value);
    console.log(name); 
    console.log(inputs);
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]:value 
      // 객체의 속성값에 값을 할당할때 동적인 키값으로 값을 할당할때 대괄호를 써줌
      //input의 name이라는 속성값에 value값을 집어넣음
      //name : 'value'가 되는것
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;