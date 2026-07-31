const a = 10;
const b = 10;

console.log(a === b);

const obj1 = {
  nama: 'Ucup',
  identitas: { nik: '12983103901', sim: '1238138138' },
};
const obj2 = obj1;

obj2.umur = 20;

console.log(obj1);

const shallowCopy = { ...obj1 };
console.log(shallowCopy);
shallowCopy.alamat = 'Jl Untung Jawa';
shallowCopy.identitas.nik = '123123123123';
shallowCopy.identitas.sim = '111111111111';

console.log(shallowCopy);
console.log(obj1);

const deepCopy = structuredClone(obj1);
deepCopy.identitas.nik = '333333333333';
deepCopy.identitas.sim = '222222222222';

console.log(deepCopy);
console.log(obj1);
