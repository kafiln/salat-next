const CACHEJSON = 'cache.json';

export const storeInCache = (fs, data) => {
  if (!fs.existsSync(CACHEJSON)) {
    fs.writeFileSync(
      CACHEJSON,
      JSON.stringify({
        data
      })
    );
  }
};

export const getDataFromCache = fs => JSON.parse(fs.readFileSync(CACHEJSON));
