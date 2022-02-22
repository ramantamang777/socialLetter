
module.exports = {
    date,
    day
};
function date() {
     let today = new Date();
     let month = today.getMonth();
     let year = today.getDay();

     let day = today + " " + month + " " + year;

     return day;
};

function day() {
    let today = new Date();

    let month = today.getMonth();
    let day = today.getDay();
    let year = today.getFullYear();
    return day+"/"+ month +"/" +year; 
}