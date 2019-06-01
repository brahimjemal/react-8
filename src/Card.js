import React from 'react';
import { ReactComponent } from 'react';

class Card extends React.Component {
    state = {
        number: 0,
        result: 0,
    }
    change1 = () => {
        this.setState({
            number: 1,
            result: 1,
        })
    }
    change2 = () => {
        this.setState({
            number: 2,
            result: 4,
        })
    }
    change3 = () => {
        this.setState({
            number: 3,
            result: 9,
        })
    }
    change4 = () => {
        this.setState({
            number: 4,
            result: 16,
        })
    }
    change5 = () => {
        this.setState({
            number: 5,
            result: 25,
        })
    }
    change6 = () => {
        this.setState({
            number: 6,
            result: 36,
        })
    }
    change7 = () => {
        this.setState({
            number: 7,
            result: 49,
        })
    }
    change8 = () => {
        this.setState({
            number: 8,
            result: 64,
        })
    }
    change9 = () => {
        this.setState({
            number: 9,
            result: 81,
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.change1}>1</button>
                <button onClick={this.change2}>2</button>
                <button onClick={this.change3}>3</button>
                <button onClick={this.change4}>4</button>
                <button onClick={this.change5}>5</button>
                <button onClick={this.change6}>6</button>
                <button onClick={this.change7}>7</button>
                <button onClick={this.change8}>8</button>
                <button onClick={this.change9}>9</button>
                <p>the factorial of {this.state.number.toString()} is: {this.state.result.toString()}</p>
            </div>
        )
    }
}
export default Card
