let DDV;
//allows setting the DDV namespace. It is needed if Dynamsoft Document Viewer (DDV) is installed with NPM.
export function setDDV(DocumentViewer:any) {
  DDV = DocumentViewer;
}
//const canvas = document.createElement('canvas');
if ((window as any)["Dynamsoft"]) {
  const Dynamsoft = (window as any)["Dynamsoft"];
  DDV = Dynamsoft.DDV;
}

export class ImageFilterHandler extends DDV.ImageFilter  {
  async applyFilter(image:any, _type:string) {
    return new Promise((r, _j) => {
      r(image.data)
    });
  };
  get defaultFilterType() {
    return "BW"
  };
  querySupported() {
    return [
      {
        type: "BW",
        label: "Black & White"
      },
      {
        type: "sepia",
        label: "Retro",
      }
    ]
  };
  destroy() {
    super.destroy()
  };
}