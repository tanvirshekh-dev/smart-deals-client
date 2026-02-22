import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { _id: productId } = useLoaderData();
  const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids for the product: ", data);
        data.sort((a, b)=> parseInt(a.bid_price) - parseInt(b.bid_price))
        setBids(data);
      });
  }, [productId]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log(productId, name, email, bid);

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user.photoURL,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bids has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid]
          newBids.sort((a, b)=> parseInt(a.bid_price) - parseInt(b.bid_price))
          setBids(newBids)
        }
      });
  };

  return (
    <div>
      {/* product info */}
      <div>
        <div></div>
        <div>
          <button onClick={handleBidModalOpen} className="btn btn-primary">
            I Want To Buy This Product
          </button>

          {/* Modal */}
          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Give Seller Your Offered Price
              </h3>

              <form onSubmit={handleBidSubmit}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Buyer Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                  {/* email */}
                  <label className="label">Buyer Email</label>
                  <input
                    type="email "
                    className="input w-full"
                    name="email"
                    defaultValue={user?.email}
                    readOnly
                  />
                  {/* place your price */}
                  <label className="label">Place Your Price</label>
                  <input type="text" className="input w-full" name="bid" />

                  <button className="btn btn-primary mt-4">Submit Bid</button>
                </fieldset>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* bids for the products */}
      <div>
        <h2 className="text-4xl font-bold">
          {" "}
          Bids For This Products:{" "}
          <span className="text-primary">{bids.length}</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Bid Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                bids.map((bid, index) =>
                  <tr>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                          <div className="font-bold">{bid.buyer_name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {bid.buyer_email}
                </td>
                <td>$ {bid.bid_price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
