import React, { Component } from 'react'

class Home extends Component {
    state = {
        arr: [1,2,3,4,5,6,7,8,9],
        arrS: [],
    }
    
    // let [arrSplice,setArrSplice] = useState(arr.slice(0, 3));
    handleClick = () => {
        const { arr, arrS } = this.state;
        this.setState({
            arr,
            arrS: arr.splice(0,2)
        },
        console.log(arr,'when clicked'),
        console.log(arrS,'when clicked')
        )

        // const arr = this.state;
        // setArrSplice = arr.slice(0, 6);
        // console.log(arrSplice);
        // setArr([1,2,3,4,5]);
    }
    render() {
        return (
            <div>
                { this.state.arrS.map((val, index) => {
                    return (
                        <div key={index}>{val}</div>
                    )
                }) }
                <button onClick={this.handleClick}>Splice</button>
            </div>
        )
    }
}

export default Home;
