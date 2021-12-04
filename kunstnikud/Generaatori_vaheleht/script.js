

function GenereeriPilt(){

    //Lihtne funktsioon, mis genereerib piltide kaustast suvalise pildi pathi ja seob
    // selle vastava HTML elemendiga.
   fetch("./a.json")
        //Võtame JSON failist Objekti. JSON-i fail on genereeritud pythoni koodiga, mis on kaustas olemas.
        .then(response=>{ return response.json();})
        .then(data => {
            //Valime suvalise pildi.
            var item = data.paths[Math.floor(Math.random() * data.paths.length)];
            //Muudame pildi allikat(src path'ina)
            document.getElementById("genereeritudpilt").src=item;    
           
         

           
            //Lõikan pildi nimest autori ja pildi nime välja.
            let autor = item.split("-")[1].replaceAll("_"," ");
            let pealkiri = item.split("-")[2].replaceAll("_"," ");
            //Seame pildi nime järgi autori ja pealkirja.
            document.getElementById("autor").textContent = autor;
            document.getElementById("pealkiri").textContent = pealkiri.substring(0,pealkiri.length-4);

                })

 
    
    
    




}
