const age = prompt("How old are you?");

if(age >= 20 && age < 25) {
    console.log("술 마셔도 된다고 막 마시면 훅간다고 베이비..");
} else if(age >= 25) {
    console.log("오우 술 좀 마실 수 있겠는데?");
}
else {
    console.log("야레야레.. 어린이는 술 마시면 안된다구");
}