import React ,{Component}from 'react';


class MyComponent extends Component
{
    static defaultProp = {
        name:"기본",
    }
    // static propTypes = {
    //     name:React.PropTypes.string
        
    // };

    render()
    {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                name : {name}<br/>
                children : {children}<br/>
                favoriteNumber : {favoriteNumber}
            </div>
        );
    }
}
// const MyComponent = ({name,favoriteNumber,children})=>{
//     return <div>
//         나의 컴포넌트 : {name}<br/>
        
//         children : {children}..<br/>
//         {favoriteNumber}
//     </div>
// }
// MyComponent.defaultProps={
//     name:"기본"
// };
// MyComponent.PropTypes = {
//      name:PropTypes.string,
//      favoriteNumber:PropTypes.number.isRequired
// };
export default MyComponent;