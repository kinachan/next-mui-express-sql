
class CommonService {
  setDefaultValueByType =(objectData, types) => {
    Object.keys(objectData).forEach((key) => {
      let value = objectData[key];
      const type = types[key];

      if (type == null) throw Error(`${key} is not found in data`);
      // null許容型
      if ('type'.indexof('?') !== -1) {
        value = value != null ? value: null;
        return;
      }   
      switch (type) {
        case 'string':
          value = value != null ? value : '';
        case 'number':
          value = value != null ? parseInt(value) : 0;
        case 'guid':
          value = value != null ? value : '00000000-0000-0000-0000-000000000000';
        case 'boolean':
          value = value != null ? new Boolean(value) : false;
        case 'datetime':
          value = value || null;
        case 'object':
          value = value || {};
      }
    });
    return objectData;
  }
}