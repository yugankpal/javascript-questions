<script>
    function union(a,n,b,m) {
        var s = new set();
        var arr = [];
        for(let i = 0; i < n; i++)
            s.add(a[i]);
        
        for(let i = 0; i < m; i++)
            s.add(b[i]);
        
        

        document.write("union of both array");
        
        for(let itr of s)
            arr.push(itr);
        
        arr.sort(function(a,b){return (a-b) ; })
        for(let i =0; i < arr.length; i++)
            document.write(arr[i] + " ");
        
    }

    let a = [5,3];
    let b = [1,2,3,4,5];
    union(a,2,b,5);
</script>