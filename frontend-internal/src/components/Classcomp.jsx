import React,{Component} from 'react'
class Classcomp extends Component{
    constructor(props){
        super(props)
        this.state={count:0}

    }
    inc=()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <>
            <span>{this.state.count}</span>
            <button onClick={this.inc}>Increment</button>
            </>
        )
    }
}
export default Classcomp;