import React from 'react';
import './App.css';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoIosCheckmark } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { GrTextAlignFull } from "react-icons/gr";

const Dashboard = () => {
  const summaryData = [
    { label: 'Approved', value: 11, color: '#4caf50' },
    { label: 'Rejected', value: 1, color: '#ff9800' },
    { label: 'Cancelled', value: 1, color: '#f44336' },
    { label: 'Ready For Review', value: 10, color: '#ffeb3b' },
    { label: 'In Progress', value: 54, color: '#2196f3' },
  ];

  return (
    <div className="dashboard">
      <h1 className="float-left-dashboard">Dashboard</h1>
      <div className="inner-block">
        <h2 className="float-left-title">KYC Application Reports</h2>
        <div className="summary-cards">
          {summaryData.map((item, index) => {
            const chartData = {
              labels: ['Completed', 'Pending'],
              datasets: [
                {
                  label: 'KYC Status',
                  data: [item.value, 100 - item.value],
                  backgroundColor: [item.color, '#e0e0e0'],
                  hoverOffset: 4,
                },
              ],
            };
            return (
              <div key={index} className="card" style={{ backgroundColor: item.color }}>
                <Pie data={chartData} />
                <div className="card-label">{item.label}</div>
                <div className="card-value">{item.value}</div>
              </div>
            );
          })}
        </div>

        <table>
          <thead>
            <tr>
              <th>Created</th>
              <th>Name</th>
              <th>Type</th>
              <th>Risk Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: 'May 15, 2024', time: '14:12:27', name: 'KÁROLY-EDWARD RÁCZ', email: 'sdhfg@dasdada.com', type: 'aiscan2', risk: 'LOW', status: 'Approved' },
              { date: 'May 15, 2024', time: '14:02:06', name: 'KÁROLY-EDWARD RÁCZ', email: 'dsadas@dsadas.com', type: 'aiscan2', risk: 'Not calculated', status: 'Customer Processing' },
              { date: 'May 03, 2024', time: '08:57:14', name: 'KÁROLY-EDWARD RÁCZ', email: 'fsafas@dasdas.com', type: 'aiscan2', risk: 'LOW', status: 'Approved' },
              { date: 'May 03, 2024', time: '08:33:55', name: 'KÁROLY-EDWARD RÁCZ', email: 'sfasfas@fasfa.com', type: 'aiscan2', risk: 'LOW', status: 'Approved' },
              { date: 'May 03, 2024', time: '08:23:24', name: 'KÁROLY-EDWARD RÁCZ', email: 'dsada@fsfasfa.com', type: 'aiscan2', risk: 'LOW', status: 'Approved' },
              { date: 'May 01, 2024', time: '10:45:58', name: 'ssdghj', email: 'dsafg@fasfa.com', type: 'aiscan2', risk: 'Not calculated', status: 'User Accepted KYC Invitation' },
              { date: 'Mar 22, 2024', time: '09:57:46', name: 'KÁROLY-EDWARD RÁCZ', email: 'dasaggo@sdada.com', type: 'aiscan2', risk: 'LOW', status: 'Approved' },
              { date: 'Mar 22, 2024', time: '09:53:16', name: 'KÁROLY-EDWARD RÁCZ', email: 'dafasf@sdada.com', type: 'aiscan2', risk: 'LOW', status: 'Approved' },
            ].map((item, index) => (
              <tr key={index}>
                <td>
                  {item.date}
                  <br />
                  <span className='bold'>{item.time}</span>
                </td>
                <td>
                  {item.name}
                  <br />
                  <span className='bold'>{item.email}</span>
                </td>
                <td>{item.type}</td>
                <td>
                  <div className="risk-container">
                    {item.risk === 'LOW' && <IoIosCheckmarkCircle />}
                    <span className={item.risk === 'LOW' ? 'risk-low' : ''}>{item.risk}</span>
                  </div>
                </td>
                <td>
                  <div className="status-container">
                    <div className="status-left">
                      {item.status === 'Approved' && <IoIosCheckmark className='checkmark-icon-size' />}
                      {item.status === 'Customer Processing' && <BsThreeDots className='checkmark-icon-size' />}
                      <span className='margin-left-from-icon'>{item.status}</span>
                    </div>
                    <div className="status-right">
                      <GrTextAlignFull />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
