import itemModule from './item.module.css'
export default function Item({ item }) {
  return (
    <div className={itemModule.container}>
      <h3 className={itemModule.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className="image" />
      <p>
        <strong className={itemModule.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
