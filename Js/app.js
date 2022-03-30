const battaryLevel = document.querySelector('.battary-level')

navigator.getBattery().then(function(battary){
    const level = battary.level
    const status = level * 100 + "%"
    battaryLevel.style.width = status
    battaryLevel.innerHTML = status
})