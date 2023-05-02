/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import CarCard from "@components/CarService/CarCard";
import { useCarsSalesQuery } from "@hooks/useApiQuery";
import { ECAR_SEARCH_TYPE } from "types/enum";
import { v4 as uuid4 } from "uuid";

const CarCardContainer = styled.div`
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

const UsedCarSales = () => {
  const query = useCarsSalesQuery(ECAR_SEARCH_TYPE.USED);
  const apiData = query.data;
  console.log(apiData);

  const Cards = apiData?.map((data) => {
    return (
      <CarCard
        key={uuid4()}
        carImageUrl={data.carImageUrl}
        brandName={data.brandName}
        carModelName={data.carModelName}
      />
    );
  });

  return (
    <>
      <CarCardContainer>{Cards} </CarCardContainer>
    </>
  );
};

export default UsedCarSales;
