'use strict';

import './popup.css';

var followers = document.getElementById("followers");
var reactios = document.getElementById("reactios");
var notifications = document.getElementById("notifications");
var trends = document.getElementById("trends");
var refresh_page = document.getElementById("refresh-page");

function setConfig(element, name) {
    chrome.storage.local.get([name], (result) => {
      element.checked = result[name];
    });
  
    element.addEventListener("change", (e) => {
      chrome.storage.local.set({[name]: element.checked });
      refresh_page.classList.remove("hidden");
    });
  }

setConfig(followers, "followers");
setConfig(reactios, "reactios");
setConfig(notifications, "notifications");
setConfig(trends, "trends");
