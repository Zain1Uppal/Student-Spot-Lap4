import React from 'react';
import './style.css';


export const HeaderSearch = (data) => {

    // //define the inputs
    // const searchWrapper = document.querySelector(".search-input");
    // const inputBox = searchWrapper.querySelector("input");
    // const suggBox = searchWrapper.querySelector(".autocom-box");
    // const icon = searchWrapper.querySelector(".icon");
    // let linkTag = searchWrapper.querySelector("a");
    // let webLink;

    // //fetch the API
    // fetch("https://git-clone-blog.herokuapp.com/pushes")
    // .then(resp => resp.json())
    // .then(data => fillSuggestions(data))
    // .catch(err => console.log(err));

    // //function to get user profiles 
    // const suggestions = data.map(userProfile => {return userProfile.title}) //>>>>.change title to name

    // //if user press any key and release
    // inputBox.onkeyup = (e) => {
    //     let userData = e.target.value; //user entered data
    //     let emptyArray = [];
    //     if (userData) {
    //         emptyArray = suggestions.filter((data) => {
    //             //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
    //             return data.toLowerCase().startsWith(userData.toLowerCase());
    //         });
    //         emptyArray = emptyArray.map((data) => {
    //             //passing return data inside li tag
    //             return data = `<li>${data}</li>`;
    //         });

    //         //show autocomplete box
    //         searchWrapper.classList.add("active"); 
    //         showSuggestions(emptyArray);
    //         let allList = suggBox.querySelectorAll("li");
    //         for (let i = 0; i < allList.length; i++) {
    //             //adding onclick attribute in all li tag
    //             allList[i].setAttribute("onclick", "select(this)");
    //         }

    //         icon.onclick = ()=>{
    //             const result = data.filter(post => {
    //                 return inputBox.value.toLowerCase() === post.title.toLowerCase()
    //             })
    //             sessionStorage.journalPost = JSON.stringify(result[0]);
    //             const path = window.location.pathname;
    //             if (path.endsWith("/index.html")){
    //                 // We're currently on homepage
    //                 window.location.href = "./static/entry.html"
    //             } else {
    //                 // We're currently on entry.html
    //                 location.reload()
    //             }
    //         }

    //     } else {
    //         searchWrapper.classList.remove("active"); //hide autocomplete box
    //     }
    // }

    // function select(element) {
    //     let selectData = element.textContent;
    //     inputBox.value = selectData;
    //     userData = selectData;
    //     searchWrapper.classList.remove("active");
    // }

    // function showSuggestions(list){
    //     let listData;
    //     if(!list.length){
    //         userValue = inputBox.value;
    //         listData = `<li>${userValue}</li>`;
    //     }else{
    //       listData = list.join('');
    //     }
    //     suggBox.innerHTML = listData;
    // }




    return(
        <>
            <div className="wrapper">
                <div className="search-input">
                  <a href="" target="_blank" hidden></a>
                  <input type="text" placeholder="Search a user"></input>
                  <div className="autocom-box"></div>
                  <div className="icon"><i className="fas fa-search"></i></div>
                </div>
            </div>
        </>
    )
}