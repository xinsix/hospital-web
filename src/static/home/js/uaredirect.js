function uaredirect(m,w) {
    try {
		if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
       
			location.replace(m+location.pathname);
		}
    } catch(d) {}
}