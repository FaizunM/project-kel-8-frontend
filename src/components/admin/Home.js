import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

ChartJs.register(LineElement, PointElement, LinearScale, Title, CategoryScale, );

export default function Home() {
  return (
    <div className="w-full h-screen px-16 py-16 overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="w-full h-auto mt-16">
        <div className="w-full h-auto grid grid-cols-3 items-center gap-3">
          <div className="w-full h-auto p-4 bg-red-500 rounded-lg text-white">
            <h3 className="text-xl font-semibold text-gray-100">
              Jumlah Peserta
            </h3>
            <div className="w-auto h-auto text-3xl font-bold mt-4">
              2.000 Siswa
            </div>
          </div>
          <div className="w-full h-auto p-4 bg-green-500 rounded-lg text-white">
            <h3 className="text-xl font-semibold text-gray-100">
              Persentase lulus
            </h3>
            <div className="w-auto h-auto text-3xl font-bold mt-4">97.5%</div>
          </div>
        </div>
        <div className="w-full h-auto grid grid-cols-2">
          <div className="w-full h-auto p-4 bg-white shadow-default rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-500">
              Statistik nilai siswa
            </h3>
            <Chart
              type="line"
              data={{
                labels: [
                  "Jun",
                  "Jul",
                  "Aug",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Jun",
                  "Jul",
                  "Aug",
                ],
                datasets: [
                  {
                    id: 1,
                    label: "",
                    data: [5, 6, 7, 5, 6, 7, 5, 6, 7],
                    tension: 0.25,
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                    beginAtZero: true,
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                    beginAtZero: true,
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      font: {
                        family: "'Poppins', 'Helvetica','Arial', 'sans-serif",
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
