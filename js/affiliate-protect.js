// Affiliate Link Protection - Prevents browser extensions from detecting/replacing links
(function() {
  // Base64 encoded parts of Amazon URL (split to avoid detection)
  var part1 = atob('aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9kcC8=');  // https://www.amazon.com/dp/
  var tag = 'plasticfree20-20';
  
  // Function to handle affiliate link clicks
  window.handleAffiliateClick = function(e) {
    e.preventDefault();
    var link = e.currentTarget;
    var asin = link.getAttribute('data-asin');
    var url = part1 + asin + '?tag=' + tag + '&afsrc=1';
    window.open(url, '_blank', 'noopener,noreferrer');
    return false;
  };
  
  // Initialize all affiliate links when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[data-asin]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', handleAffiliateClick);
      // Remove any visible href to prevent extension scanning
      links[i].setAttribute('href', 'javascript:void(0)');
    }
  });
})();
