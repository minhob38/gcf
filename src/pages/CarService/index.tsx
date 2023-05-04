/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import Button from "@components/CarService/Button";
import Scroll from "@components/common/Scroll";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import CarCard from "@components/CarService/CarCard";
import { useCarsSalesQuery } from "@hooks/useApiQuery";
import UsedCarSales from "@components/CarService/UsedCarSales";
import PriceSelect from "@components/common/Select/PriceSelect";
import { ECAR_SEARCH_TYPE, EPRICE_TYPE } from "types/enum";
import * as variables from "@constants/variables";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0 15px 0;
  padding: 0 ${margins.SIDE_MAIN_MARGIN};
  gap: 0 10px;
`;

const CarCardContainer = styled.div`
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

// const PriceSelectBoxContainer = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;
//   align-items: center;
//   gap: 0 10px;
//   width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
//   margin: 0 auto 0 auto;
// `;

const PriceContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto 20px auto;
`;

const PriceText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 0;
  border-radius: 8px;
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.BLACK_1};
  text-align: center;
`;

const SearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 0;
`;

const PriceSelectBoxContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const HypenText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 10px;
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.BLACK_1};
  text-align: center;
`;

const NotificationText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.BLACK_1};
  text-align: center;
`;

const SCROLL_BOTTOM_MARGIN = 130;

const CarService = () => {
  const newQuery = useCarsSalesQuery(ECAR_SEARCH_TYPE.NEW);
  const usedQuery = useCarsSalesQuery(ECAR_SEARCH_TYPE.USED);

  const newApiData = newQuery.data || [];
  const usedApiData = usedQuery.data || [];

  const [carSearchType, setCarSearchType] = useState<ECAR_SEARCH_TYPE>(ECAR_SEARCH_TYPE.NEW);
  const handleNewSearchButtonClick = () => setCarSearchType(ECAR_SEARCH_TYPE.NEW);
  const handleUsedSearchButtonClick = () => setCarSearchType(ECAR_SEARCH_TYPE.USED);
  const handleSearchClick = () => {
    switch (carSearchType) {
      case ECAR_SEARCH_TYPE.NEW:
        newQuery.refetch();
        return;
      case ECAR_SEARCH_TYPE.USED:
        usedQuery.refetch();
        return;
      default:
    }
  };

  return (
    <>
      <Header title="Car" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <ButtonContainer>
          <Button
            title="New"
            width="100px"
            height="40px"
            clicked={carSearchType === ECAR_SEARCH_TYPE.NEW}
            onClick={handleNewSearchButtonClick}
          />
          <Button
            title="Used"
            width="100px"
            height="40px"
            clicked={carSearchType === ECAR_SEARCH_TYPE.USED}
            onClick={handleUsedSearchButtonClick}
          />
        </ButtonContainer>
        <PriceContainer>
          {/* <PriceText>Price</PriceText> */}
          <SearchButtonContainer>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              fontSize={"24px"}
              onClick={handleSearchClick}
            />
          </SearchButtonContainer>
          <PriceSelectBoxContainer>
            <PriceSelect
              type={EPRICE_TYPE.MIN}
              size={{ width: "100px", height: "30px" }}
              prices={variables.MIN_PRICES}
            />
            <HypenText>~</HypenText>
            <PriceSelect
              type={EPRICE_TYPE.MAX}
              size={{ width: "100px", height: "30px" }}
              prices={variables.MAX_PRICES}
            />
          </PriceSelectBoxContainer>
        </PriceContainer>
        <Scroll direction="y" height={`calc(100% - ${SCROLL_BOTTOM_MARGIN}px)`}>
          <NotificationText>Click magnifier after setting price range</NotificationText>
          {carSearchType === ECAR_SEARCH_TYPE.NEW && <UsedCarSales cars={newApiData} />}
          {carSearchType === ECAR_SEARCH_TYPE.USED && <UsedCarSales cars={usedApiData} />}
        </Scroll>
      </Content>
    </>
  );
};

export default CarService;
