import React from "react";
import { useGetAllDestinationQuery } from "../api/DestinationApi";
import Destination from "./Destination";


function DestinationList() {
  const { data, isError, isLoading, isSuccess, error } =
    useGetAllDestinationQuery();


  let content;
  if (isLoading) {
    content = <p>Загрузка...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
       <Destination destination={destination} key={destination.id} />
      );
    });
  } else if (isError) {
    console.log(error);
    content = <p>Ошибка, см.лог</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
