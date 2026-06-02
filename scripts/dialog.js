const saveButton = document.querySelector('.save-button');
const memoryDialog = document.querySelector('#memory-dialog');
const dialogButton = document.querySelector('.dialog__button');

if (saveButton && memoryDialog) {
  saveButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (!memoryDialog.open) {
      try {
        if (typeof memoryDialog.showModal === 'function') {
          memoryDialog.showModal();
        } else {
          memoryDialog.setAttribute('open', '');
        }
      } catch (error) {
        void error;
        memoryDialog.setAttribute('open', '');
      }
    }
  });
}

if (dialogButton && memoryDialog) {
  dialogButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (memoryDialog.open) {
      try {
        if (typeof memoryDialog.close === 'function') {
          memoryDialog.close();
        } else {
          memoryDialog.removeAttribute('open');
        }
      } catch (error) {
        void error;
        memoryDialog.removeAttribute('open');
      }
    }
  });
}
