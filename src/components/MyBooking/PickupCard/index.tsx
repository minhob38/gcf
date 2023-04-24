/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import { useMyPickupBookingQuery } from "@hooks/useApiQuery";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto 20px auto;
  padding: 15px;
  border-radius: 8px;
  background-color: ${colors.WHITE_1};
  box-shadow: ${colors.SHADOW};
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
`;

const BulletText = styled.div`
  width: 80px;
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
`;

const PlainText = styled.div`
  font: ${fonts.FONT_MEDIUM_400};
  color: ${colors.BLACK_1};
`;

// const Status = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 10px 0 0 0;
//   height: 30px;
//   border-radius: 8px;
//   font: ${fonts.FONT_MEDIUM_600};
//   width: 100%;
//   color: ${colors.BLACK_1};
//   background-color: ${colors.PRIMARY_3};
// `;

const PickupCard: React.FC = () => {
  const query = useMyPickupBookingQuery();
  const apiData = query.data;

  // TODO PM 붙이기
  return (
    <Wrapper>
      <TextContainer>
        <BulletText>Time</BulletText>
        <PlainText>
          {apiData?.year}/{apiData?.month}/{apiData?.date} {apiData?.hour}:{apiData?.minute}
        </PlainText>
      </TextContainer>
      <TextContainer>
        <BulletText>From</BulletText>
        <PlainText>{apiData?.departure}</PlainText>
      </TextContainer>
      <TextContainer>
        <BulletText>To</BulletText>
        <PlainText>{apiData?.arrival}</PlainText>
      </TextContainer>
      <TextContainer>
        <BulletText>Status</BulletText>
        <PlainText>{apiData?.status}</PlainText>
      </TextContainer>
    </Wrapper>
  );
};

export default PickupCard;
