/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as size from "@constants/size";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import CarCard from "@components/CarService/CarCard";
import { useCarsSalesQuery } from "@hooks/useApiQuery";
import { ECAR_SEARCH_TYPE } from "types/enum";
import { v4 as uuid4 } from "uuid";
import { ICarSale } from "types/types";

const CarCardContainer = styled.div`
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

const UsedCarSales: React.FC<{ cars: ICarSale[] }> = ({ cars }) => {
  // const query = useCarsSalesQuery(ECAR_SEARCH_TYPE.USED);
  // const apiData = query.data;

  const Cards = cars?.map((car) => {
    return (
      <CarCard
        key={uuid4()}
        carImageUrl={car.carImageUrl}
        brandName={car.brandName}
        carModelName={car.carModelName}
        bodyType={car.bodyType}
        price={car.price}
        seatCount={car.seatCount}
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
