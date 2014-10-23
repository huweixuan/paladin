$(function () {
  $('#confirm').on('click', function () {
    chrome.tabs.getSelected(null, function(tab) { 
		  chrome.tabs.sendRequest(tab.id, {row: $('input').val()}); 
		}); 
  });
});