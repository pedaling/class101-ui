// @flow
import React from 'react';
import { KlassCard } from 'class101-ui';

type Props = {
  /** 클래스 상태 */
  state: 'preview' | 'funding' | 'sale';

  /** 카드 타이틀 */
  title: string,

  /** 카드 이미지 */
  coverImage: Node | string,

  /** 크레이터 이름 */
  creatorName?: string,

  /** 클래스 오픈 예정일 (예: 9월 18일) */
  openDate?: string;

  /** 할인 율(%) */
  sale?: number,
  
  /** 카드 srcSet */
  coverImageSrcSet?: string,

  /** 대체 텍스트 */
  coverImageAlt?: string,

  /** 카드 이미지 비율 */
  coverImageRatio?: '16*9' | '4*3' | '1*1',

  /** Link(React Router Dom)에 쓸 URL */
  to?: string,

  /**	A Tag에 쓸 URL */
  href?: string,

  wishlisted?: boolean,

  reservationed?: number,

  reservationCount?: number,

  loading?: boolean,

  onReservationClick?: () => void,

  onWishlistClick: () => void,
};

const Component = ({
  state = 'sale',
  title,
  coverImage,
  creatorName,
  openDate,
  sale,
  coverImageRatio = "16*9",
  children,
  loading,
  reservationed,
  reservationCount=0,
  onReservationClick,
  wishlisted,
  onWishlistClick,
  ...restProps
}: Props) => (
  <KlassCard 
    title={ title }
    coverImage={ coverImage }
    creatorName={ creatorName }
    state={ state }
    openDate={ openDate }
    sale={ sale }
    coverImageRatio={ coverImageRatio }
    loading={ loading }
    reservationed={ reservationed }
    reservationCount={ reservationCount }
    onReservationClick={ onReservationClick }
    wishlisted={ wishlisted }
    onWishlistClick={ onWishlistClick }
    { ...restProps }
  >
    { children }
  </KlassCard >
);

export default Component;
