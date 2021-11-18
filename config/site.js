module.exports = {
  title: `Juliet Rubin`,
  description: `I'm a Software Engineer with a passion for creating elegant websites and mobile apps. After many years working at tech companies, I am now available for hire as a freelance developer.`,
  author: `@julietrubin`,
  siteUrl: `https://www.julietrubin.com`,
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: CREATED_AT, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 20,
  },
}
