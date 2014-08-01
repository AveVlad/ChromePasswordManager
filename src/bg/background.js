chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        console.log(chrome.tabs);
        chrome.tabs.executeScript(null, {code:"console.log('bg test');"});
    }
});