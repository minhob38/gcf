/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as margins from "@constants/margins";
import CarCard from "@components/CarService/CarCard";
import { v4 as uuid4 } from "uuid";
import { ICarSale } from "types/types";

const CarCardContainer = styled.div`
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

// TODO: 신차/중고차 UI 바뀌면, 그때 New, Used 나누기
const CarSales: React.FC<{ cars: ICarSale[] }> = ({ cars }) => {
  const Cards = cars?.map((car) => {
    return (
      <CarCard
        key={uuid4()}
        carImageUrl={car.carImageUrl}
        brandName={car.brandName}
        carModelName={car.carModelName}
        segment={car.segment}
        fuelType={car.fuelType}
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

export default CarSales;
