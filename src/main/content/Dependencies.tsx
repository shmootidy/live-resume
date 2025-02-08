import {
  H3,
  RedLinkItem,
  RedLinkList,
} from '../../SharedComponents/StyledComponents'

export default function Dependencies() {
  const dependencies = ['hi']
  const devDependencies = ['bye']
  return (
    <>
      <H3>{`Dependencies (${dependencies.length})`}</H3>
      <RedLinkList>
        {dependencies.map((d, i) => {
          return <RedLinkItem key={i}>{d}</RedLinkItem>
        })}
      </RedLinkList>
      <H3>{`Dev Dependencies (${devDependencies.length})`}</H3>
      <RedLinkList>
        {devDependencies.map((d, i) => {
          return <RedLinkItem key={i}>{d}</RedLinkItem>
        })}
      </RedLinkList>
    </>
  )
}
