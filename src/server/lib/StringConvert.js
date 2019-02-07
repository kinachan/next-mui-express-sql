
class StringConvert {
  toCamelCase = (str) => {
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str.replace(/[-_](.)/g, (match, group1) => {
        return group1.toUpperCase();
    });
  };
    
  toSnakeCase = (str) => {
    const camel = this.toCamelCase(str);
    return camel.replace(/[A-Z]/g, (s) => {
      return "_" + s.charAt(0).toLowerCase();
    });
  };
  
  toPascalCase = (str) => {
    const camel = this.toCamelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
  };
}

const stringConvert = new StringConvert();
export default stringConvert;