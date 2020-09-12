const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const contextMenu = require("electron-context-menu");

contextMenu({
  showInspectElement: false,
  showSearchWithGoogle: false,
});

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1260,
    height: 740,
    show: false,
    title: "BrainTree",
    frame: process.platform === "darwin",
    titleBarStyle: process.platform === "darwin" ? "hiddenInset" : "default",
    minHeight: 700,
    minWidth: 1140,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.webContents.on("new-window", function (e, url) {
    e.preventDefault();
    require("electron").shell.openExternal(url);
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (process.platform !== "darwin") {
    mainWindow.menuBarVisible = false;
  }

  mainWindow.show();

  mainWindow.on("closed", () => {
    app.quit();
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
