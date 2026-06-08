(function () {
  var STORAGE_KEY = 'carnation-landing-popup-dismissed-until';
  var popup = document.getElementById('landing-popup');

  if (!popup) return;

  function isDismissed() {
    var until = localStorage.getItem(STORAGE_KEY);
    if (!until) return false;
    return Date.now() < Number(until);
  }

  function openPopup() {
    popup.hidden = false;
    document.body.classList.add('landing-popup-open');
  }

  function closePopup() {
    popup.hidden = true;
    document.body.classList.remove('landing-popup-open');
  }

  function dismissForDay() {
    localStorage.setItem(STORAGE_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    closePopup();
  }

  popup.addEventListener('click', function (event) {
    var action = event.target.closest('[data-action]');
    if (!action) return;

    if (action.dataset.action === 'dismiss-day') {
      dismissForDay();
      return;
    }

    if (action.dataset.action === 'close') {
      closePopup();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !popup.hidden) {
      closePopup();
    }
  });

  if (!isDismissed()) {
    openPopup();
  }
})();
