import axios from "axios";
const axios = require('axios');

// 定义要爬取的网页URL
const url = 'https://rate.bot.com.tw/xrt/flcsv/0/day';

// 使用axios发送GET请求
axios.get(url)
    .then(response => {
        // 打印响应的HTML内容
        console.log(response.data);
    })
    .catch(error => {
        // 打印错误信息
        console.error('Error fetching data:', error);
    });


// // Import axios
// import axios from 'axios';

// // Make a GET request using axios
// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });