import React, { useState } from "react";
import { Check, Compass, SlidersHorizontal, ListCollapse, RefreshCw, X, HelpCircle, Heart, Clock, Play, Trash2, Folder, Plus, Tag, Pencil } from "lucide-react";
import { CATEGORIES, VideoItem } from "../data/videos";

export interface BookmarkFolder {
  id: string;
  name: string;
}

interface SidebarProps {
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  onClearCategories: () => void;
  sortBy: string;
  onSortByChange: (option: string) => void;
  isOpen: boolean;
  onClose: () => void;
  showOnlyBookmarks: boolean;
  onToggleBookmarksOnly: () => void;
  bookmarkCount: number;
  recentVideos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
  onClearRecentVideos: () => void;
  folders: BookmarkFolder[];
  selectedFolderId: string | null;
  onSelectFolder: (folderId: string | null) => void;
  onAddFolder: (name: string) => void;
  onDeleteFolder: (folderId: string) => void;
  videoFolderMap: Record<string, string>;
  bookmarkedIds: string[];
  customTags: string[];
  videoCustomTagsMap: Record<string, string[]>;
  selectedCustomTag: string | null;
  onSelectCustomTag: (tag: string | null) => void;
  onAddCustomTag: (tag: string) => void;
  onRenameCustomTag: (oldTag: string, newTag: string) => void;
  onDeleteCustomTag: (tag: string) => void;
  videos: VideoItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedCategories,
  onToggleCategory,
  onClearCategories,
  sortBy,
  onSortByChange,
  isOpen,
  onClose,
  showOnlyBookmarks,
  onToggleBookmarksOnly,
  bookmarkCount,
  recentVideos,
  onSelectVideo,
  onClearRecentVideos,
  folders,
  selectedFolderId,
  onSelectFolder,
  onAddFolder,
  onDeleteFolder,
  videoFolderMap,
  bookmarkedIds,
  customTags,
  videoCustomTagsMap,
  selectedCustomTag,
  onSelectCustomTag,
  onAddCustomTag,
  onRenameCustomTag,
  onDeleteCustomTag,
  videos,
}) => {
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTagName, setNewTagName] = useState("");
  const [editingTag, setEditingTag] = useState<string | null>(null);
  const [editingTagName, setEditingTagName] = useState("");

  const submitNewFolder = () => {
    if (newFolderName.trim()) {
      onAddFolder(newFolderName.trim());
      setNewFolderName("");
      setIsAddingFolder(false);
    }
  };

  const submitNewTag = () => {
    if (newTagName.trim()) {
      onAddCustomTag(newTagName.trim());
      setNewTagName("");
      setIsAddingTag(false);
    }
  };

  const submitRenameTag = (oldTag: string) => {
    if (editingTagName.trim() && editingTagName.trim() !== oldTag) {
      onRenameCustomTag(oldTag, editingTagName.trim());
    }
    setEditingTag(null);
    setEditingTagName("");
  };

  return (
    <>
      {/* Mobile Sidebar Overlay Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden transition-opacity duration-300"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-80 bg-[#111827]/95 lg:bg-[#1e293b]/40 backdrop-blur-xl border-r border-slate-800/80 p-6 transform transition-transform duration-500 ease-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:z-10`}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <span className="text-sm font-semibold tracking-wider text-slate-400">NAVIGATION</span>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Brand/Header */}
        <div className="hidden lg:flex items-center gap-3 mb-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/10">
            <span className="text-white font-bold text-base font-display">W</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-white font-display italic">
              Wisdom<span className="text-emerald-400">Board</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-mono tracking-wider">DEEPMIND INTELLIGENCE</p>
          </div>
        </div>

        {/* Section 1: Filters */}
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-1">
          {/* Section: My Library (찜하기) */}
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 mb-2 font-display">
              <Heart className={`w-3.5 h-3.5 ${showOnlyBookmarks ? "text-rose-400 fill-rose-400" : "text-rose-400"}`} />
              나의 보관함
            </span>
            <button
              onClick={() => {
                onToggleBookmarksOnly();
                onSelectFolder(null);
              }}
              className={`flex items-center justify-between w-full px-4 py-3 text-xs font-medium rounded-xl transition-all duration-300 text-left border cursor-pointer ${
                showOnlyBookmarks && selectedFolderId === null
                  ? "bg-rose-500/10 border-rose-500/40 text-rose-300 shadow-lg shadow-rose-500/5 font-semibold"
                  : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
              }`}
            >
              <div className="flex items-center gap-2">
                <Heart className={`w-4 h-4 ${showOnlyBookmarks && selectedFolderId === null ? "fill-rose-400 text-rose-400" : "text-slate-400"}`} />
                <span>내가 찜한 동영상</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                showOnlyBookmarks && selectedFolderId === null
                  ? "bg-rose-500 text-slate-950"
                  : "bg-slate-800 text-slate-400"
              }`}>
                {bookmarkCount}
              </span>
            </button>

            {/* Folder list */}
            <div className="mt-1 flex flex-col gap-1.5 pl-3 border-l border-slate-800/60">
              {folders.map((folder) => {
                const folderCount = bookmarkedIds.filter((id) => videoFolderMap[id] === folder.id).length;
                const isSelected = showOnlyBookmarks && selectedFolderId === folder.id;

                return (
                  <div key={folder.id} className="flex items-center justify-between group/folder w-full">
                    <button
                      onClick={() => onSelectFolder(folder.id)}
                      className={`flex items-center justify-between flex-1 px-3 py-1.5 text-[11px] rounded-lg transition-all duration-300 text-left cursor-pointer ${
                        isSelected
                          ? "bg-indigo-500/10 text-indigo-300 font-semibold"
                          : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Folder className={`w-3.5 h-3.5 ${isSelected ? "text-indigo-400 fill-indigo-400/20" : "text-slate-600"}`} />
                        <span className="truncate">{folder.name}</span>
                      </div>
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold ${
                        isSelected
                          ? "bg-indigo-500/20 text-indigo-300"
                          : "bg-slate-900 text-slate-650"
                      }`}>
                        {folderCount}
                      </span>
                    </button>
                    <button
                      onClick={() => onDeleteFolder(folder.id)}
                      className="p-1.5 ml-1 text-slate-600 hover:text-rose-400 opacity-0 group-hover/folder:opacity-100 transition-opacity duration-200 hover:bg-slate-900/50 rounded-md cursor-pointer"
                      title="폴더 삭제"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}

              {/* Add folder inline UI */}
              {isAddingFolder ? (
                <div className="flex flex-col gap-1.5 mt-1.5 p-2 bg-slate-900/50 border border-slate-850 rounded-xl">
                  <input
                    type="text"
                    placeholder="새 폴더명..."
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    maxLength={15}
                    className="w-full px-2 py-1 text-[11px] bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        submitNewFolder();
                      } else if (e.key === "Escape") {
                        setIsAddingFolder(false);
                        setNewFolderName("");
                      }
                    }}
                    autoFocus
                  />
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => {
                        setIsAddingFolder(false);
                        setNewFolderName("");
                      }}
                      className="px-2 py-1 text-[9px] text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      취소
                    </button>
                    <button
                      onClick={submitNewFolder}
                      className="px-2 py-1 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-300 text-[9px] font-semibold rounded-md transition-all"
                    >
                      추가
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsAddingFolder(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 mt-1 text-[10px] text-indigo-400/80 hover:text-indigo-300 transition-colors text-left cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>새 폴더 추가</span>
                </button>
              )}
            </div>
          </div>

          {/* Section: Recently Viewed (최근 시청한 영상) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 font-display">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                최근 시청한 영상
              </span>
              {recentVideos.length > 0 && (
                <button
                  onClick={onClearRecentVideos}
                  className="p-1 hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded-lg text-slate-500 hover:text-rose-400 transition-all cursor-pointer"
                  title="전체 기록 삭제"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {recentVideos.length === 0 ? (
              <div className="px-4 py-4 bg-slate-900/20 border border-slate-900 rounded-xl text-center">
                <p className="text-[11px] text-slate-500 font-medium">최근 시청한 영상이 없습니다</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {recentVideos.map((video) => (
                  <button
                    key={`recent-${video.id}`}
                    onClick={() => onSelectVideo(video)}
                    className="flex items-center gap-3 w-full p-2 bg-slate-900/30 hover:bg-slate-900/80 border border-slate-850 hover:border-indigo-500/30 rounded-xl transition-all duration-300 text-left cursor-pointer group"
                  >
                    <div className="relative aspect-video w-16 rounded-lg overflow-hidden bg-slate-950 shrink-0 border border-slate-800/80">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[11px] font-medium text-slate-300 group-hover:text-indigo-300 transition-colors line-clamp-1 leading-tight mb-0.5">
                        {video.title}
                      </h4>
                      <p className="text-[9px] text-slate-500 font-mono tracking-wide">{video.channel}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 font-display">
                <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                카테고리 필터 (중복 가능)
              </span>
              {selectedCategories.length > 0 && (
                <button
                  onClick={onClearCategories}
                  className="text-[10px] font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
                >
                  필터 초기화
                </button>
              )}
            </div>

            {/* Category selection tag list (Toss style buttons) */}
            <div className="flex flex-col gap-2">
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <button
                    key={category}
                    onClick={() => onToggleCategory(category)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-xs font-medium rounded-xl transition-all duration-300 text-left border ${
                      isSelected
                        ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-300 shadow-lg shadow-indigo-500/2 font-semibold"
                        : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
                    }`}
                  >
                    <span>{category}</span>
                    {isSelected && (
                      <div className="p-0.5 bg-indigo-500 text-slate-950 rounded-full">
                        <Check className="w-3 h-3 stroke-[3px]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Sort */}
          <div>
            <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 mb-4 font-display">
              <ListCollapse className="w-3.5 h-3.5 text-rose-400" />
              정렬 정렬기준
            </span>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: "date-desc", label: "최신 등록일순" },
                { id: "date-asc", label: "오래된 등록일순" },
                { id: "views-desc", label: "조회수 높은순" },
                { id: "alphabetical", label: "가나다 사전순" },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => onSortByChange(option.id)}
                  className={`w-full px-4 py-3 text-xs text-left rounded-xl transition-all duration-300 border ${
                    sortBy === option.id
                      ? "bg-rose-500/10 border-rose-500/40 text-rose-300 font-semibold"
                      : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: My Tags Management (나의 태그 관리) */}
          <div className="border-t border-slate-850 pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 font-display">
                <Tag className="w-3.5 h-3.5 text-indigo-400" />
                나의 태그 필터 & 관리
              </span>
              {selectedCustomTag && (
                <button
                  onClick={() => onSelectCustomTag(null)}
                  className="text-[10px] font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
                >
                  필터 해제
                </button>
              )}
            </div>

            {/* Custom Tags List with filter toggle & CRUD inline buttons */}
            <div className="flex flex-col gap-2">
              {customTags.map((tag) => {
                const tagCount = videos.filter((v) => (videoCustomTagsMap[v.id] || []).includes(tag)).length;
                const isSelected = selectedCustomTag === tag;
                const isEditing = editingTag === tag;

                return (
                  <div key={tag} className="group/tag flex items-center justify-between gap-1 w-full">
                    {isEditing ? (
                      <div className="flex items-center gap-1.5 flex-1 p-1 bg-slate-900/50 border border-slate-800 rounded-xl">
                        <input
                          type="text"
                          value={editingTagName}
                          onChange={(e) => setEditingTagName(e.target.value)}
                          maxLength={15}
                          className="flex-1 px-2 py-1 text-[11px] bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-indigo-500/50"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              submitRenameTag(tag);
                            } else if (e.key === "Escape") {
                              setEditingTag(null);
                            }
                          }}
                          autoFocus
                        />
                        <button
                          onClick={() => submitRenameTag(tag)}
                          className="p-1.5 text-emerald-400 hover:bg-slate-900 rounded-md cursor-pointer flex items-center justify-center"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setEditingTag(null)}
                          className="p-1.5 text-slate-400 hover:bg-slate-900 rounded-md cursor-pointer flex items-center justify-center"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => onSelectCustomTag(isSelected ? null : tag)}
                          className={`flex items-center justify-between flex-1 px-4 py-3 text-xs font-medium rounded-xl transition-all duration-300 text-left border cursor-pointer ${
                            isSelected
                              ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-300 shadow-lg shadow-indigo-500/2 font-semibold"
                              : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
                          }`}
                        >
                          <span className="truncate">#{tag}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            isSelected
                              ? "bg-indigo-500 text-slate-950"
                              : "bg-slate-800 text-slate-400"
                          }`}>
                            {tagCount}
                          </span>
                        </button>
                        
                        {/* Edit and Delete Action Buttons (visible on hover) */}
                        <div className="flex items-center opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200">
                          <button
                            onClick={() => {
                              setEditingTag(tag);
                              setEditingTagName(tag);
                            }}
                            className="p-1.5 text-slate-500 hover:text-indigo-400 hover:bg-slate-900/50 rounded-md cursor-pointer"
                            title="태그 수정"
                          >
                            <Pencil className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => onDeleteCustomTag(tag)}
                            className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-900/50 rounded-md cursor-pointer"
                            title="태그 삭제"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}

              {/* Add tag inline UI */}
              {isAddingTag ? (
                <div className="flex flex-col gap-1.5 mt-1 p-2 bg-slate-900/50 border border-slate-850 rounded-xl">
                  <input
                    type="text"
                    placeholder="새 태그명..."
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    maxLength={15}
                    className="w-full px-2 py-1 text-[11px] bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        submitNewTag();
                      } else if (e.key === "Escape") {
                        setIsAddingTag(false);
                        setNewTagName("");
                      }
                    }}
                    autoFocus
                  />
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => {
                        setIsAddingTag(false);
                        setNewTagName("");
                      }}
                      className="px-2 py-1 text-[9px] text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      취소
                    </button>
                    <button
                      onClick={submitNewTag}
                      className="px-2 py-1 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-300 text-[9px] font-semibold rounded-md transition-all"
                    >
                      추가
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsAddingTag(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 mt-1 text-[10px] text-indigo-400/80 hover:text-indigo-300 transition-colors text-left cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>새 태그 추가</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Footer Info */}
        <div className="pt-6 mt-6 border-t border-slate-900/80">
          <div className="flex items-start gap-2.5 p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-xl">
            <HelpCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                스마트 AI 가이드
              </span>
              <span className="text-[10px] text-slate-500 leading-normal block">
                비디오 카드 안의 새로고침(<RefreshCw className="w-2.5 h-2.5 inline" />) 버튼을 통해 실제 YouTube 정보로 실시간 업데이트를 진행할 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
