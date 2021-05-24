import cloudinary from "cloudinary";
import fetch from "node-fetch";
import { fileUpload } from "./fileUpload";

cloudinary.config({
  cloud_name: "n3v3rg1v3up",
  api_key: "329861176195227",
  api_secret: "iIUP1lItlAi9jbNutPuvxLrUiU8",
});

describe("Pruebas en fileUpload", () => {
  //   test("debe de cargar un archivo y retornar el URL", async (done) => {
  //     const URL = "https://www.miiavatar.es/i/hombre.png";
  //     const res = await fetch(URL);

  //     const blob = await res.blob();

  //     const file = new File([blob], "image.png");
  //     const url = await fileUpload(file);
  //     console.log(url);
  //     expect(typeof url).toBe("string");

  //     //delete image por id

  //     const segments = url.split("/");
  //     const imageId = segments[segments.length < 1].replace(".png", "");
  //     cloudinary.v2.api.delete_resources(imageId, {}, () => {
  //       done();
  //     });
  //   });

  test("debe de retornar un error", async () => {
    const file = new File([], "image.png");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
