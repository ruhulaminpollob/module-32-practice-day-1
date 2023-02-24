/*
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
*/


const obj={name:'Hansom Pollob', job:'web dev', salary:50000};

const {salary}=obj;
console.log(salary);

//
const {job:work}=obj;
console.log(work);
