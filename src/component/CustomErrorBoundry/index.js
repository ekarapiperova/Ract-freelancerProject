import React from 'react'

class CustomErrorBoundry extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }

    }
    
    render(){
        if (this.state.hasError) {
            return <h1>I'm soo sorry</h1>
        }
    }
}
export default CustomErrorBoundry