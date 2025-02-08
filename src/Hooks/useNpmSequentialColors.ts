export interface NpmSequentialColors {
  fontColor: string
  backgroundColor: string
  borderColor: string
}

export default function useNpmSequentialColors(): NpmSequentialColors[] {
  return [
    {
      fontColor: '#9e7700',
      backgroundColor: '#ffcd3a33',
      borderColor: '#FFCD3A',
    },
    {
      fontColor: '#cb3837',
      backgroundColor: '#cb383733',
      borderColor: '#cb3837',
    },
    {
      fontColor: '#782175',
      backgroundColor: '#c836c333',
      borderColor: '#C836C3',
    },
    {
      fontColor: '#29008a',
      backgroundColor: '#8956ff33',
      borderColor: '#8956ff',
    },
    {
      fontColor: '#146c91',
      backgroundColor: '#29abe233',
      borderColor: '#29abe2',
    },
  ]
}
