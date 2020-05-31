import Loader from './Loader.js';

export default class ErrorBoundaryLoader extends Loader {
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
        console.log(error)
    }

    render(){
        if (this.state.hasError){
            return super.render()
        }
        return this.props.children
    }
}