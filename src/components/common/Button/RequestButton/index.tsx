/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { useMutation } from "react-query";
import { testPostApi } from "@apis/functions";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_1};
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.WHITE_1};
`;

const RequestButton = () => {
  const requestMutation = useMutation(testPostApi, {
    //
    onMutate: (variables) => {
      console.log("mutate", variables);
    },
    onError: (error, variables, context) => {
      console.log("error", error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
    },
    // error + success
    onSettled: () => {
      console.log("settled");
    },
  });

  const handleClick = () => {
    requestMutation.mutate("input");
  };

  return (
    <>
      <Button onClick={handleClick}>Request</Button>
    </>
  );
};

export default RequestButton;
