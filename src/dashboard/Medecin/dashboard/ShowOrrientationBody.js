import React from 'react';




class ShowOrrientationBody extends React.Component {
    state = {
        information_docteur : ''
    }

    componentDidMount = () => {
        console.log(this.props.data)
        this.setState({
            ...this.props.data
        })
    }
    
    render() {
        return(
            <div className='ShowBody'>
                   {this.props.text}
            </div>
        )
    }
}

export default ShowOrrientationBody;