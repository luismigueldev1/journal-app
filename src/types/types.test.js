import { authTypes } from "./authTypes";
import { notesTypes } from "./notesTypes";
import { uiTypes } from "./uiTypes";

describe("Pruebas en los tyoes types", () => {
  const authTypesTest = {
    login: "[Auth] login",
    logout: "[Auth] logout",
  };
  const notesTypesTest = {
    addNewEntry: "[Notes] Add new entry",
    activeNote: "[Notes] Set active note",
    updateNote: "[Notes] update note",
    getNotes: "[Notes] Get notes",
    addFileToNote: "[Notes] Add file to note",
    deleteNote: "[Notes] delete Note",
    clearNoteAfterLogout: "[Notes] Clear notes after logout",
  };

  const uiTypesTest = {
    uiSetError: "[UI] Set Error",
    uiRemoveError: "[UI] Set Remove Error",
    uiStartLoading: "[UI] Start Loading",
    uiFinishLoading: "[UI] Finish Loading",
  };

  test("Los types debe coincidir con los types pretipados", () => {
    expect(authTypes).toEqual(authTypesTest);
    expect(notesTypes).toEqual(notesTypesTest);
    expect(uiTypes).toEqual(uiTypesTest);
  });
});
