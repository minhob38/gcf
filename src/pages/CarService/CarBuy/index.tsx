/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import CarSearchTypeButton from "@components/CarService/CarSearchTypeButton";
import Scroll from "@components/common/Scroll";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import { useCarDetailQuery, useCarSalesQueryClient, useCarsSalesQuery } from "@hooks/useApiQuery";
import PriceSelect from "@components/common/Select/PriceSelect";
import { ECAR_SEARCH_TYPE, EPRICE_TYPE } from "types/enum";
import * as variables from "@constants/variables";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions as errorActions } from "@store/slices/errorSlice";
import { actions as carActions } from "@store/slices/carSlice";
import CarSales from "@components/CarService/CarSales";
import CarCard from "@components/CarService/CarCard";
import CarRequestButton from "@components/CarService/CarRequestButton";
import ApplicantCard from "@components/CarService/ApplicantCard";
import { useParams } from "react-router";

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0 15px 0;
  padding: 0 ${margins.SIDE_MAIN_MARGIN};
  gap: 0 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto 0 auto;
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

const NoticeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.BLACK_1};
  text-align: center;
`;

const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto;
  font: ${fonts.FONT_SMALL_400};
  color: ${colors.ERROR_RED};
  text-align: center;
`;

const ApplicantCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px auto;
  width: 100%;
`;

const RequestButtonContainer = styled.div`
  position: fixed;
  bottom: ${margins.SIDE_MAIN_MARGIN};
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
`;

const SCROLL_BOTTOM_MARGIN = 150;

const CarBuy = () => {
  const { carBasicId } = useParams();
  console.log(carBasicId);

  const dispatch = useTypedDispatch();
  const errorMessage = useTypedSelector(
    (state) => state.rootReducer.errorReducer.carSaleErrorMessage,
  );
  const carSearchType = useTypedSelector((state) => state.rootReducer.carReducer.carSearchType);
  const newMinimumPrice = useTypedSelector((state) => state.rootReducer.carReducer.newMinimumPrice);
  const newMaximumPrice = useTypedSelector((state) => state.rootReducer.carReducer.newMaximumPrice);
  const usedMinimumPrice = useTypedSelector(
    (state) => state.rootReducer.carReducer.usedMinimumPrice,
  );
  const usedMaximumPrice = useTypedSelector(
    (state) => state.rootReducer.carReducer.usedMaximumPrice,
  );

  const newQuery = useCarsSalesQuery(ECAR_SEARCH_TYPE.NEW);
  const usedQuery = useCarsSalesQuery(ECAR_SEARCH_TYPE.USED);

  const query = useCarDetailQuery(parseInt(carBasicId || ""));
  const apiData = query.data;

  const newCacheApiData = useCarSalesQueryClient(ECAR_SEARCH_TYPE.NEW);
  const usedCacheApiData = useCarSalesQueryClient(ECAR_SEARCH_TYPE.USED);

  const newApiData = newQuery.data || newCacheApiData || [];
  const usedApiData = usedQuery.data || usedCacheApiData || [];

  const handleNewSearchButtonClick = () => {
    dispatch(carActions.changeSearchType(ECAR_SEARCH_TYPE.NEW));
  };
  const handleUsedSearchButtonClick = () => {
    dispatch(carActions.changeSearchType(ECAR_SEARCH_TYPE.USED));
  };
  const handleSearchClick = () => {
    switch (carSearchType) {
      case ECAR_SEARCH_TYPE.NEW:
        // 최소/최대값을 입력하지 않았을때
        if (
          newMinimumPrice === variables.SELECT_MIN_PRICE_DEFAULT_TEXT ||
          newMaximumPrice === variables.SELECT_MIN_PRICE_DEFAULT_TEXT
        ) {
          dispatch(errorActions.throwCarSaleError("Select minimum or maximum price"));
          return;
        }

        // 최소값이 최대값보다 클때
        if (newMinimumPrice > newMaximumPrice) {
          dispatch(errorActions.throwCarSaleError("Maximum price should be minimum price"));
          return;
        }

        newQuery.refetch();
        return;
      case ECAR_SEARCH_TYPE.USED:
        // 최소/최대값을 입력하지 않았을때
        if (
          usedMinimumPrice === variables.SELECT_MIN_PRICE_DEFAULT_TEXT ||
          usedMaximumPrice === variables.SELECT_MIN_PRICE_DEFAULT_TEXT
        ) {
          dispatch(errorActions.throwCarSaleError("Select minimum or maximum price"));
          return;
        }

        // 최소값이 최대값보다 클때
        if (usedMinimumPrice > usedMaximumPrice) {
          dispatch(errorActions.throwCarSaleError("Maximum price should be minimum price"));
          return;
        }

        usedQuery.refetch();
        return;
      default:
    }
  };

  const handleFocus = () => dispatch(errorActions.catchCarSaleError());

  return (
    <>
      <Header title="Car" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Scroll direction="y" height={`calc(100% - ${SCROLL_BOTTOM_MARGIN}px)`}>
          {apiData && (
            <CarCard
              carBasicId={apiData.carBasicId}
              carImageUrl={apiData.carImageUrl}
              brandName={apiData.brandName}
              carModelName={apiData.carModelName}
              segment={apiData.segment}
              fuelType={apiData.fuelType}
              bodyType={apiData.bodyType}
              price={apiData.price}
              seatCount={apiData.seatCount}
            />
          )}
          <NoticeText>If you apply, we will contact you separately within 7 days</NoticeText>

          <ApplicantCardContainer>
            <ApplicantCard />
          </ApplicantCardContainer>
          <RequestButtonContainer>
            <CarRequestButton />
          </RequestButtonContainer>
        </Scroll>
      </Content>
    </>
  );
};

export default CarBuy;
// isDetail 플래그 넣기
