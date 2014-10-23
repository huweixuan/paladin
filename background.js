chrome.extension.onRequest.addListener( 
  function(request, sender, sendResponse) {
  	var row = $('.ewr-nglr').eq(Number(request.row) - 1);
  	var offset = row.offset();
  	if(!offset) return;
  	var content = $('#m_excelWebRenderer_ewaCtl_sheetContentDiv');
  	var lockrow = row.clone();
  	content.prepend(lockrow);
    lockrow.css({
    	'position': 'fixed',
    	'top': offset.top,
    	'background-color': 'pink',
    	'z-index': 999
    });
    
    content.on('scroll', function () {
    	lockrow.css('left', 37 - content.scrollLeft());
    });
  }
); 