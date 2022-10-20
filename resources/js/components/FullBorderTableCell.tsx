import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const FullBorderTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.root}`]: {
    border: '1px solid rgba(224, 224, 224, 1)',
  },
}));

export default FullBorderTableCell;
