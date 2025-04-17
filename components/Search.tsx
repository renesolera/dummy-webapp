import { FC, useState, useEffect, useRef } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useRouter } from 'next/router';

interface SearchResult {
  type: 'site' | 'system' | 'module';
  name: string;
  path: string;
}

const mockSearchData: SearchResult[] = [
  { type: 'site', name: 'Demo Site', path: '/sites/demo-site' },
  { type: 'site', name: 'Exowatt Ranch', path: '/sites/exowatt-ranch' },
  { type: 'system', name: 'System 01', path: '/sites/demo-site/systems/system-01' },
  { type: 'module', name: 'Module 01', path: '/sites/demo-site/systems/system-01/modules/module-01' },
  { type: 'module', name: 'SN001', path: '/sites/exowatt-ranch/systems/system/modules/sn001' },
  { type: 'module', name: 'SN002', path: '/sites/exowatt-ranch/systems/system/modules/sn002' },
];

const Search: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Handle clicks outside of search component
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Filter search results based on query
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = mockSearchData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filtered);
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const handleResultClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setSearchQuery('');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'site':
        return '🏢';
      case 'system':
        return '⚡';
      case 'module':
        return '📦';
      default:
        return '•';
    }
  };

  return (
    <div className="relative w-[360px]" ref={searchRef}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search sites, systems, or modules..."
          className="w-full pl-10 pr-4 py-2 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-[300px] overflow-y-auto z-50">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result.path)}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3"
            >
              <span className="text-lg">{getTypeIcon(result.type)}</span>
              <div>
                <div className="text-sm font-medium">{result.name}</div>
                <div className="text-xs text-gray-500">{result.type.charAt(0).toUpperCase() + result.type.slice(1)}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search; 