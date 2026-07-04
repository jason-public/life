import React, { useState, useRef, useEffect, useMemo } from "react";
import { Sidebar, BookmarkFolder } from "./components/Sidebar";
import { StatsDashboard } from "./components/StatsDashboard";
import { VideoCard } from "./components/VideoCard";
import { INITIAL_VIDEOS, VideoItem } from "./data/videos";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Search, FilterX, HelpCircle, Compass, Sparkles, Hash, Tag, X, Play, Calendar, Eye, ExternalLink, Heart, Share2, Check, FileText, Folder } from "lucide-react";

const POPULAR_KEYWORDS = [
  "니체", "자존감", "인간관계", "대화법", "성공습관", "처세술", "멘탈관리", "동기부여", "지혜", "위로"
];

const POPULAR_HASHTAGS = [
  "니체", "자존감", "대화법", "인간관계", "성공", "멘탈", "처세", "자기계발", "동기부여", "인생조언"
];

export default function App() {
  const [videos, setVideos] = useState<VideoItem[]>(INITIAL_VIDEOS);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Bookmark (찜하기) state initialized from localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("wisdom_board_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load bookmarks", e);
      return [];
    }
  });

  // Folders state initialized from localStorage with some nice defaults
  const [folders, setFolders] = useState<BookmarkFolder[]>(() => {
    try {
      const saved = localStorage.getItem("wisdom_board_folders");
      return saved ? JSON.parse(saved) : [
        { id: "1", name: "인간관계" },
        { id: "2", name: "자존감" },
        { id: "3", name: "동기부여" }
      ];
    } catch (e) {
      console.error("Failed to load folders", e);
      return [
        { id: "1", name: "인간관계" },
        { id: "2", name: "자존감" },
        { id: "3", name: "동기부여" }
      ];
    }
  });

  // Video-Folder mapping initialized from localStorage
  const [videoFolderMap, setVideoFolderMap] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem("wisdom_board_video_folders");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to load video folder map", e);
      return {};
    }
  });

  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);

  // Recently Viewed state initialized from localStorage
  const [recentVideoIds, setRecentVideoIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("wisdom_board_recently_viewed");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load recently viewed videos", e);
      return [];
    }
  });

  // Personal notes state initialized from localStorage
  const [videoNotes, setVideoNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem("wisdom_board_notes");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to load video notes", e);
      return {};
    }
  });

  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [localNote, setLocalNote] = useState("");
  const [showNoteEditor, setShowNoteEditor] = useState(false);

  useEffect(() => {
    setCopied(false);
    if (activeVideo) {
      const existingNote = videoNotes[activeVideo.id] || "";
      setLocalNote(existingNote);
      setShowNoteEditor(!!existingNote);
    } else {
      setLocalNote("");
      setShowNoteEditor(false);
    }
  }, [activeVideo]);

  const handleSaveNote = (id: string, noteText: string) => {
    setVideoNotes((prev) => {
      const updated = { ...prev };
      if (noteText.trim() === "") {
        delete updated[id];
      } else {
        updated[id] = noteText;
      }
      try {
        localStorage.setItem("wisdom_board_notes", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save video notes", e);
      }
      return updated;
    });
  };

  const handleChangeNote = (text: string) => {
    if (!activeVideo) return;
    setLocalNote(text);
    handleSaveNote(activeVideo.id, text);
  };

  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  // Derive active VideoItem structures for Recently Viewed
  const recentVideos = useMemo(() => {
    return recentVideoIds
      .map((id) => videos.find((v) => v.id === id))
      .filter((v): v is VideoItem => !!v);
  }, [recentVideoIds, videos]);

  // Derive similar videos based on matching categories (up to 3, excluding active video itself)
  const similarVideos = useMemo(() => {
    if (!activeVideo) return [];
    return videos
      .filter((video) => video.id !== activeVideo.id)
      .map((video) => {
        const sharedCount = video.categories.filter((cat) =>
          activeVideo.categories.includes(cat)
        ).length;
        return { video, sharedCount };
      })
      .filter((item) => item.sharedCount > 0)
      .sort((a, b) => b.sharedCount - a.sharedCount || b.video.views - a.video.views)
      .map((item) => item.video)
      .slice(0, 3);
  }, [activeVideo, videos]);

  // Autocomplete suggestions states
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Auto-complete dropdown list calculation
  const suggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const results: { type: "title" | "tag"; value: string; label: string }[] = [];
    const addedValues = new Set<string>();

    const isHashQuery = query.startsWith("#");
    const cleanQuery = isHashQuery ? query.slice(1) : query;

    if (cleanQuery.length === 0) return [];

    // 1. Tag matching
    videos.forEach((video) => {
      video.tags.forEach((tag) => {
        const tagLower = tag.toLowerCase();
        if (tagLower.includes(cleanQuery)) {
          const value = `#${tag}`;
          if (!addedValues.has(value)) {
            addedValues.add(value);
            results.push({ type: "tag", value, label: `#${tag}` });
          }
        }
      });
    });

    // 2. Title matching
    videos.forEach((video) => {
      const titleLower = video.title.toLowerCase();
      if (titleLower.includes(cleanQuery)) {
        const value = video.title;
        if (!addedValues.has(value)) {
          addedValues.add(value);
          results.push({ type: "title", value, label: video.title });
        }
      }
    });

    // Show up to 6 results
    return results.slice(0, 6);
  }, [searchQuery, videos]);

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsDropdownOpen(true);
      setActiveSuggestionIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIsDropdownOpen(true);
      setActiveSuggestionIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        e.preventDefault();
        setSearchQuery(suggestions[activeSuggestionIndex].value);
        setIsDropdownOpen(false);
        setActiveSuggestionIndex(-1);
      }
    } else if (e.key === "Escape") {
      setIsDropdownOpen(false);
      setActiveSuggestionIndex(-1);
    }
  };

  // Toggle bookmark handler
  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const isBookmarked = prev.includes(id);
      const updated = isBookmarked ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("wisdom_board_bookmarks", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save bookmarks", e);
      }
      return updated;
    });
  };

  // Select video handler (Plays video and adds to Recently Viewed)
  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setRecentVideoIds((prev) => {
      const filtered = prev.filter((id) => id !== video.id);
      const updated = [video.id, ...filtered].slice(0, 5);
      try {
        localStorage.setItem("wisdom_board_recently_viewed", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save recently viewed videos", e);
      }
      return updated;
    });
  };

  // Clear all recently viewed history
  const handleClearRecentVideos = () => {
    setRecentVideoIds([]);
    try {
      localStorage.removeItem("wisdom_board_recently_viewed");
    } catch (e) {
      console.error("Failed to clear recently viewed videos", e);
    }
  };

  const handleAddFolder = (name: string) => {
    setFolders((prev) => {
      const newFolder: BookmarkFolder = {
        id: Date.now().toString(),
        name,
      };
      const updated = [...prev, newFolder];
      try {
        localStorage.setItem("wisdom_board_folders", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save folders", e);
      }
      return updated;
    });
  };

  const handleDeleteFolder = (folderId: string) => {
    setFolders((prev) => {
      const updated = prev.filter((f) => f.id !== folderId);
      try {
        localStorage.setItem("wisdom_board_folders", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save folders", e);
      }
      return updated;
    });

    setVideoFolderMap((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key) => {
        if (updated[key] === folderId) {
          delete updated[key];
        }
      });
      try {
        localStorage.setItem("wisdom_board_video_folders", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save video folder map", e);
      }
      return updated;
    });

    if (selectedFolderId === folderId) {
      setSelectedFolderId(null);
    }
  };

  const handleAssignVideoToFolder = (videoId: string, folderId: string | null) => {
    setVideoFolderMap((prev) => {
      const updated = { ...prev };
      if (folderId === null) {
        delete updated[videoId];
      } else {
        updated[videoId] = folderId;
      }
      try {
        localStorage.setItem("wisdom_board_video_folders", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save video folder map", e);
      }
      return updated;
    });
  };

  const handleSelectFolder = (folderId: string | null) => {
    setSelectedFolderId(folderId);
    setShowOnlyBookmarks(true);
  };

  // Toggle category on/off (Supports multi-select)
  const handleToggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleClearCategories = () => {
    setSelectedCategories([]);
  };

  // Live state callback when card invokes Gemini API update
  const handleUpdateVideo = (id: string, updatedData: { views: number; date: string }) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id
          ? { ...video, views: updatedData.views, date: updatedData.date }
          : video
      )
    );
  };

  // Parse "YYYY. M. D." string back to a Date object for chronological sorting
  const parseVideoDate = (dateStr: string): Date => {
    const parts = dateStr
      .split(".")
      .map((p) => p.trim())
      .filter(Boolean);
    if (parts.length >= 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // JS Date months are 0-indexed
      const day = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return new Date(0); // Fallback
  };

  // Filter videos based on selection and search query
  const filteredVideos = videos.filter((video) => {
    // If show only bookmarks is toggled, check if video is bookmarked
    if (showOnlyBookmarks) {
      if (!bookmarkedIds.includes(video.id)) {
        return false;
      }
      if (selectedFolderId && videoFolderMap[video.id] !== selectedFolderId) {
        return false;
      }
    }

    // Category match: Show if no category filter is active, OR if video shares any of the active categories
    const matchesCategory =
      selectedCategories.length === 0 ||
      video.categories.some((cat) => selectedCategories.includes(cat));

    const query = searchQuery.trim().toLowerCase();
    if (query === "") {
      return matchesCategory;
    }

    // Support hashtag search specifically if query starts with '#'
    if (query.startsWith("#")) {
      const tagQuery = query.substring(1);
      // Check if tagQuery matches any video tag or category
      const matchesHashtag =
        video.tags.some((tag) => tag.toLowerCase().includes(tagQuery)) ||
        video.categories.some((cat) => cat.toLowerCase().includes(tagQuery));
      return matchesCategory && matchesHashtag;
    }

    // General keyword search matches title, channel, tags, or categories
    const matchesKeyword =
      video.title.toLowerCase().includes(query) ||
      video.channel.toLowerCase().includes(query) ||
      video.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      video.categories.some((cat) => cat.toLowerCase().includes(query));

    return matchesCategory && matchesKeyword;
  });

  // Sort videos
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (sortBy === "views-desc") {
      return b.views - a.views;
    }
    if (sortBy === "alphabetical") {
      return a.title.localeCompare(b.title, "ko");
    }
    if (sortBy === "date-asc") {
      return parseVideoDate(a.date).getTime() - parseVideoDate(b.date).getTime();
    }
    // Default to date-desc (latest first)
    return parseVideoDate(b.date).getTime() - parseVideoDate(a.date).getTime();
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans overflow-x-hidden">
      {/* Sidebar Component (Handles filters & sorting) */}
      <Sidebar
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
        onClearCategories={handleClearCategories}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        showOnlyBookmarks={showOnlyBookmarks}
        onToggleBookmarksOnly={() => setShowOnlyBookmarks((prev) => !prev)}
        bookmarkCount={bookmarkedIds.length}
        recentVideos={recentVideos}
        onSelectVideo={handleSelectVideo}
        onClearRecentVideos={handleClearRecentVideos}
        folders={folders}
        selectedFolderId={selectedFolderId}
        onSelectFolder={handleSelectFolder}
        onAddFolder={handleAddFolder}
        onDeleteFolder={handleDeleteFolder}
        videoFolderMap={videoFolderMap}
        bookmarkedIds={bookmarkedIds}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Responsive Header Bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-slate-950/70 backdrop-blur-md border-b border-slate-900/60 lg:border-none">
          <div className="flex items-center gap-3">
            {/* Hamburger menu for mobile screen */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800/80 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="text-sm font-semibold text-slate-300 tracking-tight lg:hidden">
              YouTube Wisdom Board
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-semibold text-emerald-400 font-mono tracking-wider">
              <Sparkles className="w-3 h-3 text-emerald-400 animate-spin" />
              DEEPMIND INTELLIGENCE ENGAGED
            </span>
          </div>
        </header>

        {/* Inner Scrollable Scroll Box */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
          {/* Hero Welcome banner */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 font-display">
              지혜의 집약체, 인생 조언 보드
            </h1>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              Google DeepMind의 정교함을 담은 슬레이트 인디고 테마와 토스(Toss) 스타일의 미니멀 인터페이스로 구현한 유튜브 인생학 동영상 큐레이션입니다. 대화법, 인간관계, 성공을 향한 최고의 에센스를 경험해보세요.
            </p>
          </div>

          {/* Bento Stats Summary dashboard overlay */}
          <StatsDashboard videos={videos} />

          {/* Smart Search & Exploration Center */}
          <div className="bg-[#1e293b]/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 mb-8 shadow-md">
            <div className="flex flex-col lg:flex-row items-stretch gap-6">
              
              {/* Left Column: Input and search mode indicators */}
              <div className="flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Search className="w-4 h-4 text-indigo-400" />
                    인텔리전트 통합 검색 센터
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    일반 단어 검색 시 <strong className="text-emerald-400">핵심 키워드 검색</strong>이 자동 작동하며, 단어 앞에 <strong className="text-indigo-400">#</strong>을 붙이거나 우측 단어/해시태그를 탭하면 <strong className="text-indigo-400">해시태그 검색</strong>이 활성화됩니다.
                  </p>
                </div>

                <div className="relative w-full" ref={searchContainerRef}>
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    {searchQuery.trim().startsWith("#") ? (
                      <span className="text-indigo-400 font-bold font-mono text-sm">#</span>
                    ) : (
                      <Search className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="키워드, 채널, 태그로 지혜를 검색해보세요... (예: 니체, #자존감)"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsDropdownOpen(true);
                      setActiveSuggestionIndex(-1);
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    onKeyDown={handleKeyDown}
                    className={`w-full pl-10 pr-28 py-3.5 text-xs bg-slate-950 border rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none transition-all duration-300 font-sans ${
                      searchQuery.trim().startsWith("#")
                        ? "border-indigo-500/50 shadow-lg shadow-indigo-500/5 focus:border-indigo-500"
                        : searchQuery.trim() !== ""
                        ? "border-emerald-500/50 shadow-lg shadow-emerald-500/5 focus:border-emerald-500"
                        : "border-slate-800 focus:border-slate-700"
                    }`}
                  />
                  
                  {/* Status Badge inside Input */}
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {searchQuery.trim() !== "" && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setIsDropdownOpen(false);
                          setActiveSuggestionIndex(-1);
                        }}
                        className="text-[10px] text-slate-400 hover:text-slate-200 px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded-md transition-all font-mono"
                      >
                        CLR
                      </button>
                    )}
                    <span className={`text-[9px] font-mono font-semibold px-2 py-1 rounded-md tracking-wider ${
                      searchQuery.trim().startsWith("#")
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                        : searchQuery.trim() !== ""
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-slate-900 text-slate-500 border border-slate-800"
                    }`}>
                      {searchQuery.trim().startsWith("#")
                        ? "HASH"
                        : searchQuery.trim() !== ""
                        ? "KEY"
                        : "ALL"}
                    </span>
                  </div>

                  {/* Live Suggestions Autocomplete Dropdown */}
                  <AnimatePresence>
                    {isDropdownOpen && suggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 right-0 top-full mt-2 bg-[#0f172a]/95 border border-slate-800/90 rounded-2xl shadow-2xl z-40 overflow-hidden backdrop-blur-md max-h-64 overflow-y-auto"
                      >
                        <div className="p-1.5 flex flex-col gap-0.5">
                          {suggestions.map((suggestion, index) => {
                            const isActive = index === activeSuggestionIndex;
                            return (
                              <button
                                key={`${suggestion.type}-${suggestion.value}-${index}`}
                                onClick={() => {
                                  setSearchQuery(suggestion.value);
                                  setIsDropdownOpen(false);
                                  setActiveSuggestionIndex(-1);
                                }}
                                onMouseEnter={() => setActiveSuggestionIndex(index)}
                                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                                  isActive
                                    ? "bg-slate-900 text-white"
                                    : "text-slate-300 hover:bg-slate-900/60"
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  {suggestion.type === "tag" ? (
                                    <Hash className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                                  ) : (
                                    <Play className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  )}
                                  <span className="text-xs font-medium truncate">
                                    {suggestion.label}
                                  </span>
                                </div>
                                <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-500 uppercase tracking-wider">
                                  {suggestion.type === "tag" ? "태그" : "제목"}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Quick Status Pill Filters indicator */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-900/40">
                  <span className="text-[11px] text-slate-500 font-mono">카테고리 필터 상태:</span>
                  {selectedCategories.length === 0 ? (
                    <span className="px-2.5 py-1 text-[11px] bg-slate-900 border border-slate-800 text-slate-400 rounded-lg">
                      전체 카테고리 활성화
                    </span>
                  ) : (
                    selectedCategories.map((cat) => (
                      <span
                        key={cat}
                        onClick={() => handleToggleCategory(cat)}
                        className="px-2.5 py-1 text-[11px] bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-lg flex items-center gap-1 cursor-pointer hover:bg-indigo-500/20 transition-all font-semibold"
                      >
                        {cat}
                        <span className="text-[10px] text-indigo-500 hover:text-indigo-300">×</span>
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Right Column: Recommended Keywords & Hashtags Navigation grids */}
              <div className="lg:w-[380px] border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-6 flex flex-col gap-4 justify-between">
                
                {/* Core Keywords navigation row */}
                <div>
                  <h4 className="text-[11px] font-semibold text-emerald-400 mb-2 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    인기 핵심 키워드 검색
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {POPULAR_KEYWORDS.map((keyword) => {
                      const isActive = searchQuery === keyword;
                      return (
                        <button
                          key={keyword}
                          onClick={() => {
                            if (isActive) {
                              setSearchQuery("");
                            } else {
                              setSearchQuery(keyword);
                            }
                          }}
                          className={`text-[10px] px-2.5 py-1.5 rounded-xl transition-all duration-300 border font-medium cursor-pointer ${
                            isActive
                              ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-semibold"
                              : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-900"
                          }`}
                        >
                          {keyword}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hashtags navigation row */}
                <div>
                  <h4 className="text-[11px] font-semibold text-indigo-400 mb-2 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    추천 해시태그 검색
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {POPULAR_HASHTAGS.map((tag) => {
                      const hashStr = `#${tag}`;
                      const isActive = searchQuery === hashStr;
                      return (
                        <button
                          key={tag}
                          onClick={() => {
                            if (isActive) {
                              setSearchQuery("");
                            } else {
                              setSearchQuery(hashStr);
                            }
                          }}
                          className={`text-[10px] px-2.5 py-1.5 rounded-xl transition-all duration-300 border font-mono cursor-pointer ${
                            isActive
                              ? "bg-indigo-500/15 border-indigo-500/50 text-indigo-300 font-semibold shadow-md shadow-indigo-500/5"
                              : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-900"
                          }`}
                        >
                          #{tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Grid of Bento Cards */}
          <AnimatePresence mode="popLayout">
            {sortedVideos.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {sortedVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onUpdateVideo={handleUpdateVideo}
                    onTagClick={(tag) => setSearchQuery(`#${tag}`)}
                    isBookmarked={bookmarkedIds.includes(video.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onPlayClick={handleSelectVideo}
                    hasNote={!!videoNotes[video.id]}
                  />
                ))}
              </motion.div>
            ) : (
              /* No Results state card */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-12 text-center bg-slate-900/30 border border-slate-800/80 rounded-2xl max-w-lg mx-auto mt-12 flex flex-col items-center gap-4"
              >
                <div className="p-4 bg-slate-950 border border-slate-800 text-slate-600 rounded-full">
                  <FilterX className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200 mb-1">
                    {showOnlyBookmarks && bookmarkedIds.length === 0
                      ? "찜한 동영상이 없습니다"
                      : "일치하는 결과가 없습니다"}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal max-w-sm">
                    {showOnlyBookmarks && bookmarkedIds.length === 0
                      ? "마음에 드는 영상 카드의 하트 버튼을 눌러 소중한 지혜를 보관함에 담아보세요."
                      : "선택한 필터나 검색어에 맞는 지혜 비디오를 찾지 못했습니다. 카테고리 필터를 초기화하거나 검색어를 변경해보세요."}
                  </p>
                </div>
                {showOnlyBookmarks && bookmarkedIds.length === 0 ? (
                  <button
                    onClick={() => setShowOnlyBookmarks(false)}
                    className="px-4 py-2 bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-rose-500/10 cursor-pointer"
                  >
                    전체 동영상 보기
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSearchQuery("");
                      setShowOnlyBookmarks(false);
                    }}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/10 cursor-pointer"
                  >
                    필터 전체 초기화
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-3xl bg-[#0f172a]/95 border border-slate-800/90 rounded-[28px] overflow-hidden shadow-2xl flex flex-col z-10"
            >
              {/* Top bar with Channel & Close */}
              <div className="px-6 py-4 border-b border-slate-900 flex items-center justify-between bg-slate-950/40">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 rounded-lg">
                    {activeVideo.channel}
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-lg transition-all duration-300 cursor-pointer hover:rotate-90"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* YouTube Iframe Section */}
              <div className="relative aspect-video w-full bg-slate-950">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                  title={activeVideo.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Detail Content Section */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h2 className="text-base font-semibold text-white leading-snug tracking-tight mb-2">
                    {activeVideo.title}
                  </h2>
                  <div className="flex flex-wrap gap-1.5">
                    {activeVideo.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSearchQuery(`#${tag}`);
                          setActiveVideo(null);
                        }}
                        className="text-[10px] text-slate-400 font-mono bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 px-2 py-0.5 rounded-md transition-all cursor-pointer"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      조회수 {activeVideo.views >= 10000 ? `${(activeVideo.views / 10000).toFixed(1)}만회` : `${activeVideo.views.toLocaleString()}회`}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {activeVideo.date}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Personal Note Toggle Button */}
                    <button
                      onClick={() => setShowNoteEditor((prev) => !prev)}
                      className={`px-4 py-2 text-xs font-medium rounded-xl border flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        showNoteEditor
                          ? "bg-amber-500/10 border-amber-500/40 text-amber-300 shadow-md shadow-amber-500/2"
                          : localNote
                          ? "bg-amber-500/5 border-amber-500/20 text-amber-400 hover:text-amber-300"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                      title="지혜 노트 작성 및 편집하기"
                    >
                      <FileText className={`w-3.5 h-3.5 ${localNote ? "text-amber-400" : ""}`} />
                      <span>{localNote ? "지혜 노트 보기" : "노트 작성"}</span>
                    </button>

                    {/* Toggle Bookmark inside Modal */}
                    <button
                      onClick={() => handleToggleBookmark(activeVideo.id)}
                      className={`px-4 py-2 text-xs font-medium rounded-xl border flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        bookmarkedIds.includes(activeVideo.id)
                          ? "bg-rose-500/10 border-rose-500/40 text-rose-300"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${bookmarkedIds.includes(activeVideo.id) ? "fill-rose-500 text-rose-500" : ""}`} />
                      <span>{bookmarkedIds.includes(activeVideo.id) ? "찜한 동영상" : "찜하기"}</span>
                    </button>

                    {/* Share Link Button */}
                    <button
                      onClick={() => handleCopyLink(activeVideo.url)}
                      className={`px-4 py-2 text-xs font-medium rounded-xl border flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        copied
                          ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 animate-pulse"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                      }`}
                      title="비디오 링크 복사하기"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>복사 완료!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span>공유하기</span>
                        </>
                      )}
                    </button>

                    {/* Open in YouTube */}
                    <a
                      href={activeVideo.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer"
                      className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all duration-300 shadow-lg shadow-indigo-500/10"
                    >
                      <span>YouTube에서 보기</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Folder Classification Section (Only if bookmarked) */}
                {bookmarkedIds.includes(activeVideo.id) && (
                  <div className="pt-5 border-t border-slate-900/80 animate-in fade-in duration-300">
                    <h3 className="text-xs font-semibold tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5 font-display uppercase">
                      <Folder className="w-3.5 h-3.5 text-indigo-400" />
                      나의 지혜 폴더 분류
                    </h3>
                    <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col gap-3">
                      <p className="text-[11px] text-slate-500 leading-normal">
                        이 영상을 지정한 폴더로 분류하여 정돈해두세요. (사이드바에서 새 폴더를 언제든지 추가하거나 해제할 수 있습니다)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {folders.map((folder) => {
                          const isAssigned = videoFolderMap[activeVideo.id] === folder.id;
                          return (
                            <button
                              key={folder.id}
                              onClick={() => handleAssignVideoToFolder(activeVideo.id, isAssigned ? null : folder.id)}
                              className={`px-3 py-1.5 text-xs rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                                isAssigned
                                  ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-300 font-semibold shadow-md shadow-indigo-500/2 animate-pulse"
                                  : "bg-slate-900 border-slate-850 text-slate-500 hover:text-slate-300 hover:border-slate-850"
                              }`}
                            >
                              <Folder className={`w-3 h-3 ${isAssigned ? "fill-indigo-400/20 text-indigo-400" : ""}`} />
                              <span>{folder.name}</span>
                              {isAssigned && (
                                <Check className="w-3 h-3 text-indigo-400 stroke-[3px]" />
                              )}
                            </button>
                          );
                        })}
                        {folders.length === 0 && (
                          <div className="text-[11px] text-slate-600 italic py-1">
                            등록된 폴더가 없습니다. 사이드바에서 새 폴더를 먼저 추가해주세요.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Personal Notes Section */}
                {showNoteEditor && (
                  <div className="pt-5 border-t border-slate-900/80 animate-in fade-in slide-in-from-top-2 duration-300">
                    <h3 className="text-xs font-semibold tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5 font-display uppercase">
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      나의 지혜 노트 (개인 메모)
                    </h3>
                    <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col gap-3">
                      <textarea
                        placeholder="이 영상에서 얻은 지혜와 깨달음을 자유롭게 적어보세요. 입력한 내용은 기기에 자동으로 저장됩니다."
                        value={localNote}
                        onChange={(e) => handleChangeNote(e.target.value)}
                        className="w-full h-24 bg-slate-950 border border-slate-850 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all resize-none leading-relaxed"
                      />
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-500 font-mono">
                          {localNote.length}자 작성됨
                        </span>
                        {localNote && (
                          <button
                            onClick={() => handleChangeNote("")}
                            className="text-rose-400 hover:text-rose-300 font-medium transition-all cursor-pointer"
                          >
                            메모 삭제
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Similar Wisdom Recommendations Section */}
                {similarVideos.length > 0 && (
                  <div className="pt-5 border-t border-slate-900/80">
                    <h3 className="text-xs font-semibold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 font-display uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      비슷한 지혜 추천
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {similarVideos.map((video) => (
                        <button
                          key={`similar-${video.id}`}
                          onClick={() => handleSelectVideo(video)}
                          className="flex flex-col text-left bg-slate-900/30 hover:bg-slate-900/80 border border-slate-850 hover:border-indigo-500/30 rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer"
                        >
                          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-slate-900/50">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 rounded text-[9px] font-mono text-slate-400">
                              {video.channel}
                            </div>
                          </div>
                          <div className="p-2.5 min-w-0 flex-1 flex flex-col justify-between gap-1.5">
                            <h4 className="text-[11px] font-medium text-slate-300 group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                              {video.title}
                            </h4>
                            <span className="text-[9px] text-slate-500 font-mono">
                              조회수 {video.views >= 10000 ? `${(video.views / 10000).toFixed(0)}만회` : `${video.views.toLocaleString()}회`}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

