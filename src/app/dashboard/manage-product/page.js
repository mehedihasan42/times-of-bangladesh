import getAllProducts from "@/utils/getAllProducts";
import ManageSingleProduct from "./ManageSingleProduct";

const manageproduct = async() => {
    const products = await getAllProducts()
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            products.map(product=>
                <tr key={product.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                          {/* import image */}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.title}</div>
                      <div className="text-sm opacity-50">{product.category}</div>
                    </div>
                  </div>
                </td>
                <td>
                 {product.details}
                  <br/>
                  <span className="badge badge-ghost badge-sm">{product.total_view}</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
                )
          }
          
          </tbody>
        </table>
      </div>
    )
};

export default manageproduct;