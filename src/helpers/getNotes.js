import { db } from "../services/firebase/firebase-config";

export const getNotes = async (uid) => {
  const notesSnap = await db
    .collection(`${uid}/journal/notes`)
    .orderBy("date", "desc")
    .get();
  let notes = [];

  notesSnap.forEach((snap) => {
    notes.push({
      id: snap.id,
      ...snap.data(),
    });
  });

  return notes;
};
