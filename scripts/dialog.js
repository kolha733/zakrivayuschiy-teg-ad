const saveButton = document.querySelector('.save-button');
const memoryDialog = document.querySelector('#memory-dialog');

if (saveButton && memoryDialog) {
  saveButton.addEventListener('click', () => {
    if (!memoryDialog.open) {
      memoryDialog.showModal();
    }
  });
}
