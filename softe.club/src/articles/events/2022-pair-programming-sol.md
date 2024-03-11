# Pair Programming 2022 Solutions

## Easy Solutions

### Solution with an ArrayList

```java
class RecentCounter {

private int counter;
private ArrayList<Integer> requests = new ArrayList<Integer>();

public RecentCounter() {
    this.counter = 0;
}

public int ping(int t) {
    requests.add(t);
    int diff=0;

    for(int i = requests.size()-1; i>=0; i--){
        if(requests.get(i) <= t && requests.get(i) >=(t-3000))
        {
            diff++;
        } else {
            break;
        }
    }
    return diff;
}
}
```

### Solution with a LinkedList

```java
class RecentCounter {

private LinkedList<Integer> requests;

public RecentCounter() {
    this.requests = new LinkedList<Integer>();
}

public int ping(int t) {
    requests.add(t);

    while(requests.getFirst() < t-3000){
        requests.removeFirst();
    }

    return requests.size();
}
}

```

Thanks to Catherine DeMario of SWiCS for providing the ArrayList solution!

## Medium Solution

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	let m = grid.length;
	let n = grid[0].length;

	let solutionGrid = [];

	// initialize solution grid
	for (let i = 0; i < m; i++) {
		solutionGrid.push([]);
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			solutionGrid[i].push(0);
		}
	}

	// first row of solution gets input first row + left
	solutionGrid[0][0] = grid[0][0];
	for (let j = 1; j < n; j++) {
		solutionGrid[0][j] = solutionGrid[0][j - 1] + grid[0][j];
	}

	// first column of solution gets input first column + top
	for (let i = 1; i < m; i++) {
		solutionGrid[i][0] = solutionGrid[i - 1][0] + grid[i][0];
	}

	// starting from index [1][1], compare top and left, take min
	// and assign min + value @ grid at that point
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			solutionGrid[i][j] =
				grid[i][j] + Math.min(solutionGrid[i][j - 1], solutionGrid[i - 1][j]);
		}
	}

	return solutionGrid[m - 1][n - 1];
};
```
