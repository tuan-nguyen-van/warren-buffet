import React, { useState, useEffect } from 'react';
import FullBorderTableCell from '../components/FullBorderTableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import applyAxios from '../CustomHooks/applyAxios';

const StockList = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [stocks, setStocks] = useState<App.Stocks.StockData[]>();
  const [deleteStock, setDeleteStock] = useState<{
    id: number;
    symbol: string;
    index: number;
  }>();
  let stockNo = 1;

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleAgree = () => {
    applyAxios(
      { method: 'delete', url: '/stocks/' + deleteStock?.id },
      function () {
        delete stocks![deleteStock!.index];
        setOpenModal(false);
      }
    );
  };

  useEffect(() => {
    applyAxios({ method: 'get', url: '/stocks' }, function ({ data }) {
      setStocks(data as App.Stocks.StockData[]);
    });
  }, []);

  const handleFollowed = (
    id: number,
    index: number,
    action: 'Followed' | 'Unfollowed'
  ) => {
    applyAxios(
      {
        method: 'patch',
        url: '/stocks/status/' + id,
        data: {
          status: action,
        },
      },
      function () {
        stocks![index].status = action;
        setStocks([...stocks!]);
      }
    );
  };

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <TableContainer sx={{ mt: 5, mb: 5 }}>
        <Table stickyHeader sx={{ borderCollapse: 'collapse' }}>
          <TableHead>
            <TableRow>
              <FullBorderTableCell align="center">No</FullBorderTableCell>
              <FullBorderTableCell align="center">Action</FullBorderTableCell>
              <FullBorderTableCell align="center">Symbol</FullBorderTableCell>
              <FullBorderTableCell align="center">Name</FullBorderTableCell>
              <FullBorderTableCell align="center">Status</FullBorderTableCell>
              <FullBorderTableCell align="center">
                Market Price
              </FullBorderTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks?.map((stock, index) => (
              <TableRow key={stock.id}>
                <FullBorderTableCell>{stockNo++}</FullBorderTableCell>
                <FullBorderTableCell>
                  <Link
                    to={`/edit-stock/${stock.id}`}
                    style={{ color: 'inherit' }}
                  >
                    <EditIcon sx={{ cursor: 'pointer' }} />
                  </Link>
                  <DeleteIcon
                    onClick={() => {
                      setOpenModal(true);
                      setDeleteStock({
                        symbol: stock.ticker_symbol,
                        id: stock.id,
                        index,
                      });
                    }}
                    sx={{ cursor: 'pointer' }}
                  />
                  {stock.status === 'Unfinished' ? (
                    <UnpublishedIcon sx={{ cursor: 'pointer' }} />
                  ) : stock.status === 'Followed' ? (
                    <BookmarkRemoveIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleFollowed(stock.id, index, 'Unfollowed');
                      }}
                    />
                  ) : (
                    <BookmarkAddIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleFollowed(stock.id, index, 'Followed');
                      }}
                    />
                  )}
                </FullBorderTableCell>
                <FullBorderTableCell>{stock.ticker_symbol}</FullBorderTableCell>
                <FullBorderTableCell>{stock.company_name}</FullBorderTableCell>
                <FullBorderTableCell>{stock.status}</FullBorderTableCell>
                <FullBorderTableCell>
                  {stock.current_market_price}
                </FullBorderTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        onClose={handleModalClose}
      >
        <DialogTitle>
          Are you sure want to delete this stock: {deleteStock?.symbol}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleAgree}>Agree</Button>
          <Button onClick={handleModalClose}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StockList;
