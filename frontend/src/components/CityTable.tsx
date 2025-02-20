import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronRight } from "lucide-react";
import { City } from "../services/cities.service";
import { useState } from "react";

interface CityTableProps {
    data: { cities: City[], total: number } | undefined;
    isLoading: boolean;
}

export default function CityTable({ data, isLoading }: CityTableProps) {
    const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

    const toggleRow = (cityName: string) => {
        setExpandedRows(prev => {
            const newSet = new Set(prev);
            if (newSet.has(cityName)) {
                newSet.delete(cityName);
            } else {
                newSet.add(cityName);
            }
            return newSet;
        });
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Continent</TableHead>
                    <TableHead>Population</TableHead>
                    <TableHead>Founded</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {isLoading ? (
                    <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                            Loading cities...
                        </TableCell>
                    </TableRow>
                ) : data?.cities.map((city: City) => (
                    <>
                        <TableRow
                            key={city.name}
                            className="transition-transform-opacity hover:bg-gray-50 cursor-pointer"
                            onClick={() => toggleRow(city.name)}
                        >
                            <TableCell>
                                {expandedRows.has(city.name) ? (
                                    <ChevronDown className="h-4 w-4" />
                                ) : (
                                    <ChevronRight className="h-4 w-4" />
                                )}
                            </TableCell>
                            <TableCell className="font-medium">{city.name}</TableCell>
                            <TableCell>{city.country}</TableCell>
                            <TableCell>{city.continent}</TableCell>
                            <TableCell>{parseInt(city.population).toLocaleString()}</TableCell>
                            <TableCell>{city.founded}</TableCell>
                        </TableRow>
                        {expandedRows.has(city.name) && (
                            <TableRow>
                                <TableCell colSpan={6} className="bg-gray-50/50">
                                    <div className="p-4">
                                        <h4 className="font-medium mb-2">Landmarks</h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {city.landmarks.map((landmark, index) => (
                                                <li key={index} className="text-gray-600">{landmark}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </>
                ))}
            </TableBody>
        </Table>
    );
}