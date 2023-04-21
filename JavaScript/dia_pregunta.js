var countDDate = new Date(),
            endday = new Date(), days =24;
            countDDate.setDate(countDDate.getDate() - (countDDate.getDay() + 2)%7);
            endday.setDate(countDDate.getDate() + days);
            endday.getTime();
            countDiv = document.getElementById('countdown');
        var x = setInterval(function(){
            var now = new Date().getTime();
            var daterest = endday - now;
            var days = Math.floor(daterest / (1000 * 60 * 60 * 24));
            
            countDiv.innerHTML = "falan 23 dias";
        });