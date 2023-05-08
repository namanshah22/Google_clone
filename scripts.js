document.querySelector('.search-bar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.querySelector('form').submit();
    }
  });
  