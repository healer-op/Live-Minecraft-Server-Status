async function healer() {
    let ip = document.getElementById("server_ip").value;
    let data = await (await fetch(`https://api.mcstatus.io/v2/status/java/${ip}`)).json();
    document.getElementById("server_img").src=`https://api.mcstatus.io/v2/icon/${ip}`
    odometer.innerHTML = data.players.online;
    document.getElementById("odOnline").innerHTML=data.players.online
}


setInterval(async function () {
    let ip = document.getElementById("server_ip").value;
    let data = await (await fetch(`https://api.mcstatus.io/v2/status/java/${ip}`)).json();
    let online = data.players.online;
    let odOnline = parseInt(document.getElementById("odOnline").innerHTML)
    let diff = online - odOnline
    // console.log(online,odOnline)

    if(online > odOnline){
        // console.log("healer")
        document.getElementById("diff").innerHTML = "Gained "+ diff + " players"
        document.getElementById("diff").style.color="green"
        document.getElementById("odometer").style.color="green"
        odometer.innerHTML = data.players.online;
        document.getElementById("odOnline").innerHTML=data.players.online
    }if(online < odOnline){
        // console.log("healer1")
        document.getElementById("diff").innerHTML = "Lossed "+ diff + " players"
        document.getElementById("diff").style.color="red"
        document.getElementById("odometer").style.color="red"
        odometer.innerHTML = data.players.online;
        document.getElementById("odOnline").innerHTML=data.players.online
    }
    
    console.log(`players online : ${data.players.online}`)
}, 10000)

healer();