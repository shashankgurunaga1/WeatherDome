//defining function called cityname
//accessing the api 
//checking the response code everytime 
//if the response code is 400 that means the city is not entered
//if the response code is 404 that means the city is not found


function cityname(b)
            {
                console.log("inside")
                var cityname=arguments[0]
                let api =`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4d09cd0e0c359927e26a1df8e5a0de90`;
               
                fetch(api).then((data)=>{
                    return data.json();
                })
                .then((response)=>{
                console.log(response);
                var display_string="";
                

                if (response.cod==400){
                    display_string = display_string.concat('<br><div class="container"> <div class="card"><div class="card-body"><b><p class="text-danger">City not entered</p></b> </div></div></div></br>');

                    document.getElementById("temp1").innerHTML=display_string;

                }

                else if (response.cod==404){
                    display_string = display_string.concat('<br><div class="container"> <div class="card"><div class="card-body"><b><p><font color="#FFFF00">City not found </font></p></b> </div></div></div></br>');
                    document.getElementById("temp1").innerHTML=display_string;


                }

                else {
                    console.log(response.name);
                    console.log(response.main.temp);
                    console.log(response.weather[0].description)
                    
                    display_string = display_string.concat('<br><div class="container"> <div class="card"><div class="card-body"><b>City Name:</b> ').concat(response.name).concat('<br/><b>Temp:</b>').concat(response.main.temp).concat('<br/><b>Description:</b>').concat(response.weather[0].description).concat('</div></div>,</div></br>');
                    console.log(display_string);
                    document.getElementById("temp1").innerHTML=display_string;

                }
            }

            )
        }