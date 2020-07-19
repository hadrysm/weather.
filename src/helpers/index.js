export const getCurrentDay = data => new Date(data.slice(0, 10)).toString().slice(0, 3);
