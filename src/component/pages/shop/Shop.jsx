import { useEffect, useState } from "react";
import Cover from "../../hooks/Cover";
import banner from "../../../assets/shop/banner2.jpg";
import useCart from "../../hooks/useCart";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const [cart, refetch] = useCart();
  const [voucherCode, setVoucherCode] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [amounts, setAmounts] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const initialAmounts = {};
    cart.forEach((item) => {
      initialAmounts[item.name] = 1;
    });
    setAmounts(initialAmounts);

    setDiscountedAmount(calculateTotalCost());
  }, [cart]);

  const incrementQuantity = (itemId) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [itemId]: (prevAmounts[itemId] || 0) + 1,
    }));
  };

  const decrementQuantity = (itemId) => {
    if (amounts[itemId] > 0) {
      setAmounts((prevAmounts) => ({
        ...prevAmounts,
        [itemId]: (prevAmounts[itemId] || 0) - 1,
      }));
    }
  };

  const calculateTotalCost = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * (amounts[item.name] || 0);
    });
    return total;
  };

  const handleDiscountVoucher = (voucherCode) => {
    let newDiscountedAmount = calculateTotalCost();
    if (voucherCode === "BBKHABO") {
      newDiscountedAmount -= 20;
    }
    setDiscountedAmount(newDiscountedAmount);
  };

  const handleOrderFinal = () => {
    const orderInfo = {
      cart: cart,
      discountedAmount: discountedAmount,
      totalCost: calculateTotalCost(),
      amounts: amounts,
    };

    axiosPublic.post("/order", orderInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your order placed!!!",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(location?.state ? location.state : "/");
      }
    });
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure you want to delete this item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/cart/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Item Deleted!",
                text: "This item has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the item.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="flex">
      <div className="w-full">
        <Cover img={banner} title={"Shop"}></Cover>
        <div className="w-11/12 mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-5">Your Ordered Items</h1>
          <div className="flex gap-20">
            <div className="w-1/2 border-t-2">
              {cart?.map((item) => (
                <div key={item._id} className="p-4 border-b-2">
                  <div className="flex justify-between">
                    <p className="font-bold">Name: {item.name}</p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                  <div className="flex gap-4 items-center mt-2">
                    <h1 className="text-lg">Select quantity of this item:</h1>
                    <div className="flex items-center">
                      <button
                        onClick={() => decrementQuantity(item.name)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-l"
                      >
                        -
                      </button>
                      <h1 className="mx-5">{amounts[item.name]}</h1>
                      <button
                        onClick={() => incrementQuantity(item.name)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="font-bold mt-2">
                    Total: ${item.price * (amounts[item.name] || 0)}
                  </p>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-red-700 hover:bg-red-900 rounded-md flex items-center gap-2 px-2 py-1 text-lg font-semibold text-white hover:text-white"
                    >
                      <MdDelete className="text-2xl"></MdDelete>Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 bg-gray-200 h-fit p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <p className="text-lg mb-4">
                Total Cost: ${calculateTotalCost()}
              </p>

              <div className="mb-6">
                <label>Enter voucher</label>
                <input
                  type="text"
                  placeholder="Enter discount voucher"
                  className="border border-gray-300 p-2 rounded-md w-full mb-2"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                />
                <button
                  onClick={() => handleDiscountVoucher(voucherCode)}
                  className="btn btn-outline btn-primary font-bold rounded-md"
                >
                  Apply Voucher
                </button>
              </div>

              <p className="text-lg mb-4">
                Discounted Amount: ${discountedAmount}
              </p>

              <div>
                <p className="text-lg font-bold mb-5">Select Payment Method:</p>
                <div className="flex flex-col items-center">
                  <button className="btn btn-outline btn-primary font-bold w-full rounded-md">
                    Credit Card Payment
                  </button>
                </div>
              </div>
              <h1 className="text-lg my-5 text-center">or</h1>
              <button
                className="btn btn-outline btn-primary font-bold w-full"
                onClick={handleOrderFinal}
              >
                Cash on delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
