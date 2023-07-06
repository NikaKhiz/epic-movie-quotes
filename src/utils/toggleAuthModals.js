export const activateModal = (store, activateDialog) => {
  store.activeDialog = activateDialog;
};
export const deactivateModal = (store) => {
  store.activeDialog = "";
};
