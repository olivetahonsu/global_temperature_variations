

//Grabbing the buttons 
const btn = document.getElementsByName('but');



var xs=[] //Empty array to store values for the years
var ys=[] //Empty array to store values for the temperature


//Creating an HTML for the chart 
const ctx = document.getElementById('myChart').getContext('2d');

//Creating the chart object with its arguments
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xs,
        datasets: [{
            label: 'Land-Ocean Temperature Index, L-OTI in °C',
            data: ys,
            
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            
            borderColor: 'rgba(255, 99, 132, 1)',
           
            tension: 0.2
        }]
    },

    options:{
        scales:{
            y:{
                ticks:{
                    callback: function(value, index, ticks){
                        return value.toFixed(2) + '°'
                    }
                },
                title:{color: 'blue',
                       display: true,
                       text: 'TEMPERATURE (°C)'}
            },

            x:{
                title:{
                    color: 'blue',
                    display: true,
                    text: 'YEAR (1880 - 2021)'
                }
            }
        },
        elements:{
            point:{
                pointStyle: 'line'
            }
        }
    }
 
});


for(let i = 0; i < btn.length; i++){

btn[i].addEventListener('click', getData);

async function getData(){
   
    const response = await fetch('ZonAnn.Ts+dSST.csv'); //Fetching the temperature data
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    
        switch(btn[i].id) {
            case 'global': //for the global temperature variations
             
                console.log(btn[i].id)
                                 
                xs.length = 0
                ys.length = 0
  
                table.forEach(row =>{
                const columns = row.split(',');
                const year = columns[0];
                xs.push(year);
                const temp = columns[1];
                ys.push(parseFloat(temp) + 14);
                 }); 

                 myChart.update();
                break;
    
            case 'NH': //for the northern hemisphere temperature variations
                console.log(btn[i].id)
                xs.length = 0
                ys.length = 0
                
                table.forEach(row =>{
                    const columns = row.split(',');
                    const year = columns[0];
                    xs.push(year);
                    const temp = columns[2];
                    ys.push(parseFloat(temp) + 14);
                     }); 

                     myChart.update();

                break;
            
            case 'SH': //for the south hemisphere temperature variations
                console.log(btn[i].id)
    
                xs.length = 0
                ys.length = 0
    
                table.forEach(row =>{
                const columns = row.split(',');
                const year = columns[0];
                xs.push(year);
                const temp = columns[3];
                ys.push(parseFloat(temp) + 14);
                 }); 

                 myChart.update();

                break;    
    
            case 'NE': //for the north of equator temperature variations
                console.log(btn[i].id)
                
                xs.length = 0
                ys.length = 0
    
                table.forEach(row =>{
                const columns = row.split(',');
                const year = columns[0];
                xs.push(year);
                const temp = columns[10];
                ys.push(parseFloat(temp) + 14);
                 }); 

                 myChart.update();

                break;    
    
            case 'SE': //for the south of equator temperature variations
                console.log(btn[i].id)
                
                xs.length = 0
                ys.length = 0
    
                table.forEach(row =>{
                const columns = row.split(',');
                const year = columns[0];
                xs.push(year);
                const temp = columns[11];
                ys.push(parseFloat(temp) + 14);
                 }); 
                 myChart.update();

                break;    
            }        
      }

}
















