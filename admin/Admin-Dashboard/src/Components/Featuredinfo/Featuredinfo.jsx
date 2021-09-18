import React from "react";
import "./featuredinfo.scss";
import ArrowDownward from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpward from "@material-ui/icons/ArrowUpwardOutlined";

const Featuredinfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">£3,000</span>
          <span className="featuredMoneyRate">
            -11.5
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month </span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">£5,000</span>
          <span className="featuredMoneyRate">
            -1.5
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month </span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">£4,000</span>
          <span className="featuredMoneyRate">
            11.0
            <ArrowUpward className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to last month </span>
      </div>
    </div>
  );
};

export default Featuredinfo;
