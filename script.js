//your code here

// JavaScript program to connect n
// ropes with minimum cost

function minCost(arr,n)
{
	// Create a priority queue
		let pq = [];

		// Adding items to the pQueue
		for (let i = 0; i < n; i++) {
			pq.push(arr[i]);
		}
		
		pq.sort(function(a,b){return a-b;});
		
		// Initialize result
		let res = 0;

		// While size of priority queue
		// is more than 1
		while (pq.length > 1) {
			// Extract shortest two ropes from pq
			let first = pq.shift();
			let second = pq.shift();

			// Connect the ropes: update result
			// and insert the new rope to pq
			res += first + second;
			pq.push(first + second);
			pq.sort(function(a,b){return a-b;});
		}

		return res;
}

// Driver program to test above function
let len = [4,2,7,6,9];
let size = len.length;
console.log("Total cost for connecting"
						+ " ropes is " + minCost(len, size));

// This code is contributed by avanitrachhadiya2155


