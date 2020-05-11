/*
Iterere over kolonne navnene og antallet af smittede i Italien
*/

let table;
let count=5;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,100,200);
  Italy = table.findRow('Italy','Country/Region');
  Brazil = table.findRow('Brazil','Country/Region');
  Germany = table.findRow('Germany','Country/Region');
  Thailand = table.findRow('Thailand','Country/Region');
  head = table.columns;
  textSize(30);
  fill(200);
  frameRate(100);
}

function draw(){
  background(0,100,200);

  antalNyeSmittede = Italy.arr[count];//-Italy.arr[count-1];

  for (i=0;i<antalNyeSmittede;i++){
    ellipse(random(0,windowWidth/2),random(0,windowHeight/2),4,4);
    //fill(100,100,0);
  }
  antalNyeSmittedeBr = Brazil.arr[count];
  for (j=0;j<antalNyeSmittedeBr;j++) {
    ellipse(random(windowWidth/2,windowWidth),random(0,windowHeight/2),4,4);
  }
  antalNyeSmittedeGe = Germany.arr[count];
  for (k=0;k<antalNyeSmittedeGe;k++) {
    ellipse(random(0,windowWidth/2),random(windowHeight/2,windowHeight),4,4);
  }
  antalNyeSmittedeTh = Thailand.arr[count];
  for (l=0;l<antalNyeSmittedeTh;l++) {
    ellipse(random(windowWidth/2,windowWidth),random(windowHeight/2,windowHeight),4,4);
  }

  text(head[count],windowWidth/2,windowHeight/2);
  text('Italy',windowWidth/4,windowHeight/4);
  text('Brazil',3*windowWidth/4,windowHeight/4);
  text('Germany',windowWidth/4,3*windowHeight/4);
  text('Thailand',3*windowWidth/4,3*windowHeight/4);


  count +=1;
   if (count>table.getColumnCount()-1){
    count = 5;
  }
}
