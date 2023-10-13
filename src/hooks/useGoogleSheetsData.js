import { useQuery } from '@tanstack/react-query';
import { parseCSV } from '../utils/parseCsv';

export const useGoogleSheetsCsvData = (url) => {
  const { data } = useQuery(
    {
      queryKey: ["diagex-prices"],
      queryFn: () =>
        fetch(url)
          .then((res) => {
            if (res.ok) {
              return res.text();
            }
          })
          .then((csvData) => parseCSV(csvData)),
    }
  );


  return data;
}
