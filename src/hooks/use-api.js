import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getItems();
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  const getItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (item) => {
    try {
      setLoading(true);
      const response = await axios.post(url, item);
      setData([...data, response.data]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (item) => {
    try {
      setLoading(true);
      const response = await axios.put(`${url}/${item.id}`, item);
      const updatedData = data.map((d) =>
        d.id === item.id ? response.data : d
      );
      setData(updatedData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${url}/${id}`);
      const updatedData = data.filter((d) => d.id !== id);
      setData(updatedData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, createItem, updateItem, deleteItem, getItems };
};

export default useApi;
