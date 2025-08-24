import { items } from "@/data/items";


export default function List() {

    console.log('list',items)
  return (
    <ul className="block items-center justify-items-center m-2">
      {items.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
}
