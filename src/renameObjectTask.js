//

function renameKeys(remap, data) {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      const result = [remap[key] || key, value];

      return result;
    })
  );
}
renameKeys({ _id: 'id' }, { _id: 1234578, name: 'John' });

renameKeys({ _id: 'id', name: 'user' }, { _id: 1234578, name: 'John' });
