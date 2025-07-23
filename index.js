function updateclock(){

    const now = new Date();
    let hours=now.getHours();
    let meridian= hours >=12 ? 'PM':'AM';
    hours= hours % 12||12;
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    const timestring=`${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent= timestring ;
}
updateclock();
setInterval(updateclock,1000);