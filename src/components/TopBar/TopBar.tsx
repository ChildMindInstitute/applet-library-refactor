import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

import { Svg } from 'components/Svg';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { page } from 'resources';
import { StyledFlexTopCenter } from 'styles/styledComponents/Flex';

import { StyledTopBar } from './TopBar.styles';

export const TopBar = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <StyledTopBar>
        <StyledFlexTopCenter>
          <Breadcrumbs />
        </StyledFlexTopCenter>
        <Button size="small" onClick={() => navigate(page.basket)}>
          <Svg id="basket" width={24} height={24} />
        </Button>
      </StyledTopBar>
    </>
  );
};
