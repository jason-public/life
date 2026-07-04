import React from "react";
import { motion } from "motion/react";
import { Award, Compass, Eye, Sparkles, TrendingUp, Zap } from "lucide-react";
import { VideoItem } from "../data/videos";

interface StatsDashboardProps {
  videos: VideoItem[];
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ videos }) => {
  // Aggregate stats
  const totalVideos = videos.length;
  const totalViews = videos.reduce((sum, v) => sum + v.views, 0);
  
  // Calculate top category
  const categoryCounts: { [key: string]: number } = {};
  videos.forEach((video) => {
    video.categories.forEach((cat) => {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });
  });

  let topCategory = "N/A";
  let maxCount = 0;
  Object.entries(categoryCounts).forEach(([cat, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topCategory = cat;
    }
  });

  const formatBigNumber = (num: number) => {
    if (num >= 100000000) {
      return `${(num / 100000000).toFixed(1)}억회`;
    }
    if (num >= 10000) {
      return `${(num / 10000).toFixed(1)}만회`;
    }
    return `${num.toLocaleString()}회`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {/* Total Curations Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="p-5 bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/20 border border-slate-700/40 rounded-[24px] relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300 shadow-md"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
        <div className="flex items-center gap-3 mb-2.5">
          <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-slate-400 tracking-wider font-display">TOTAL CURATIONS</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-white font-display">
            {totalVideos}
          </span>
          <span className="text-xs text-slate-400">개 동영상</span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 font-mono">엄선된 유튜브 지혜 큐레이션</p>
      </motion.div>

      {/* Core Topic Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="p-5 bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/20 border border-slate-700/40 rounded-[24px] relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300 shadow-md"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors" />
        <div className="flex items-center gap-3 mb-2.5">
          <div className="p-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-slate-400 tracking-wider font-display">CORE FOCUS</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight text-white font-display truncate max-w-full">
            {topCategory}
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 font-mono">주요 분석 및 수집 집중 테마</p>
      </motion.div>

      {/* AI Search Engine Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="p-5 bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/20 border border-slate-700/40 rounded-[24px] relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-colors" />
        <div className="flex items-center gap-3 mb-2.5">
          <div className="p-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-slate-400 tracking-wider font-display">AI GROUNDING STATUS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
          <span className="text-base font-semibold text-white tracking-tight font-display">
            Active Grounding
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 font-mono">Google Search 라이브 연동 중</p>
      </motion.div>
    </div>
  );
};
