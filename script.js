let myChart = document.getElementById('myChart').getContext('2d');

//Chart.defaults.color = 18;
//Chart.defaults.FontSize:18px;
//Chart.defaults.global.defaultFontSize:'#777';
Chart.defaults.font.size = '20';
Chart.defaults.font.family = 'Verdana';
Chart.defaults.color = 'white';



let massPopChart = new Chart(myChart, {
type: 'bar', 
  data:{
    labels:['Total Fights', 'Wins', 'Losses', 'No Contest', 'KO Wins', 'KO Losses'],
    datasets:[{
      label:'Mike Tyson Career Stats',
      data:[
     58, 
       50,
       6,
       2 ,
   44,
       5
      ],
      //backgroundColor: 'green',
    backgroundColor:[
     pattern.draw('dash', '#2a303b'), 
          pattern.draw('square', '#609f95'),
    pattern.draw('circle',  '#5d73a2'),
    pattern.draw('diamond', '#592509'),
    pattern.draw('zigzag-horizontal', '#aa9c0b',),
       pattern.draw('dash',       '#107d28'), 
      
      

     
    ],
      borderWidth:2,
      borderColor:'black',
      hoverBorderWidth:3,
      hoverBorderColor:'#3bc440'
    }]

  },
  options:{},
});



const toggleMenuClicked = () => {
  const body = document.body;
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  body.classList.toggle("open");

  if (body.classList.contains("open")) {
    openIcon.style.display = "none";
    closeIcon.style.display = "flex";
  } else {
    openIcon.style.display = "flex";
    closeIcon.style.display = "none";
  }
};
