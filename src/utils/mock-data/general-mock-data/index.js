//
import { role } from "./role";
import { email } from "./email";
import { boolean } from "./boolean";
import { company } from "./company";
import { phoneNumber } from "./phoneNumber";
import { fullAddress, country } from "./address";
import { firstName, lastName, fullName } from "./name";
import { title, sentence, description } from "./text";
import { price, rating, age, percent } from "./number";
import { questions } from "./questions";

// ----------------------------------------------------------------------

const mockData = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  email: (index) => email[index],
  phoneNumber: (index) => phoneNumber[index],
  boolean: (index) => boolean[index],
  role: (index) => role[index],
  company: (index) => company[index],
  address: {
    fullAddress: (index) => fullAddress[index],
    country: (index) => country[index],
  },
  name: {
    firstName: (index) => firstName[index],
    lastName: (index) => lastName[index],
    fullName: (index) => fullName[index],
  },
  text: {
    title: (index) => title[index],
    sentence: (index) => sentence[index],
    description: (index) => description[index],
  },
  number: {
    percent: (index) => percent[index],
    rating: (index) => rating[index],
    age: (index) => age[index],
    price: (index) => price[index],
  },
  image: {
    cover: (index) => `/static/mock-images/covers/cover_${index + 1}.jpg`,
    feed: (index) => `/static/dummy/dummy-banner-1.jpg`,
    banner: (index) => `/static/dummy/servicio-asistencia.png`,
    product: (index) => `/static/mock-images/products/product_${index + 1}.jpg`,
    avatar: (index) => `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  },
  questions: questions,
};

export default mockData;
