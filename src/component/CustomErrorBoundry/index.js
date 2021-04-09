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
    componentDidCatch(error,errorInfo){
        console.log('Error from commponenet didCatch',error);
    }
    render(){
        return this.props.children;
    }
}
export default CustomErrorBoundry