import { UserContext } from "@/context/UserProvider";
import { useRef, useState, useCallback, useEffect, useContext } from "react";
import useSWR from "swr";

export const useScrollPagination = () => {
  const tableList = useRef<any>(null);
  const { userInfo } = useContext(UserContext);
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<any[]>([]);
  const [scrollTimer, setScrollTimer] = useState<number | undefined>();
  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());

  const { data, mutate } = useSWR(
    `https://new-backend.unistory.app/api/data?page=${page}&perPage=20`,
    fetcher,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        const itemsWithUserInfo =
          items.length === 0 ? [userInfo, ...data.items] : [...data.items];
        console.log(data, "ALO", itemsWithUserInfo);
        setItems((prevItems) => [...prevItems, ...itemsWithUserInfo]);
      },
    }
  );

  const handleScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      setScrollTimer(
        window.setTimeout(() => {
          setPage((prevPage) => prevPage + 1);
        }, 300)
      );
    }
  };

  useEffect(() => {
    tableList.current?.addEventListener("scroll", handleScroll);
    return () => tableList.current?.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleItemCloseClick = (id: string) => {
    console.log("123");
    mutate(
      `https://new-backend.unistory.app/api/data?page=${page}&perPage=20`,
      {
        populateCache: (updatedList: any, list: any) => {
          const newList = items.filter((item: any) => item.id !== id);
          setItems([userInfo, ...newList]);
        //   return { userInfo, ...list, items: newList };
        },
        revalidate: false,
      }
    );
  };
  return { tableList, items, mutate, handleItemCloseClick };
};
