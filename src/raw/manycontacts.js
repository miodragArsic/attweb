(function() {
	window._EP = "https://www.manycontacts.com";
	window.__bID = "53143c5e80df1a13714d3d9e";
	document.body.appendChild(document.createElement("script")).src = window._EP
			+ "/assets/js/manycontacts.min.js";

}).call(this);

$('div.registration').block(
		{
			message: '	<div class="row mt centered"><img src="/images/coming-soon.png" style width="140" height="140"/><br><h3>Hold your horses!</h3><h4> We&#39;re not quite ready, leave your email and we&#39;ll keep you posted.</h4><form class="form-inline" role="form"><div class="form-group"><input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your email address"></div> <button type="submit" class="btn btn-warning btn-lg">Get notified!</button></form>	',
			css: { 	padding:    '20px',
					margin:     '20px',
					width:      '80%',
					top:        '40%',
					left:       'auto',
					right:      'auto',
					textAlign:  'center',
					color:      '#000',
					border:     '0px solid #aaa',
					backgroundColor:'transparent',
					cursor:     'default'
				}
		});