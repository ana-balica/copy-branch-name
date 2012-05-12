var branchSpan = document.getElementsByClassName("commit-ref from")[0];
var branchSpanText = branchSpan.innerHTML;

branchSpan.onclick = function() {
      window.prompt ("Copy to clipboard", branchSpanText);
};
