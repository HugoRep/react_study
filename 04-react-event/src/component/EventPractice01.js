import React from 'react';

class EventPractice01 extends React.Component
{
    state={
        message:''
    }

    handleChange = (e)=>
    {
        this.setState({
            message:e.target.value
        })
    }

    handClick = (e)=>
    {
        alert(this.state.message);
        this.setState({
            message:''
        })
    }

    render(){
        return(
        <>
            <div>
                <h1>이벤트 연습01</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value = {this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handClick}>확인</button>
            </div>
        </>)
    }   
}

export default EventPractice01;
