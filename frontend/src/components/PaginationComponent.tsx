import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

export default function PaginationComponent({
    totalPages,
    currentPage,
    onPageChange,
}: PaginationComponentProps) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {currentPage > 1 && (
                        <PaginationPrevious
                            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                        />
                    )}
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i + 1}>
                        <PaginationLink
                            onClick={() => onPageChange(i + 1)}
                            isActive={currentPage === i + 1}
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    {currentPage < totalPages && (
                        <PaginationNext
                            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                        />
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}