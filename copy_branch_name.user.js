// Get branch name of the Pull Request
var branchSpan = document.getElementsByClassName("commit-ref")[1].querySelector("span");
var branchName = branchSpan.innerHTML;

// Create a fixed positioned button on the page
var buttonContainer = document.createElement("div");
buttonContainer.innerHTML = `
  <div style="position: fixed; right: 3em; bottom: 3em;">
    <button type="button" class="btn btn-m btn-blue" id="copy-branch-name">
      Copy branch name
    </button>
  </div>
`;
document.body.appendChild(buttonContainer);

// When clicked, copy branch name to clipboard
var copyButton = document.getElementById('copy-branch-name')
copyButton.onclick = function() {
  navigator.clipboard.writeText(branchName);
};
