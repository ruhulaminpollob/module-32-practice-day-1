/*
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/
const gadgets=[
    {name:'phone', price:10000},
    {name:'router', price:5000},
    {name:'laptop', price:180000},
    {name:'watch', price:1000},
];

const which5k=gadgets.find(x=>x.price===5000);
console.log(which5k);
/*
৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
*/

