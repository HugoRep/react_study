import React, {useState} from 'react';

const EventPractice04 = () =>
{

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeusername = e => setUsername(e.target.value);
    const onChangeMessage = e=> setMessage(e.target.value);
    const onClick = () =>
    {
        alert (username +  " : " + message);
        setUsername('');
        setMessage('');
    }

    const onKeyPress = e =>
    {
        if(e.key == 'Enter')
        {
            onClick();
        }
    }

    return (<div>
        <h1>이벤트 연습04</h1>
        <input 
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChangeusername}
            />
        <input 
            type="text"
            name="username"
            placeholder="사용자명"
            value={message}
            onChange={onChangeMessage}
            onKeyPress={onKeyPress}
            />
        <button onClick={onClick}>확인</button>
    </div>)
}

export default EventPractice04;