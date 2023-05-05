/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import { useMyMoveBookingQuery, useMyTelcomBookingQuery } from "@hooks/useApiQuery";

const PADDING = "15px";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto 0 auto;
  padding: ${PADDING};
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

const ApplicantCard: React.FC = () => {
  const query = useMyMoveBookingQuery();
  const apiData = query.data;
  // TODO PM 붙이기

  return (
    <Wrapper>
      <TextContainer>
        <BulletText>Name</BulletText>
        <PlainText>minho</PlainText>
      </TextContainer>
      <TextContainer>
        <BulletText>Email</BulletText>
        <PlainText>minho@gcf.com</PlainText>
      </TextContainer>
      <TextContainer>
        <BulletText>Mobile</BulletText>
        <PlainText>01011112222</PlainText>
      </TextContainer>
    </Wrapper>
  );
};

export default ApplicantCard;
