export const bubbleSort = (arr) => {
    const arrayBars = document.getElementsByClassName('bar');

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            setTimeout(() => {
                arrayBars[j].style.backgroundColor = '#ED2939';
            }, 100 * i)

            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                
                setTimeout(() => {
                    [arrayBars[j].style.height, arrayBars[j+1].style.height] = [arrayBars[j+1].style.height, arrayBars[j].style.height];
                }, 100 * i+2)
            }

            setTimeout(() => {
                arrayBars[j].style.backgroundColor = 'gray';
            }, 100 * i+2)
        }
        setTimeout(() => {
            arrayBars[arr.length - i - 1].style.backgroundColor = '#00AB66'; // coloring sorted element
        }, 100 * i+3)
    }

    return arr;
}