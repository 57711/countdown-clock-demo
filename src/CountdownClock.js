import React from 'react';
import PropTypes from 'prop-types';

class Countdown extends React.Component{
    state={time:this.props.seconds};
    componentDidMount(){
        this.timer = setInterval(()=>{this.tick()},1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    tick(){
        if(this.state.time !== 0){
            this.setState((state, props)=>({time: state.time - 1}));
        }else{
            this.props.onFinish();
            clearInterval(this.timer);
        }
    }
    render(){
        return(<div>{this.props.timeFormat(this.state.time)}</div>)
    }
}

Countdown.propTypes = {
    seconds: PropTypes.number.isRequired,
    onFinish: PropTypes.func.isRequired,
    timeFormat: PropTypes.func
}

Countdown.defaultProps={
    timeFormat: function(value){return value+"s";}
}

export default Countdown;