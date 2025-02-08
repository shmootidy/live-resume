import styled from '@emotion/styled'

export const H1 = styled.h1`
  margin: 0;
  border-bottom: 1px solid #ececec;
`

export const H2 = styled.h2`
  margin: 0;
  border-bottom: 1px solid #ececec;
`

export const H3 = styled.h3`
  margin: 0;
  font-size: 20px;
  color: rgb(17, 17, 17);
  padding: 8px 0 16px;
  border-bottom: 1px solid #ececec;
`

export const ColouredBanner = styled.div`
  border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
  border-style: solid;
  border-width: 10px 0 0;
`

export const GreenText = styled.span`
  color: #14865c;
  letter-spacing: 0;
`

export const PinkText = styled.span`
  color: rgb(167, 29, 93);
`
export const PurpleText = styled.span`
  color: rgb(121, 93, 163);
`
export const BlueText = styled.span`
  color: rgb(0, 134, 179);
`

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;

  @media (min-width: 960px) {
    margin-top: 250px;
  }
`

export const RedLinkList = styled.ul`
  padding-left: 0;
  color: #cb3837;
  font-weight: 600;
  font-size: 20px;
`

export const RedLinkItem = styled.li`
  display: inline-block;
  padding: 4px;
  margin-right: 4px;
`
