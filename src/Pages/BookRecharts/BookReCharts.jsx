/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const App = () => {

  const [localReadData, setLocalReadData] = useState([]);

    useEffect(() => {

      const storedData = JSON.parse(localStorage.getItem("Read Books"));
    if (storedData) {
      setLocalReadData(storedData);
    }

    },[])

  return (
    <BarChart
      width={1120}
      height={300}
      data={localReadData}
      margin={{
        top: 70,
        right: 30,
        left: 200,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {localReadData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
}


export default App;
