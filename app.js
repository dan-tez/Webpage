document.addEventListener("DOMContentLoaded",() =>{
    function counter(id,start,end,duration)
     {
       let obj = document.getElementById(id),
       current = start,
       range = end - start,
       increment = end > start ? 1 : -1,
       step = Math.abs(Math.floor(duration/range)),
       timer = setInterval(() =>
     {
        current += increment;
        obj.textContent = current;
        if (current == end)
        {
            clearInterval(timer)
        }
     },stop);

     }
    counter("count1",0,200,700); 
    counter("count2",0,80,700);
    counter("count3",0,500,700);

})