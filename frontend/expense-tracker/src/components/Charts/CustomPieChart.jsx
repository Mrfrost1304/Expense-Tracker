import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  return (
    <div className="relative w-full h-[380px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{
              pointerEvents: "none",
              zIndex: 50,
            }}
          />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>

      {showTextAnchor && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-0">
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-xl font-semibold text-gray-800">
            ${totalAmount?.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomPieChart;
