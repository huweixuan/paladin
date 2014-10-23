chrome.extension.onRequest.addListener( 
  function(request, sender, sendResponse) {
  	var row = $('.ewr-nglr').eq(Number(request.row) - 1);
  	var offset = row.offset();
  	if(!offset) return;
    row.css({
    	'position': 'fixed',
    	'top': offset.top
    });  
  }
); 