/* eslint-disable react/prop-types */

const MealsCart = ({ item }) => {
    const {post_time} = item;
  return (
    <div>
      <div className="h-[600px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={item.image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-lg font-medium tracking-widest  dark:text-violet-600">
            {item.title}
          </span>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold tracking-wide">
              Price: {item.price}
            </h2>
            <p className="text-black text-xl font-semibold">
              Rating: {item.rating}
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <p className="bg-blue-500 py-2 px-8 text-white rounded-full">{item.category}</p>
            <p className="bg-blue-500 p-2 text-white rounded-full"> {new Date(post_time).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsCart;
