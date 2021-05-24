import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { db } from "../services/firebase/firebase-config";
import { notesTypes } from "../types/notesTypes";
import {
  addNewEntryAction,
  //deleteNoteOnFirebaseAction,
  startGetNotes,
  saveNoteOnFirebase,
  uploadToCloudinaryAction,
} from "./notesActions";
import { getNotes } from "../helpers/getNotes";

jest.mock("../helpers/fileUpload", () => {
  return {
    fileUpload: jest.fn(() => {
      return "https://hola.mundo.com/image.jpg";
    }),
  };
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {
    uid: "TEST_UID",
  },
  notes: {
    activeNote: {
      id: "0Myq51zzzlNnrZtwcYe4",
      title: "hello",
      body: "world",
    },
  },
};
let store = mockStore(initialState);

store.getState();

describe("Pruebas en notesActions", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  test("debe de crear una nueva nota addNewEntryAction", async () => {
    await store.dispatch(addNewEntryAction());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: notesTypes.activeNote,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: notesTypes.addNewEntry,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    await db.doc(`/TEST_UID/journal/notes/${actions[0].payload.id}`).delete();
    //await store.dispatch(deleteNoteOnFirebaseAction(actions[0].payload.id));
  });

  // test("startGetNotes debe obtener las notas", async () => {
  //   await store.dispatch(startGetNotes());
  //   const actions = store.getActions();

  //   expect(actions[0]).toEqual({
  //     type: notesTypes.getNotes,
  //     payload: expect.any(Array),
  //   });
  // });

  // test("saveNoteOnFirebase debe de guardar la nota ", async () => {
  //   const note = {
  //     id: "0Myq51zzzlNnrZtwcYe4",
  //     title: "title",
  //     body: "body",
  //   };

  //   await store.dispatch(saveNoteOnFirebase(note));

  //   const actions = store.getActions();

  //   expect(actions[0].type).toBe(notesTypes.updateNote);
  // });

  // test("uploadToCloudinaryAction debe de actualizar el url de la note", async () => {
  //   const file = new File([], "image.jpg");
  //   await store.dispatch(uploadToCloudinaryAction(file));

  //   const docRef = await db
  //     .doc("/TEST_UID/journal/notes/0Myq51zzzlNnrZtwcYe4")
  //     .get();
  //   expect(docRef.data().url).toBe("https://hola.mundo.com/image.jpg");
  // });
});
