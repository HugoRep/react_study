import React from 'react';

class RefSample extends React.Component
{
    input = React.createRef();

    handleFocus = ()=>
    {
        this.input.current.focus();
    }

    render()
    {
        return(<div>
            <input ref={this.input}/>
        </div>)
    }
}
export default RefSample;