/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import { useMyTelcomBookingQuery } from "@hooks/useApiQuery";

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

const TimeSchedule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
`;

const ItemSchedule = styled.div`
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

const TelcomCard: React.FC = () => {
  const userId = 1;
  const query = useMyTelcomBookingQuery(userId);
  const apiData = query.data;
  // TODO PM 붙이기

  return (
    <Wrapper>
      <TimeSchedule>
        <BulletText>Time</BulletText>
        <PlainText>
          {apiData?.year}/{apiData?.month}
        </PlainText>
      </TimeSchedule>
      <ItemSchedule>
        <BulletText>Service</BulletText>
        <PlainText>
          {apiData?.isMobilePhone && "Mobile/"}
          {apiData?.isInternet && "Internet/"}
          {apiData?.isTv && "TV"}
        </PlainText>
      </ItemSchedule>
    </Wrapper>
  );
};

export default TelcomCard;
