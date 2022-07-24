function superbowlWin(objectArray){
    if (objectArray.find(obj => {return obj.result === "W"})){
        return objectArray.find(obj => {return obj.result === "W"}).year
}
}
