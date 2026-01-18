

// console.log('Hello Wordl!');
// console.log('Hello Wordl!');
// console.log('Hello Wordl!');
// console.log('Hello Wordl!');
// console.log('Hello Wordl!');


for(let i=5; i>=1; i--){ //5 4 3 2 1
    console.log(i);
    console.log('Hello world!');
}

let marks = [80, 83, 91, 57, 90, 70, 98, 54, 10, 100];

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks[5]);
// console.log(marks[6]);
// console.log(marks[7]);
// console.log(marks[8]);
// console.log(marks[9]);

for(let i=0; i<10; i++){ //0, 1 ,2, 3, 4, 5, 6, 7, 8, 9
    // console.log(marks[i]);

    if(marks[i]<0 || marks[i]>100){
        console.log('Invalid Marks');
    }
    
    else if(marks[i]>=80){
        console.log(marks[i]+'=The grade is A+');
    }

    else if(marks[i]>=70){
        console.log(marks[i]+'=The grade is A');
    }

    else if(marks[i]>=60){
        console.log(marks[i]+'=The grade is A-');
    }

    else if(marks[i]>=50){
        console.log(marks[i]+'=The grade is B');
    }

    else if(marks[i]>=40){
        console.log(marks[i]+'=The grade is C');
    }

    else if(marks[i]>=33){
        console.log(marks[i]+'=The grade is D');
    }

    else{
        console.log(marks[i]+'=The grade is F');
    }
}

