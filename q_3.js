<script >

    function findLongestConseqSubseq(arr, n) {
        let ans = 0,
            count = 0;
       
        arr.sort(function(a, b) { return a - b; })
        var v = [];
        v.push(arr[0]);
        //insert repeated elements only once in the vector
        for (let i = 1; i < n; i++) {
            if (arr[i] != arr[i - 1])
                v.push(arr[i]);
        }
       
        for (let i = 0; i < v.length; i++) {
           
            if (i > 0 && v[i] == v[i - 1] + 1)
                count++;
            // reset count
            else
                count = 1;
            // update  max
            ans = Math.max(ans, count);
        }
        return ans;
    }

let arr = [1, 2, 2, 3];
let n = arr.length;
document.write(
    "Length of the Longest contiguous subsequence is " +
    findLongestConseqSubseq(arr, n)
);


</script> 