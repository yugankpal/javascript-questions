<script >


    function findtriplet(A, arr_size, sum) {
        let l, r;

        // first element as A[i] 
        for (let i = 0; i < arr_size - 2; i++) {

            // second element as A[j] 
            for (let j = i + 1; j < arr_size - 1; j++) {

                //for the third number 
                for (let k = j + 1; k < arr_size; k++) {
                    if (A[i] + A[j] + A[k] == sum) {
                        document.write("Triplet is " + A[i] +
                            ", " + A[j] + ", " + A[k]);
                        return true;
                    }
                }
            }
        }
        return false;
    }



let A = [1, 4, 45, 6, 10, 8];
let sum = 13;
let arr_size = A.length;
findtriplet(A, arr_size, sum);

</script>