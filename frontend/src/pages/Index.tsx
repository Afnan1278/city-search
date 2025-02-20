import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBox } from "../components/SearchBox";
import { citiesService, type City, type SearchParams } from "../services/cities.service";
import { useToast } from "@/hooks/use-toast";
import { useDebounce } from "@/hooks/use-debounce";
import CityTable from "../components/CityTable";
import PaginationComponent from "../components/PaginationComponent";

const ITEMS_PER_PAGE = 5;

export default function Index() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    page: 1,
    limit: ITEMS_PER_PAGE,
    query: "",
  });
  const debouncedSearchParams = useDebounce(searchParams, 500);
  const { toast } = useToast();

  const { data, isLoading, error } = useQuery({
    queryKey: ["cities", debouncedSearchParams],
    queryFn: () => citiesService.getCities(debouncedSearchParams),
    staleTime: 5000,
    retry: false,
  });

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch cities. Please try again later.",
      });
    }
  }, [error, toast]);

  const handleSearch = (query: string) => {
    setSearchParams((prev) => ({ ...prev, query, page: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => ({ ...prev, page: newPage }));
  };

  const totalPages = data ? Math.ceil(data.total / ITEMS_PER_PAGE) : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <SearchBox onSearch={handleSearch} query={searchParams.query} />

      <div className="table-container fade-in mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <CityTable data={data} isLoading={isLoading} />

          {data && data.total > ITEMS_PER_PAGE && (
            <div className="py-4 border-t">
              <PaginationComponent
                totalPages={totalPages}
                currentPage={searchParams.page}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}