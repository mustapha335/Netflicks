import React from "react";
import Avatar from "./avatar-img.jpeg";
import "./widgetLg.scss";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Costumer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={Avatar} alt="" className="avatar" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">4 Sep 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={Avatar} alt="" className="avatar" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">4 Sep 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={Avatar} alt="" className="avatar" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">4 Sep 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={Avatar} alt="" className="avatar" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">4 Sep 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
