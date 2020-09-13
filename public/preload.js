window.addEventListener("DOMContentLoaded", () => {
  if (process.platform !== "darwin") {
    const customTitlebar = require("custom-electron-titlebar");
    const { Color } = customTitlebar;

    new customTitlebar.Titlebar({
      backgroundColor: Color.fromHex("#212121"),
    });
  }
});
