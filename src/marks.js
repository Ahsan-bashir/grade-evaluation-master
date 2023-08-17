// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math, english, science, social, language) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (math <= 0 && english <= 0 && science <= 0 && social <= 0 && language <= 0)
                reject('Null values for marks')
            let totalMarks = math + english + science + social + language
            resolve(totalMarks)
        }, 2000)
    })
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (totalMarks<=0)
                reject('Null values for marks')
            let averageMarks = totalMarks / 5
            resolve(averageMarks)
        }, 2000)
    })
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (averageMarks==undefined) {
                reject('Null values for marks')
            } else {
                if(averageMarks>=90){
                    resolve('A+')
                }else if(averageMarks>=80&& averageMarks<=89){
                    resolve('A')
                }else if(averageMarks>=70 && averageMarks<=79){
                    resolve('B')
                }else if(averageMarks>=60&&averageMarks<=69){
                    resolve('C')
                }else if(averageMarks>=50&& averageMarks<=59){
                    resolve('E')
                }else{
                    resolve('F')
                }
                // switch (averageMarks) {
                //     case 90:
                //         resolve('A')
                //         break;
                //     case 80:
                //         resolve('B')
                //         break;
                //     case 70:
                //         resolve('C')
                //         break;
                //     case 60:
                //         resolve('D')
                //         break;
                //     case 50:
                //         resolve('E')
                //         break;
                //     default:
                //         resolve('F')
                //         break;
                // }

            }


        }, 2000)


    })
}

module.exports = {
    calculateAverageMarks, calculateGrade, calculateTotalMarks
}
