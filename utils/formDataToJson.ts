import set from './set';

const formDataToJson = (formData: FormData) => {
  const json: any = {};
  formData.forEach((value, key) => {
    if (value instanceof File) {
      throw new Error('File upload is not supported');
    }
    if (value === '') {
      return;
    }

    let val: string | number | boolean = value;
    if (!isNaN(Number(value))) {
      val = parseFloat(value);
    }
    set(json, key, val);
  });
  return json;
};

export default formDataToJson;
