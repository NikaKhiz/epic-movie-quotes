export const toggleModal = (store, activateDialog) => {
  const dialogs = store.dialog;
  for (const dialog in dialogs) {
    if (activateDialog === dialog) {
      dialogs[dialog] = true;
    } else {
      dialogs[dialog] = true;
    }
  }
  store.dialog = dialogs;
  store.activeDialog = activateDialog;
};
