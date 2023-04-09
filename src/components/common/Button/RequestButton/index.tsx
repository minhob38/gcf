/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { useMutation } from "react-query";

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
  // const requestMutation = useMutation(api, {
  //   onMutate: (variable) => {
  //     console.log("onMutate", variable);
  //     // variable : {loginId: 'xxx', password; 'xxx'}
  //   },
  //   onError: (error, variable, context) => {
  //     // error
  //   },
  //   onSuccess: (data, variables, context) => {
  //     console.log("success", data, variables, context);
  //   },
  //   onSettled: () => {
  //     console.log("end");
  //   },
  // });

  // const handleClick = () => {
  //   requestMutation.mutate();
  // };

  return (
    <>
      <Button>Request</Button>
    </>
  );
};

export default RequestButton;
