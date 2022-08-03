'use strict';

import './popup.css';

var followers = document.getElementById("followers");
var reactios = document.getElementById("reactios");
var notifications = document.getElementById("notifications");
var trends = document.getElementById("trends");
var refresh_page = document.getElementById("refresh-page");
var dm_box = document.getElementById("dm-box");

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
setConfig(dm_box, "dm_box");
