const saveButton = document.querySelector('.save-button');
const memoryDialog = document.querySelector('#memory-dialog');
const dialogButton = document.querySelector('.dialog__button');

if (saveButton && memoryDialog) {
  saveButton.addEventListener('click', () => {
    if (!memoryDialog.open) {
      memoryDialog.showModal();
    }
  });
}

if (dialogButton && memoryDialog) {
  dialogButton.addEventListener('click', () => {
    memoryDialog.close();
  });
}
