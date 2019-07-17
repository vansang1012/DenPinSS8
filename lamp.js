let FlashLamp=function () {
    this.status=false;
    this.setBattery=function (battery) {
        this.battery=battery;
    };
    this.getBetteryInfo=function () {
        return this.battery.getEnergy();
    };
    this.light=function () {
        if(this.status){
            alert("Lighting");
        }else{
            alert("Not Lighting");
        }
    };
    this.turnOn=function () {
        this.status=true;
    };
    this.turnOff=function () {
        this.status=false;
    }
    
}