const profile = {
  name: "John Doe",
  age: 30,
  coordinates: {
    lat: 40.7128,
    lng: -74.0060
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;
const { coordinates: { lat, lng } }: { coordinates: { lat: number; lng: number } } = profile;