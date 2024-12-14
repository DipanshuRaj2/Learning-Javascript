    /*// small project1
    let continue1;
        const deci = function(e){
            console.log('hi', Date.now());
         }

       document.getElementById('start').addEventListener('click', function(e){
        if(!continue1){
            continue1 = setInterval(deci, 1000);
        }
       });

       document.getElementById('stop').addEventListener('click', function(e){
        clearTimeout(continue1);
        console.log('stopped');
        continue1 = null;
       })
    */

const insert = document.getElementById('insert');
window.addEventListener('keydown', function(e){
    insert.innerHTML = `
    <div class = 'color'>
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
    </div>
    `
})