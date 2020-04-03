let rellax = new Rellax('.rellax');

document.querySelector('#form').addEventListener('onclick',data)

function data(e){
    
    const get = document.querySelector('#get').value
    
    capitalize = function(str1){
        return str1.charAt(0).toUpperCase() + str1.slice(1);
      }
          
    
    fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${capitalize(get)}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "80e7fc15c5mshfdfdc7106275dbbp1b0d97jsn1035d1e9d040"
        }
    })
    .then(response => response.json())
    .then(res=>{

        console.log(res)
         
        const {data} = res
        let output = ""
        data.covid19Stats.forEach(dat => {

            output +=`  
            <div class="card text-center">
            <div class="card-header">
              ${dat.country}
            </div>
            <div class="card-body">
              <h5 class="card-title"> ${dat.province}</h5>
              <a href="#" class="info1 btn btn-primary">CASES : ${dat.confirmed}</a>
              <br><br>
              <a href="#" class="info2 btn btn-danger">DEATHS : ${dat.deaths}</a>
              <br><br>
              <a href="#" class="info3 btn btn-success">RECOVERED : ${dat.deaths}</a>
            </div>
            <div class="card-footer text-muted">
              ${dat.lastUpdate}
            </div>
          </div>
                <br>
            `
            
        });

        document.querySelector(".output").innerHTML= output
    })
    .catch(err => {
        console.log(err);
    });

    e.preventDefault()
}

