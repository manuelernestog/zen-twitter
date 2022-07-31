'use strict';

var tag = document.createElement("style");

chrome.storage.local.get("followers", (result) => {
  if (result.followers) {
    var text = document.createTextNode(".r-nsbfu8 > div:nth-child(4), .css-1dbjc4n > .r-1ifxtd0 > div:nth-child(5){ display: none;}");
    tag.appendChild(text);
  }
});

chrome.storage.local.get("reactios", (result) => {
  if (result.reactios) {
    var text = document.createTextNode(".r-1k6nrdp {display: none;}");
    tag.appendChild(text);
  }
});

chrome.storage.local.get("notifications", (result) => {
    if (result.notifications) {
      var text = document.createTextNode(".r-i61hcz, .r-1qcuhsn, .r-1m4drjs {display: none;}");
      tag.appendChild(text);
    }
});

chrome.storage.local.get("trends", (result) => {
    if (result.trends) {
      var text = document.createTextNode(".r-vacyoi > div:nth-child(3) {display: none;}");
      tag.appendChild(text);
    }
});

document.body.appendChild(tag);
