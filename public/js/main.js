let count1 = setInterval(updated1);
        let upto1 = 0;
        function updated1() {
            let count11 = document.getElementById("counterOne");
            count11.innerHTML = ++upto1;
            if (upto1 === 1500) {
                clearInterval(count1);
            }
        }


let count2 = setInterval(updated2);
        let upto2 = 0;
        function updated2() {
            let count21 = document.getElementById("counterTwo");
            count21.innerHTML = ++upto2;
            if (upto2 === 5000) {
                clearInterval(count2);
            }
        }


let count3 = setInterval(updated3);
        let upto3 = 0;
        function updated3() {
            let count31 = document.getElementById("counterThree");
            count31.innerHTML = ++upto3;
            if (upto2 === 700) {
                clearInterval(count3);
            }
        }



