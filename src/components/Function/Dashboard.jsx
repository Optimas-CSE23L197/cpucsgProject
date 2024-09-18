import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import '../Style/Dashboard.css'

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  // Example chart data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Project Data',
        data: [12, 19, 3, 5, 2, 3, 7, 6, 10, 15, 18, 20],
        backgroundColor: '#007bff',
        borderColor: '#0056b3',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboardadmin">
      <div className="dashboard-body">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-content">
          <div className="chart-card">
            <h2>User Activity</h2>
            <div className="chart-container">
              <Line data={data} />
            </div>
          </div>
          <div className="chart-card">
            <h2>Department Overview</h2>
            <div className="chart-container">
              <Pie data={data} />
            </div>
          </div>
          <div className="chart-card">
            <h2>Project Status</h2>
            <div className="chart-container">
              <Doughnut data={data} />
            </div>
          </div>
          {/* Add more chart cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
