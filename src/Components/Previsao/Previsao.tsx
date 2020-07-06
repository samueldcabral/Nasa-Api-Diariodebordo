import React, { useEffect, useState } from "react";
import "./Previsao.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { getInsight } from "../../Service/Api";
import MetCard from "../MetCard/MetCard";

interface Props {}

export interface MeterologiaIntf {
  sol: string;
  season: string;
  at: { av: number; ct: number; mn: number; mx: number };
}

const Previsao: React.FC<Props> = () => {
  const [metArr, setMetArr] = useState<MeterologiaIntf[]>();

  useEffect(() => {
    getApiRequests();
  }, []);

  const getApiRequests = async () => {
    const insight = await getInsight();
    const solKeys = insight.data.sol_keys;
    const result = solKeys.map((key: string) => {
      return {
        sol: key,
        season: insight.data[key].Season,
        at: insight.data[key].AT,
      };
    });

    setMetArr(result);
  };

  return (
    <Row>
      <Col>
        <div
          className="h3 mt-5 diarios__subheader d-flex"
          style={{ color: "#fff" }}
        >
          {metArr ? (
            metArr.map((item) => <MetCard key={item.sol} item={item} />)
          ) : (
            <Spinner animation="border" />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Previsao;
