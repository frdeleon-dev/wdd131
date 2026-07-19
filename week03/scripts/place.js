document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// Static var
const temperature = 22; 
const windSpeed = 10;


const calculateWindChill = (temp, speed) =>(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);


window.addEventListener("DOMContentLoaded", () => {
    let windChillDisplay = "N/A"; 

    
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillDisplay = `${calculateWindChill(temperature, windSpeed)} °C`;
    }

    
    const windChillElement = document.getElementById("wind-chill");
    if (windChillElement) {
        windChillElement.textContent = windChillDisplay;
    }


});