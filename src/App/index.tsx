import React, { useState, useEffect } from "react";

import { UsersDataType, MemberType } from "../types";

import { Container, LoadingText } from "./styledComponents";

const App = () => {
  const [data, setData] = useState<MemberType[]>([]);
  const [apiError, setError] = useState<string>("");
  const [apiStatus, setAPIStatus] = useState<number>(100);

  const isAPIFetching = (): boolean => apiStatus === 300;
  useEffect(() => {
    fetch("./TestData.json")
      .then((res) => {
        setAPIStatus(300);
        return res.json();
      })
      .then(
        (result: UsersDataType) => {
          const { members } = result;
          setTimeout(() => {
            setData(members);
            setAPIStatus(200);
          }, 1000);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <Container>
      {isAPIFetching() ? (
        <LoadingText>{`Loading....`}</LoadingText>
      ) : (
        `Users List`
      )}
    </Container>
  );
};

export default App;
