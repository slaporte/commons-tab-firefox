var data = require("self").data;
var { get, set } = require("sdk/preferences/service");
var { when: unload } = require("sdk/system/unload");

var oldValue = get("browser.newtab.url");

var override = data.url("src/override/override.html");
set("browser.newtab.url", override);

if (window.gInitialPages.indexOf(override) == -1) {
      window.gInitialPages.push(override);
}

unload(function() {
  set("browser.urlbar.autoFill", oldValue);
});
