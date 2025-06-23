type NavData = {
  id: number;
  img: string;
  title: string;
  url: string;
  subtitle: {
    sub1: string;
    sub2: string;
    sub3?: string;
  };
};

const navData = [
  {
    id: 1,
    img: "/NavDown/fashion.jpg",
    title: "Fashion",
    url: "fashion",
    subtitle: {
      sub1: "Shoes & Handbags",
      sub2: "Woman Clothing & Accesories",
      sub3: "Men Clothing & Accesories",
    },
  },
  {
    id: 2,
    img: "/NavDown/electronics.jpg",
    title: "Electronics",
    url: "electronics",
    subtitle: {
      sub1: "Computers",
      sub2: "Mobile Phones",
    },
  },
  {
    id: 3,
    img: "/NavDown/home.jpg",
    title: "Home & Life",
    url: "home-life",
    subtitle: {
      sub1: "Furniture",
      sub2: "Home Decoration",
    },
  },
  {
    id: 4,
    img: "/NavDown/fashion.jpg",
    title: "Fashion",
    url: "fashion",
    subtitle: {
      sub1: "Shoes & Handbags",
      sub2: "Woman Clothing & Accesories",
    },
  },
  {
    id: 5,
    img: "/NavDown/cosmetics.jpg",
    title: "Cosmetics & Personal Care",
    url: "cosmetics-care",
    subtitle: {
      sub1: "Perfumes",
      sub2: "Skin Products",
    },
  },
  {
    id: 6,
    img: "/NavDown/jewelry.jpg",
    title: "Jewelry & Watch",
    url: "jewelry-watch",
    subtitle: {
      sub1: "Watches",
      sub2: "Gold Accesories",
    },
  },
  {
    id: 7,
    img: "/NavDown/fashion.jpg",
    title: "Sport & Outdoor",
    url: "sport-outdoor",
    subtitle: {
      sub1: "Fitness & Cardio",
      sub2: "Sports Wear & Shoes",
    },
  },
  {
    id: 8,
    img: "/NavDown/fashion.jpg",
    title: "Books",
    url: "books",
    subtitle: {
      sub1: "Books",
      sub2: "Games",
    },
  },
  {
    id: 9,
    img: "/NavDown/fashion.jpg",
    title: "Automotive & Motocycle",
    url: "auto-moto",
    subtitle: {
      sub1: "Tyres & Rims",
      sub2: "Spare Parts",
    },
  },
];

export default navData;
export type { NavData };
