var express = require("express");
var router = express.Router();
let blogList = [
  {
    id: 1,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-02-21",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/1.jpg",
    category: "technology",
  },
  {
    id: 2,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-02-21",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/1.jpg",
    category: "educations",
  },
  {
    id: 3,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-02-21",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/1.jpg",
    category: "educations",
  },
  {
    id: 4,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-02-21",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/1.jpg",
    category: "educations",
  },
  {
    id: 5,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-10-25",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/1.jpg",
    category: "educations",
  },
  {
    id: 6,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/1.jpg",
    category: "educations",
  },
  {
    id: 7,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/1.jpg",
    category: "educations",
  },
  {
    id: 8,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/2.jpg",
    category: "technology",
  },
  {
    id: 9,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/2.jpg",
    category: "sport",
  },
  {
    id: 10,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/2.jpg",
    category: "educations",
  },
  {
    id: 11,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/2.jpg",
    category: "sport",
  },
  {
    id: 11,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/2.jpg",
    category: "educations",
  },
  {
    id: 12,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/2.jpg",
    category: "educations",
  },
  {
    id: 13,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/3.jpg",
    category: "sport",
  },
  {
    id: 14,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/3.jpg",
    category: "educations",
  },
  {
    id: 15,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/3.jpg",
    category: "educations",
  },
  {
    id: 16,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/3.jpg",
    category: "educations",
  },
  {
    id: 17,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/3.jpg",
    category: "hoby",
  },
  {
    id: 18,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-03-11",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/5.jpg",
    category: "technology",
  },
  {
    id: 19,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-10-25",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/4.jpg",
    category: "educations",
  },
  {
    id: 20,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-10-25",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/5.jpg",
    category: "educations",
  },
  {
    id: 21,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-10-25",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/5.jpg",
    category: "educations",
  },
  {
    id: 2,
    title: "asssw",
    content:
      "lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
    create_time: "2022-10-25",
    author: "uuk",
    thumbnail : "http://localhost:8080/images/5.jpg",
    category: "hoby",
  },
];

router.get("/", (req, res, next) => {
  const category = req.query.category;
  console.log(category);
 
  const blogData = blogList.filter((blog) => blog.category === category);
  if (category === undefined) {
    return res.status(400).json(blogList);
  }else if(blogData.length === 0){
    return res.status(400).json('category tidak di temukan');
  }else{
    return res.json(blogData);
  }
 
});

module.exports = router;
