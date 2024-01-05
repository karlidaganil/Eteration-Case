import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "../../../store";
// import { useStore } from "zustand";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setProductList } = useStore((state) => state);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://5fc9346b2af77700165ae514.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        setProductList(res.data);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setProductList]);

  return { products, loading, error };
};

export default useGetProducts;
