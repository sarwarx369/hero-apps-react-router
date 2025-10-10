const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("installed");
  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};
const addToStoreDb = (id) => {
  const storedAppdata = getStoredApp();
  if (storedAppdata.includes(id)) {
    alert("already installed");
  } else {
    storedAppdata.push(id);
    const app = JSON.stringify(storedAppdata);
    console.log(storedAppdata);
    localStorage.setItem("installed", app);
  }
};
export { addToStoreDb, getStoredApp };
