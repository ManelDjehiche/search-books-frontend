import React from 'react';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import { useBooksContext } from '../context/booksContext';

const StyledPagination: React.FC = () => {
  const { page, setPage, limit, setLimit, booksList } = useBooksContext();

  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const totalCount = booksList?.numFound || 0;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '44px',
        maxWidth: '396px',
      }}
    >
      <TablePagination
        component="div"
        count={totalCount}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={limit}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50]}
        sx={{
          '& .MuiTablePagination-toolbar': {
            padding: 0,
          },
          '& .MuiTablePagination-selectLabel, & .MuiTablePagination-input': {
            fontSize: '12px',
          },
        }}
      />
    </Box>
  );
};

export default StyledPagination;
