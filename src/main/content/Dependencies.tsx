import useDependencies from '../../Hooks/useDependencies'
import {
  H3,
  RedLinkItem,
  RedLinkList,
} from '../../SharedComponents/StyledComponents'

export default function Dependencies(props: { isDependents?: boolean }) {
  const { dependencies, devDependencies, dependents } = useDependencies()

  return (
    <>
      {props.isDependents ? (
        <>
          <H3>{`Dependents (${dependents.length})`}</H3>
          <RedLinkList>
            {dependents.map((d, i) => {
              return <RedLinkItem key={i}>{d}</RedLinkItem>
            })}
          </RedLinkList>
        </>
      ) : (
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
      )}
    </>
  )
}
