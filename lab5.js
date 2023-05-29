//2

function isPalindrom (str){
    var string =  str.split('').reverse().join('');

    if(string == str){
        alert("Палиндром");
    }else{
        alert("Не палиндром");
    }
}

//3

function array(n){
    var arr = [];
    for(i=0; i<n; i++) {
        arr[i] = Math.round(Math.random() * (30 - (-10)) + (-10));
        if (arr[i]<0){
            arr[i] = arr[i]*arr[i];
            }
    }
    return arr
}

//4

class User{
    constructor(name){
        this.name = name;
    }

    name(){
        alert(this.name);
    }
}

//6

class Reverse {
    reverseName(name) {
        return name.split('').reverse().join('');
    }
}