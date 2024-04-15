function skipToMainContent() {
  var mainContent = document.getElementById("accordion");
  if (mainContent) {
    mainContent.setAttribute("tabindex", "-1");
    mainContent.focus();
  }
}


document.addEventListener('DOMContentLoaded', function () {

  var scrollableArea = document.getElementById('scrollableArea');
  var showAllLink = document.getElementById('showAllLink');
  var isShowAll = false;

  function toggleShowAll() {
    if (isShowAll) {
      // Show Less
      scrollableArea.style.maxHeight = '300px'; // Set your desired max height
      scrollableArea.style.overflowY = 'auto';
      showAllLink.textContent = 'Alle anzeigen';
    } else {
      // Show All
      scrollableArea.style.maxHeight = 'none';
      scrollableArea.style.overflowY = 'visible';
      showAllLink.textContent = 'Weniger anzeigen';
    }
    isShowAll = !isShowAll;
  }

  showAllLink.addEventListener('click', function (event) {
    event.preventDefault();
    toggleShowAll();
  });
});



$(document).ready(function () {
  $('#openCloseAllButton').on('click', function () {
    var isOpening = $(this).text() === 'Alles aufklappen';

    $('#accordion .collapse').collapse(isOpening ? 'show' : 'hide');

    $(this).text(isOpening ? 'Alles einklappen' : 'Alles aufklappen');
  });
});