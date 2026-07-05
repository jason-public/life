import React from "react";
import { motion } from "motion/react";
import { Shuffle, PieChart as ChartIcon } from "lucide-react";
import { VideoItem } from "../data/videos";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

interface StatsDashboardProps {
  videos: VideoItem[];
  onShuffle?: () => void;
}

const COLORS = [
  "#6366f1", // Indigo
  "#10b981", // Emerald
  "#8b5cf6", // Violet
  "#06b6d4", // Cyan
  "#f59e0b", // Amber
  "#f43f5e", // Rose
];

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ videos, onShuffle }) => {
  // Aggregate stats
  const totalVideos = videos.length;

  // Aggregate categories
  const categoryCounts: Record<string, number> = {};
  videos.forEach((v) => {
    v.categories.forEach((cat) => {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });
  });

  const chartData = Object.entries(categoryCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value); // Sort descending

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-800 p-2.5 rounded-xl shadow-xl backdrop-blur-md z-50">
          <p className="text-xs font-semibold text-slate-200">{payload[0].name}</p>
          <p className="text-[11px] font-mono text-indigo-400 mt-1">
            {payload[0].value}개 동영상
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="stats-dashboard" className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
      {/* Category Distribution Pie Chart Card */}
      <motion.div
        id="stats-card-chart"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.13, duration: 0.4 }}
        className="p-5 bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/20 border border-slate-700/40 rounded-[24px] relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300 shadow-md min-h-[170px] flex flex-col justify-between"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl transition-colors" />
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
            <ChartIcon className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-slate-400 tracking-wider font-sans">영상 통계</span>
        </div>

        <div className="flex items-center gap-4 h-[90px]">
          {/* Recharts Pie Area */}
          <div className="w-[100px] h-[90px] relative flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={22}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Custom Scrollable Elegant Legend */}
          <div className="flex-1 flex flex-col gap-1.5 max-h-[90px] overflow-y-auto pr-1 scrollbar-none">
            {chartData.slice(0, 6).map((entry, index) => (
              <div key={entry.name} className="flex items-center justify-between text-[11px] gap-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-slate-300 font-medium truncate">{entry.name}</span>
                </div>
                <span className="text-slate-500 font-mono text-[10px] ml-1">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Shuffle Videos Interactive Bento Card */}
      {onShuffle && (
        <motion.button
          id="stats-card-shuffle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            delay: 0.15,
          }}
          onClick={onShuffle}
          className="p-5 bg-gradient-to-br from-[#1e293b]/40 to-[#0f172a]/10 border border-slate-700/40 rounded-[24px] relative overflow-hidden group hover:border-indigo-500/40 hover:from-indigo-500/5 hover:to-transparent text-left transition-all duration-300 shadow-md min-h-[170px] flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all duration-500 group-hover:scale-125" />
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Shuffle className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 tracking-wider font-display">RANDOM SHUFFLE</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-white leading-tight group-hover:text-indigo-300 transition-colors">
                지혜 리스트 무작위 섞기
              </span>
              <span className="text-[11px] text-slate-400 leading-snug">
                클릭하여 영상 순서를 뒤섞고 새로운 지혜를 탐색해보세요.
              </span>
            </div>
          </div>
          <p className="text-[11px] text-indigo-400/70 group-hover:text-indigo-400 font-mono mt-3 flex items-center gap-1 transition-colors">
            <span>SHUFFLE BOARD NOW</span>
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </p>
        </motion.button>
      )}
    </div>
  );
};
