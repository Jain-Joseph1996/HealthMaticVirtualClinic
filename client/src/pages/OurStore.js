import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";
import { getCategories } from "../features/pcategory/pcategorySlice";
import { getBrand } from "../features/pbrand/pbrandSlice";
import { Link } from "react-router-dom";

const OurStore = () => {
  const [grid, setGrid] = useState(12);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrand, setselectedBrand] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState({
    category: "",
    brand: "",
    price: {
      gte: "",
      lte: "",
    },
  });
  const [params, setParams] = useState({});
  const productState = useSelector((state) => state?.product?.product);
  const pCatStat = useSelector((state) => state?.pCategory?.pCategories);
  const pbrandStat = useSelector((state) => state?.pBrand?.pbrands);
  const dispatch = useDispatch();
  useEffect(() => {
    const newParams = {};

    for (const [key, value] of Object.entries(query)) {
      if (value && typeof value === "object") {
        for (const [subKey, subValue] of Object.entries(value)) {
          if (subValue) {
            newParams[`${key}[${subKey}]`] = subValue;
          }
        }
      } else if (value) {
        newParams[key] = value;
      }
    }

    if (Object.keys(newParams).length) {
      setParams(newParams);
    } else {
      setParams({});
    }
  }, [query]);
  console.log(params);
  useEffect(() => {
    dispatch(getAllProducts(params));
    dispatch(getCategories());
    dispatch(getBrand());
  }, [params]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSelectedCategories(value);
    setQuery({ ...query, category: value });
  };

  const handleBrandCheckboxChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setselectedBrand(value);
    setQuery({ ...query, brand: value });
  };

  const handleClick = (event) => {
    setQuery({
      category: "",
      brand: "",
      price: {
        gte: "",
        lte: "",
      }
    }
    );
    setSelectedCategories("");
    setselectedBrand("");
  }

  return (
    <>
      <Meta title={"Our Store"} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Category</h5>
                <div>
                  <div className="multi-check">
                    {pCatStat?.map((item, index) => {
                      return (
                        <label key={item.title}>
                          <input
                            type="radio"
                            value={item.title}
                            checked={selectedCategories === item.title}
                            onChange={handleCheckboxChange}
                          />
                          {item.title}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Brand</h5>
                  <div className="multi-check">
                    {pbrandStat?.map((item, index) => {
                      return (
                        <label key={item.title}>
                          <input
                            type="radio"
                            value={item.title}
                            checked={selectedBrand === item.title}
                            onChange={handleBrandCheckboxChange}
                          />
                          {item.title}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="minPrice"
                      value={query.price.gte}
                      onChange={(event) =>
                        setQuery({
                          ...query,
                          price: { ...query.price, gte: event.target.value },
                        })
                      }
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="maxPrice"
                      value={query.price.lte}
                      onChange={(event) =>
                        setQuery({
                          ...query,
                          price: { ...query.price, lte: event.target.value },
                        })
                      }
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title"></h5>
                  <button className="button"
                    onClick={handleClick}>
                    Reset All
                  </button>
                </div>
                {/* <h5 className="sub-title">Colors</h5>
                <div>
                  <Color />
                </div> */}
                {/* <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}></p>
                  {/* <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select> */}
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">{`${productState.length} products`}</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container >
    </>
  );
};

export default OurStore;
