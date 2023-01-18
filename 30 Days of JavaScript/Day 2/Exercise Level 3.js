// Exercise Level 3

/*
Question 1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
Count the number of word __love__ in this sentence.
*/

// Answer

console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match('love')); 


/*
Question 2: Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a 
sentence with because because because is a conjunction'__
*/

// Answer

console.log(sentence.match("because"));


/*
Question 3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re 
        rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her
        %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt
        of &love& of tea&ching'
    ```
*/

// Answer

const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentences.replace(/[^\w\s]/gi, ''));


/*
Question 4: Calculate the total annual income of the person by extracting the numbers from the following text.
 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

// Answer

const salaryPerMonth = 5000, annualBonus = 10000, onlineCoursesPerMonth = 15000;
const annualSalary = salaryPerMonth *12, annualOnineCourses = onlineCoursesPerMonth * 12;
const totalIncome = annualSalary + annualOnineCourses + annualBonus;
console.log("The Total Annual Income is " + totalIncome);
