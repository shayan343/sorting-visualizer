const AlgoDetails = (idx) => {
    const ob1 = {
        "title" : "Bubble Sort",
        "description" : `Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
        compares adjacent elements and swaps them if they are in the wrong order.The pass through the list
        is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the
        way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple,
        it is too slow and impractical for most problems`,
        "worstCase" : "O(n2)",
        "avgCase" : "O(n2)",
        "bestCase" : "O(n)",
        "space" : "O(n2)"
    };
    const ob2 = {
        "title" : "Merge Sort",
        "description" : `Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:

        Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted)
        Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.`,
        "worstCase" : "O(nlogn)",
        "avgCase" : "O(nlogn)",
        "bestCase" : "O(nlogn)",
        "space" : "O(n)"
    };
    const ob3 = {
        "title" : "Insertion Sort",
        "description": `Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array,
         finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable
          sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice
           compared to other quadratic sorting algorithms like bubble sort and selection sort.`,
        "worstCase" : "O(n2)",
        "avgCase" : "O(n2)",
        "bestCase" : "O(n)",
        "space" : "O(1)"
    };

    switch (idx) {
        case 1: return ob1; 
        case 2: return ob2;
        case 3: return ob3;
        default: break;
    }
    
}

export default AlgoDetails;
