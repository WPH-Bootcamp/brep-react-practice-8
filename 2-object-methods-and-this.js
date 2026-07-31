const user2 = {
  nama: 'Ucup',
  sapa: function () {
    const inner = () => {
      console.log(this.nama);
    };
    inner();
  },
};

user2.sapa();

const user = {
  nama: 'Andi',
  sapa() {
    return this.nama;
  },
};

const fn = user.sapa.bind(user);

console.log(fn());
