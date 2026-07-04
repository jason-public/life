import React, { useState } from "react";
import { motion } from "motion/react";
import { Play, RotateCw, ExternalLink, Calendar, Eye, Compass, Award, Heart, FileText } from "lucide-react";
import { VideoItem } from "../data/videos";

interface VideoCardProps {
  video: VideoItem;
  onUpdateVideo: (id: string, updatedData: { views: number; date: string; sources?: any[] }) => void;
  onTagClick?: (tag: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onPlayClick?: (video: VideoItem) => void;
  hasNote?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onUpdateVideo,
  onTagClick,
  isBookmarked,
  onToggleBookmark,
  onPlayClick,
  hasNote,
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [sources, setSources] = useState<any[]>([]);

  const handleLiveUpdate = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isUpdating) return;

    setIsUpdating(true);
    setUpdateError(null);

    try {
      const response = await fetch("/api/video/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: video.title, url: video.url }),
      });

      if (!response.ok) {
        throw new Error("서버와의 통신에 실패했습니다.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      onUpdate(data.views, data.date);
      if (data.sources) {
        setSources(data.sources);
      }
    } catch (err: any) {
      console.error(err);
      setUpdateError(err.message || "오류가 발생했습니다.");
    } finally {
      setIsUpdating(false);
    }
  };

  const onUpdate = (views: number, date: string) => {
    onUpdateVideo(video.id, { views, date });
  };

  // Helper function to format view count neatly
  const formatViews = (count: number) => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}만회`;
    }
    return `${count.toLocaleString()}회`;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-[#1e293b]/70 backdrop-blur-md border border-slate-700/40 rounded-[28px] overflow-hidden hover:border-emerald-500/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/5 h-full"
    >
      {/* Thumbnail Area with dynamic play hover */}
      <div 
        onClick={() => onPlayClick && onPlayClick(video)}
        className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Hover play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
          <div className="p-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>

        {/* Video Channel Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-medium text-slate-300 rounded-lg tracking-wide shadow-sm">
          {video.channel}
        </div>

        {/* Note indicator */}
        {hasNote && (
          <div
            className="absolute top-3 right-13 p-2 rounded-xl border border-amber-500/30 bg-amber-500/15 backdrop-blur-md text-amber-400 shadow-sm z-10 cursor-help"
            title="작성된 메모가 있습니다"
          >
            <FileText className="w-3.5 h-3.5" />
          </div>
        )}

        {/* Bookmark (찜하기) Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleBookmark(video.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-xl border backdrop-blur-md transition-all duration-300 shadow-sm z-10 cursor-pointer ${
            isBookmarked
              ? "bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/40 text-rose-400"
              : "bg-slate-950/80 hover:bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
          }`}
          title={isBookmarked ? "찜하기 해제" : "찜하기"}
        >
          <Heart className={`w-3.5 h-3.5 transition-transform duration-300 active:scale-125 ${isBookmarked ? "fill-rose-500 text-rose-500" : ""}`} />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Categories Grid */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {video.categories.map((category) => (
              <span
                key={category}
                className="px-2 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md uppercase"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-sm font-medium leading-relaxed text-slate-100 line-clamp-2 tracking-tight group-hover:text-white transition-colors mb-3">
            {video.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {video.tags.map((tag) => (
              <button
                key={tag}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onTagClick) {
                    onTagClick(tag);
                  }
                }}
                className="text-[10px] text-slate-400 font-mono bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 px-2 py-0.5 rounded-md transition-all cursor-pointer duration-200"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Area with Views & Date, and Update Button */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex flex-col gap-0.5">
              <span className="flex items-center gap-1 text-[11px]">
                <Eye className="w-3 h-3 text-slate-500" />
                조회수 {formatViews(video.views)}
              </span>
              <span className="flex items-center gap-1 text-[11px]">
                <Calendar className="w-3 h-3 text-slate-500" />
                {video.date}
              </span>
            </div>

            {/* Smart Refresh/Grounding Button */}
            <div className="flex gap-1.5">
              <button
                onClick={handleLiveUpdate}
                disabled={isUpdating}
                title="Google AI 실시간 검색으로 조회수 및 날짜 갱신"
                className={`p-2 bg-slate-800 hover:bg-slate-700/80 text-slate-300 hover:text-emerald-400 rounded-xl transition-all duration-300 border border-slate-700/50 ${
                  isUpdating ? "animate-spin text-emerald-400 border-emerald-500/30" : ""
                }`}
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
              
              <a
                href={video.url}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                title="YouTube에서 원본 영상 보기"
                className="p-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 rounded-xl transition-all duration-300 border border-indigo-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Inline Feedback / Citations */}
          {isUpdating && (
            <p className="text-[10px] text-indigo-400 animate-pulse font-sans">
              Google DeepMind AI가 실시간으로 웹을 검색 중입니다...
            </p>
          )}

          {updateError && (
            <p className="text-[10px] text-rose-400 font-sans">
              업데이트 실패: {updateError}
            </p>
          )}

          {sources.length > 0 && (
            <div className="mt-1.5 p-1.5 bg-slate-950/50 rounded-lg border border-slate-800/60">
              <span className="text-[9px] text-emerald-400 font-semibold block mb-0.5 tracking-wider uppercase">
                검색 출처 (AI Grounded):
              </span>
              <ul className="space-y-0.5">
                {sources.slice(0, 2).map((source, index) => (
                  <li key={index} className="truncate text-[9px]">
                    <a
                      href={source.uri}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-indigo-300 flex items-center gap-0.5"
                    >
                      <Compass className="w-2.5 h-2.5 text-slate-500 flex-shrink-0" />
                      <span className="truncate">{source.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
