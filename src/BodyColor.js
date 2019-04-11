import React from 'react'

class BodyColor extends React.Component {
    componentWillMount(){
        document.getElementById('body').className='lightTheme'
    }
    componentWillUnmount(){
        document.getElementById('body').className='darkTheme'
    }
    render(){
        return (
            <div> Dark Theme </div>
        )
    }
}

export default BodyColor;