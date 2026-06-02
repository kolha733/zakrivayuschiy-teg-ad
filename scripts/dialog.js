const saveButton = document.querySelector('.save-button');
const memoryDialog = document.querySelector('#memory-dialog');
const dialogForm = memoryDialog && memoryDialog.querySelector('.dialog__form');
const dialogButton = memoryDialog && memoryDialog.querySelector('.dialog__button');

function openMemoryDialog(event) {
  event.preventDefault();

  if (memoryDialog.open) {
    return;
  }

  try {
    memoryDialog.showModal();
  } catch (error) {
    void error;
    memoryDialog.setAttribute('open', '');
  }
}

function closeMemoryDialog(event) {
  event.preventDefault();

  if (!memoryDialog.open) {
    return;
  }

  try {
    memoryDialog.close();
  } catch (error) {
    void error;
    memoryDialog.removeAttribute('open');
  }
}

if (saveButton && memoryDialog) {
  saveButton.addEventListener('click', openMemoryDialog);
}

if (dialogButton && memoryDialog) {
  dialogButton.addEventListener('click', closeMemoryDialog);
}

if (dialogForm && memoryDialog) {
  dialogForm.addEventListener('submit', closeMemoryDialog);
}
