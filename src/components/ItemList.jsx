import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
export default function ItemList({ items }) {
  const dispatch=useDispatch();
  const handleClick=(item)=>{
          dispatch(addItem(item));
  }
 

  return (
    <div>
      {items.map((item) => {
        const info = item.card.info;

        return (
          <div
            key={info.id}
            className="p-4 m-2 border-b border-gray-200 flex justify-between items-start"
          >
            
            <div className="w-9/12 text-left">
              <div className="flex justify-between font-medium">
                <span>{info.name}</span>
                <span>₹{(info.price || info.defaultPrice) / 100}</span>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                {info.description}
              </p>
            </div>

            
           <div className="w-3/12 flex flex-col items-center">
  {info.imageId && (
    <img
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/" +
        info.imageId
      }
      alt={info.name}
      className="w-24 h-20 object-cover rounded-lg"
    />
  )}

  <button className="mt-2 px-4 py-1 bg-white border border-gray-300 rounded-lg shadow text-green-600 font-semibold" onClick={()=>handleClick(item)}>
    ADD +
  </button>
</div>

          </div>
        );
      })}
    </div>
  );
}
