import { coffees } from "./../../mocks/coffees";

export function Home() {
  const initialSrc = "../../../public/assets/images/";
  return (
    <div>
      {coffees.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={`${initialSrc}${item.src}`} />
          </div>
        );
      })}
    </div>
  );
}
