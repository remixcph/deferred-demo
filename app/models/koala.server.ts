export type Koala = {
  name: string;
  delay: number;
  img: string;
};

export function getKoalas(): Promise<Koala> {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 10000);

    const koala = {
      name: "Tim the koala",
      delay,
      img: "https://www.savethekoala.com/wp-content/uploads/2022/09/koala_phys.jpg",
    };

    setTimeout(() => {
      resolve(koala);
    }, delay);
  });
}
