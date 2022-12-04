export const selectionSort = (arr) => {
    const arrayBars = document.getElementsByClassName('bar');

    for(let i = 0; i < arr.length; i++){
        let minidx = i;

        setTimeout(() => {
            arrayBars[minidx].style.backgroundColor = '#ED2939';
        }, 100 * i)

        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minidx]){
                setTimeout(() => {
                    arrayBars[minidx].style.backgroundColor = 'gray';
                }, 100 * (i+2))

                minidx = j;
            }
            setTimeout(() => {
                arrayBars[j].style.backgroundColor = 'gray';
            }, 100 * (i+2))
        }

        [arr[i], arr[minidx]] = [arr[minidx], arr[i]];
        setTimeout(() => {
            [arrayBars[i].style.height, arrayBars[minidx].style.height] = [arrayBars[minidx].style.height, arrayBars[i].style.height];
            arrayBars[i].style.backgroundColor = '#00AB66'; // coloring sorted element

        }, 100 * (i+3))
    }

    return arr;
}