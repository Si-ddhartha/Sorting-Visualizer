import React from "react";
import './Visualizer.css';

import { selectionSort } from '../Algorithms/selectionSort'
import { bubbleSort } from '../Algorithms/bubbleSort'

export default function Visualizer() {
    // Storing our array in a state
    const [array, setArray] = React.useState([])

    const [selectedAlgo, setSelectedAlgo] = React.useState('selection sort')

    React.useEffect(function(){
        resetArray();
        // eslint-disable-next-line
    }, [])

    // Function to reset the array
    function resetArray(){
        const tempArray = []
        for(let i = 0; i < 100; i++){
            tempArray.push(randomInt(20, 500));
            if (document.getElementsByClassName('bar')[i] != null) {
				document.getElementsByClassName('bar')[i].style.backgroundColor = 'gray';
			}
        }

        setArray(tempArray);
    }

    // Function to generate random integers
    function randomInt(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    function sort(selectedAlgo){
        switch(selectedAlgo){
            case 'selection sort':
                selectionSort(array);
                break;

            case 'bubble sort':
                bubbleSort(array);
                break;

            default:
                selectionSort(array);
                break;
        }
    }

    // Function to test the algorithm
    function testAlgo(){
        for(let i = 0; i < 100; i++){
            const a = [];
            for(let j = 0; j < randomInt(1, 1000); j++){
                a.push(randomInt(-1000, 1000));
            }

            const jsSorted = a.sort((a,b) => a-b);
            const bubbleSorted = bubbleSort(a);

            console.log(arrayEquals(jsSorted, bubbleSorted));
        }
    }

    function arrayEquals(a, b) {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
    }

    // Creating a div/bar with the numbers in our array
    const bars = array.map((value, idx) => {
        return <div key={idx}
                    className="bar" 
                    style={{height: `${value}px`}}>  
                    </div>
    })

    return(
        <div className="container">
            <div className="bars">
                {bars}
            </div>

            <div className="sidebar">
                <header className="header">
                    Sorting Visualizer
                </header>

                <div className="algo-box">
                    <h3>Select Algorithm</h3>
                    <select className="select-option" 
                            name="select" 
                            onChange={e => setSelectedAlgo(e.target.value)}>
                        <option value='selection sort'>Selection Sort</option>
                        <option value='bubble sort'>Bubble Sort</option>
                        <option value='merge sort' disabled>Merge Sort</option>
                    </select>
                </div>

                <button className="start-button" 
                        onClick={() => sort(selectedAlgo)}>
                    Start
                </button>
                
                <button className="reset-button" 
                        onClick={resetArray}>
                    Reset array
                </button>

                {/* <button onClick={testAlgo}>Test</button> */}
            </div>
        </div>
    )
}