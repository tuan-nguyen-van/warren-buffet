import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import AssumedOption from './AssumedOption';
import Divider from '@mui/material/Divider';
import EpsToCalculate from './EpsToCalculate';

type Props = {
  stockId: number;
  edit: boolean;
};

const Assumption = ({ stockId, edit }: Props) => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}>
      <Divider>
        <Typography variant="h5">Step 4: Assumption</Typography>
      </Divider>

      <AssumedOption option={1} stockId={stockId} edit={edit} />
      <AssumedOption option={2} stockId={stockId} edit={edit} />
      <EpsToCalculate stockId={stockId} edit={edit} />
    </Box>
  );
};

export default Assumption;
