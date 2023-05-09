// tipe data function dan return

function getNama(nama: string): string {
  return "Nama saya adalah " + nama;
}

console.log(getNama("Ali Hanafiah"));

function age(umur: number): number {
  return umur;
}

console.log("Umur saya adalah " + age(20));

function notReturn(): void {
  console.log("Tanpa Return");
}

notReturn();

let arrow = (): string => {
  return "aaa";
};
console.log(arrow());
