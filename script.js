var backround = document.querySelector(".maincontainer")

function displaygameinfo() {
    fetch('https://zelda.fanapis.com/api/games')
        .then(resp => resp.json())
        .then(data => {
            var datos = '';
            if(data){
                for(var d in data){
                    datos += d +  data[d] +'\n';
                }
            }

            document.querySelector(".displayinfo").innerHTML=datos;
        });
        displaygameinfo();

}

