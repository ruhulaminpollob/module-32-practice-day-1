/*
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/

const numbers=[1,3,4,5,6,7,8,9,11,14,16,17,19];
const oddNumbers=numbers.filter(number=>number%2);
console.log(oddNumbers);