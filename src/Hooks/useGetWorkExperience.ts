export interface Job {
  title: string
  employer: string
  duration: string
  location?: string
  techStack: string[]
  accomplishments: Accomplishment[]
}

export interface Accomplishment {
  functionName: string
  steps: string[]
  returnValue: string
}

export default function useGetWorkExperience() {
  const jobs: Job[] = [
    {
      title: 'Software Developer',
      employer: 'Clir Renewables',
      duration: 'Jun 21 – now',
      location: 'Vancouver, BC',
      techStack: [
        'TypeScript',
        'Python',
        'ReactJS',
        'CSS',
        'Liquibase',
        'SQL',
        'ReactQuery',
        'AWS',
        'Jest',
        'Cypress',
        'YAML',
      ],
      accomplishments: [
        {
          functionName: 'buildCustomFeatures',
          steps: [
            'UI design consultation',
            'work closely with Production Manager',
            'API development (AgGrid, QuillJS, Highcharts, ReactPdfRenderer)',
            'relational DB design (MariaDB)',
            'thorough unit & E2E testing (Jest, Cypress)',
            'meaningful code reviews',
          ],
          returnValue: 'customEndToEndFeature',
        },
        {
          functionName: 'squashBugs',
          steps: [
            'evaluate urgency',
            'explore root cause and estimate time it will take to remedy',
            'if quick to fix: fix it, write test to ensure it never happens again',
            'if needs time and is urgent: implement quicker fix; leave thorough documentation and create follow-up ticket',
            'discuss at next stand up',
          ],
          returnValue: 'betterCodeMoreTeamKnowledge',
        },
        {
          functionName: 'scrumLeader',
          steps: [
            'greet team: chit chat and settle in',
            'review PRs and ticket - ask questions, leave space for group discussion',
            'check in on what everyone is doing today',
            'ask for developments from Product Manager',
          ],
          returnValue: 'cohesiveTeamWithDirection',
        },
        {
          functionName: 'cssWizardOfTheTeam',
          steps: [
            'reliably translate designs into dynamic front end interfaces',
            'utilize and override 3rd-party APIs as needed',
            'mentor colleagues on solving complex style bugs',
          ],
          returnValue: 'beautifulInterfaces',
        },
        {
          functionName: 'leadSpikes',
          steps: [
            'evaluate scope of spiked challenge; discuss with PM and dev team for clarity as needed',
            'explore solutions on Stack Overflow, in API documentation and through trial-and-error',
            'write documentation with code samples, links, and screen recordings; outline possible solutions and (un)promising leads',
            'lead discussion with team to determine next steps',
          ],
          returnValue: 'streamlinedStrategiesAndEnhancedTeamKnowledge',
        },
      ],
    },
    {
      title: 'Web Developer & UI Consultant',
      employer: 'Self-employed',
      duration: 'Mar 20 – Jun 21',
      location: 'Galiano Isl., BC',
      techStack: ['CSS', 'Wordpress', 'PHP', 'Figma', 'wireframe.cc'],
      accomplishments: [
        {
          functionName: 'uiAndBrandConsultant',
          steps: [
            'help client refine, define and focus their branding',
            'determine purpose of website (eg. increase sales, enhance web presence, showcase community talent)',
            'develop outlines and strategies to achieving client goals',
          ],
          returnValue: 'empoweredClient',
        },
        {
          functionName: 'buildCustomHooksAndStyles',
          steps: [
            'write custom Wordpress hook to meet client needs (eg. track sales, display floating add-to-cart button)',
            'adapt Wordpress themes for more cohesive branding',
            'implement Google Analytics',
            'consult clients on appropriate plug-ins and assist in installation',
          ],
          returnValue: 'goodSiteHappyClient',
        },
      ],
    },
    {
      title: 'Junior Software Developer',
      employer: 'Manacan Enterprises',
      duration: 'Apr 19 – Mar 20',
      techStack: [
        'JavaScript',
        'PHP',
        'CSS',
        'React',
        'GoogleAnalytics',
        'Wordpress',
      ],
      accomplishments: [
        {
          functionName: 'restyleEcommerceSites',
          steps: [
            'draft designs and wireframes',
            'resolve cross-browser incompatibilities',
            'build new custom features (eg. navigation bars, category sidebars, footers, product pages, modals)',
            'improve UX of in-site promotions to optimize lead generation',
            'refactor legacy CSS into organized SASS files',
          ],
          returnValue: 'betterLookingBetterPerformingECommerceSites',
        },
        {
          functionName: 'improveInterteamOperations',
          steps: [
            'liaise with 3rd party consultants',
            'develop better workflows between web teams and other departments',
            'establish and analyze Google Analytics',
          ],
          returnValue: 'reduceFrustrationAndSaveTimeAndMoney',
        },
        {
          functionName: 'reviseCustomerFacingCopy',
          steps: [
            'identify problematic, misleading and tonally harsh customer facing copy',
            'write better copy',
            'mentor copywriters on best copywriting practices',
            'reduce customer frustration and confusion; reduce incoming calls',
          ],
          returnValue: 'happierCustomersHappierCustomerServiceTeam',
        },
        {
          functionName: 'categorizeExistingInventory',
          steps: [
            'conceptualize architecture of new categories',
            'create algorithm to programmatically assign products to categories by scraping descriptions for key words',
            'write documentation for merchandising staff to ensure proper category assignment on new products',
          ],
          returnValue: 'hundredsOfHoursOfLabourOutsourcedToAMachine',
        },
      ],
    },
  ]

  return jobs
}
