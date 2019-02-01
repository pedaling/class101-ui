import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Card from '../Card';
import { gray600, gray800, orange600, red000, red600 } from '../Colors';
import { caption1 } from '../TextStyles';

interface Props {
  state: 'preview' | 'funding' | 'sale';
  title: string;
  coverImage: string | React.ReactNode;
  creatorName?: string;
  openDate?: string;
  sale?: number;
  wishlisted?: boolean;
  reservationed?: boolean;
  reservationCount?: number;
  loading?: boolean;
  coverImageRatio?: '1*1' | '4*3' | '16*9';
  onReservationClick?: () => void;
  onWishlistClick: () => void;
}

const KlassCard = styled(Card)``;

const CreatorName = styled.div`
  ${caption1};
  color: ${gray800};
  font-weight: bold;
`;

const SubInfo = styled.div`
  ${caption1};
  color: ${gray600};
`;

const OpenState = styled.span`
  display: inline-block;
`;

const Dot = styled.span`
  display: inline-block;
  width: 11px;
  text-align: center;
`;

const Sale = styled.span`
  ${caption1};
  color: ${gray800};
  font-weight: bold;
  display: inline-block;
  color: ${orange600};
`;

const WishlistButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ReservationButton = styled(Button).attrs({ size: 'sm' })<{ reservationed?: boolean }>`
  ${caption1};
  color: ${gray600};
  width: 100%;
  margin-top: 8px;
  color: ${props => (props.reservationed ? 'white' : red600)};
  background-color: ${props => (props.reservationed ? red600 : red000)};
`;

const ReservationIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 2px;
`;

const LINE_HEART_D =
  'M17.586 15.086c2.07-2.07 2.914-3.572 2.914-5.586A3.5 3.5 0 0 0 17 6c-1.074 0-1.92.392-2.829 1.19a14.88 14.88 0 0 0-.757.724L12 9.328l-1.414-1.414a14.88 14.88 0 0 0-.757-.724C8.919 6.392 8.074 6 7 6a3.5 3.5 0 0 0-3.5 3.5c0 2.014.844 3.516 2.914 5.586 1.038 1.037 2.91 2.277 5.586 3.67 2.677-1.393 4.548-2.633 5.586-3.67zM5 16.5c-1.911-1.911-3.5-3.962-3.5-7A5.5 5.5 0 0 1 7 4c2.5 0 4 1.5 5 2.5 1-1 2.5-2.5 5-2.5a5.5 5.5 0 0 1 5.5 5.5c0 3.038-1.589 5.089-3.5 7-1.333 1.333-3.667 2.833-7 4.5-3.333-1.667-5.667-3.167-7-4.5z';
const FILL_HEART_D =
  'M5 16.5c-1.911-1.911-3.5-3.962-3.5-7A5.5 5.5 0 0 1 7 4c2.5 0 4 1.5 5 2.5 1-1 2.5-2.5 5-2.5a5.5 5.5 0 0 1 5.5 5.5c0 3.038-1.589 5.089-3.5 7-1.333 1.333-3.667 2.833-7 4.5-3.333-1.667-5.667-3.167-7-4.5z';

export default ({
  creatorName,
  state = 'sale',
  openDate,
  sale,
  loading,
  reservationed,
  reservationCount = 0,
  onReservationClick,
  wishlisted,
  onWishlistClick,
  coverImageRatio = '16*9',
  ...restProps
}: Props) => {
  const creatorNameElement = <CreatorName>by {creatorName}</CreatorName>;
  if (state === 'sale' || state === 'funding') {
    const subInforElement = (
      <SubInfo>
        <OpenState>{state === 'sale' ? '바로 수강 가능' : `${openDate} 오픈`}</OpenState>
        {sale && (
          <>
            <Dot>・</Dot>
            <Sale>{sale}% 할인</Sale>
          </>
        )}
      </SubInfo>
    );
    return (
      <KlassCard
        extraTop={creatorNameElement}
        extraBottom={subInforElement}
        coverImageRatio={coverImageRatio}
        {...restProps}
      >
        <WishlistButton onClick={onWishlistClick} className="sale-wish-icon">
          <svg width={24} height={24} viewBox="0 0 24 24">
            <path
              fill={wishlisted ? red600 : 'white'}
              fillRule="evenodd"
              d={wishlisted ? FILL_HEART_D : LINE_HEART_D}
            />
          </svg>
        </WishlistButton>
      </KlassCard>
    );
  }
  if (state === 'preview') {
    return (
      <KlassCard extraTop={creatorNameElement} coverImageRatio={coverImageRatio} {...restProps}>
        <ReservationButton reservationed={reservationed} loading={loading} onClick={onReservationClick}>
          <ReservationIcon>
            <svg width={16} height={16} viewBox="0 0 24 24">
              <path
                fill={reservationed ? 'white' : red600}
                fillRule="evenodd"
                d={reservationed ? FILL_HEART_D : LINE_HEART_D}
              />
            </svg>
          </ReservationIcon>
          {reservationCount}명
        </ReservationButton>
      </KlassCard>
    );
  }
  return <KlassCard coverImageRatio={coverImageRatio} {...restProps} />;
};
