function Person(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

Person.prototype.sapa = function () {
  return `Halo, saya ${this.nama} dengan umur ${this.umur}`;
};

const budi = new Person('Budi', 22);
console.log(budi);
console.log(budi.sapa());

const ucup = new Person('Ucup', 23);
console.log(ucup);
console.log(ucup.sapa());

// Contoh
function User(username, role) {
  this.username = username;
  this.role = role;
}

User.prototype.isAdmin = function () {
  return this.role === 'admin';
};

const renday = new User('renday', 'admin');
console.log(renday.isAdmin());

const roki = new User('roki', 'user');
console.log(roki.isAdmin());
