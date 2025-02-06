export default function useGetSkills() {
  const frameworks = [
    {
      label: 'react',
      link: 'https://www.npmjs.com/package/react',
    },
    {
      label: 'remix',
      link: 'https://remix.run/',
    },
    {
      label: 'rails',
      link: 'https://rubyonrails.org/', // update this link to the recipe app once it's up
    },
  ]

  const libraries = [
    {
      label: 'marshmallow',
      link: '',
    },
    {
      label: 'react-query',
      link: '',
    },
    {
      label: 'highcharts',
      link: 'https://www.highcharts.com/demo/', // update to my demo when/if i get the license
    },
    {
      label: 'ag-grid',
      link: '',
    },
    {
      label: 'react-query',
      link: '',
    },
  ]

  const testingLibraries = [
    {
      label: 'pytest',
      link: '',
    },
    {
      label: 'cypress',
      link: '',
    },
    {
      label: 'react testing library',
      link: '',
    },
    {
      label: 'vitest',
      link: '',
    },
    {
      label: 'jest',
      link: '',
    },
  ]

  const languages = [
    {
      label: 'typescript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      label: 'python',
      link: 'https://www.python.org/',
    },
    {
      label: 'css',
      link: 'https://css-tricks.com/',
    },
    {
      label: 'javascript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      label: 'ruby',
      link: 'https://rubyapi.org/',
    },
    {
      label: 'sql',
      link: 'https://www.mysql.com/',
    },
    {
      label: 'yml',
      link: '',
    },
  ]

  const databaseManagementSystems = [
    {
      label: 'mysql',
      link: '',
    },
    {
      label: 'mariadb',
      link: '',
    },
    {
      label: 'liquibase',
      link: '',
    },
  ]

  const summarySkills = [
    {
      title: 'Languages',
      list: languages,
    },
    {
      title: 'Frameworks',
      list: frameworks,
    },
    {
      title: 'Libraries',
      list: libraries,
    },
    {
      title: 'Database Management Systems',
      list: databaseManagementSystems,
    },
    {
      title: 'Testing Libraries',
      list: testingLibraries,
    },
  ]

  return summarySkills
}
