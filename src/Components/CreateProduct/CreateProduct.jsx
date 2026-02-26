// import axios from "axios";
import { MoveLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const CreateProduct = () => {
  const { user } = useAuth()
  const axiosInstance = useAxios()

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const imageUrl = e.target.imageUrl.value;
    const min_Price = e.target.min_Price.value;
    const max_Price = e.target.max_Price.value;
    console.log(title, imageUrl, min_Price, max_Price);

    const newProduct = {
      title, imageUrl, min_Price, max_Price,
      email: user.email,
      seller_name: user.displayName
    };
    

    // axios.post("http://localhost:3000/products", newProduct).then((data) => {
    //   console.log(data.data);
    //   if (data.data.insertedId) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Your Product has been created",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   }
    // });

    axiosInstance.post('/products', newProduct)
      .then(data => {
      console.log(data.data)
    })

  };
  return (
    <div className="bg-gray-100">
      <p className="flex justify-center text-xl font-semibold pt-20 mb-4">
        <Link to={"/allProducts"} className="flex items-center gap-4">
          <MoveLeft size={24} /> Back To Products
        </Link>
      </p>
      <h2 className="text-4xl font-bold text-center mb-10">
        Create <span className="text-primary">A Product</span>
      </h2>

      {/* form page*/}
      <div className="min-h-screen flex items-center justify-center pb-20">
        <div className="card w-full max-w-3xl bg-base-100 shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleCreateProduct} className="space-y-6">
            {/* Title & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                  className="input input-bordered focus:input-primary transition-all placeholder:text-gray-300"
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Category
                </label>
                <select
                  name="category"
                  className="select select-bordered focus:select-primary font-normal text-slate-400"
                >
                  <option value="" disabled>
                    Select a Category
                  </option>
                  <option value="car">Mercitis</option>
                  <option value="electronics">Head Phone</option>
                </select>
              </div>
            </div>

            {/* Prices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Min Price You want to Sale ($)
                </label>
                <input
                  name="min_Price"
                  type="text"
                  placeholder="e.g. 18.5"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Max Price You want to Sale ($)
                </label>
                <input
                  name="max_Price"
                  type="text"
                  placeholder="Optional (default = Min Price)"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
            </div>

            {/* Condition & Usage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Product Condition
                </label>
                <div className="flex gap-6 mt-2">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="radio"
                      name="condition"
                      className="radio radio-primary"
                    />
                    <span className="label-text font-medium">Brand New</span>
                  </label>
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="radio"
                      name="condition"
                      className="radio radio-primary"
                    />
                    <span className="label-text font-medium">Used</span>
                  </label>
                </div>
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Product Usage time
                </label>
                <input
                  name="usageTime"
                  type="text"
                  placeholder="e.g 1 year 3 month"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
            </div>

            {/* Seller Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Seller Name
                </label>
                <input
                  name="sellerName"
                  placeholder="e.g. Artisan Roasters"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Seller Email
                </label>
                <input
                  name="sellerEmail"
                  type="email"
                  placeholder="leli31955@nrlord.com"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
            </div>

            {/* Contact & Seller Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Seller Contact
                </label>
                <input
                  name="sellerContact"
                  type="text"
                  placeholder="e.g. +1-555-1234"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-600">
                  Image URL
                </label>
                <input
                  name="imageUrl"
                  type="text"
                  placeholder="https://..."
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
            </div>

            {/* Seller Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* URL */}
              <div className="form-control">
                <label className="label font-semibold text-slate-600 mb-1">
                  Your Product Image URL
                </label>{" "}
                <br />
                <input
                  name="productImageUrl"
                  type="text"
                  placeholder="https://..."
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
              {/* Location */}
              <div className="form-control">
                <label className="label font-semibold text-slate-600 mb-1">
                  Location
                </label>{" "}
                <br />
                <input
                  name="location"
                  type="text"
                  placeholder="City, Country"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </div>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label font-semibold text-slate-600 mb-1">
                Simple Description about your Product
              </label>{" "}
              <br />
              <textarea
                name="description"
                cols="1500"
                rows="5"
                className="textarea textarea-bordered focus:textarea-primary  text-base placeholder:text-gray-300"
                placeholder="e.g. I bought this product 3 month ago..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full bg-[#8b5cf6] hover:bg-[#7c3aed] border-none text-white text-lg normal-case shadow-lg"
            >
              Create A Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
