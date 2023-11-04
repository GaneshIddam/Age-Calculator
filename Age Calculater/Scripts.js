
let Startdate = document.getElementById("StartDate");
Startdate.max = new Date().toISOString().split("T")[0];
let Enddate = document.getElementById("EndDate")

let Results = document.getElementById('result')


function CalculateAge(){
    let birthDate = new Date(Startdate.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();

    let endDate = new Date(Enddate.value);

    let d2 = endDate.getDate();
    let m2 = endDate.getMonth() + 1;
    let y2 = endDate.getFullYear();


    let y3, m3, d3;

    y3 = y2 - y1;

    if( m2>=m1 ){
        m3 = m2-m1;
    }else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if (d2 >= d1){
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
    }


    if (Startdate.value == "" || Enddate.value == ""){
        Results.innerHTML = "*Please select Date";
    }else{
        Results.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
    }

    // console.log( y3, m3, d3);
}
// function Results(){
//     if(birthDate.value == "" || endDate.value == ""){
//         return "please select date";
//     }else {
//         return `you are ${y3} years, ${m3} months and ${d3} days old`;
//     }
// }


function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}