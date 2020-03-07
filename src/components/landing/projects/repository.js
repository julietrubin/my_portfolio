import React from "react"
import Octicon, { Star } from "@githubprimer/octicons-react"
import GitHubButton from "react-github-btn"
import mystyles from './repository.module.scss'

const RepositoryHeader = ({ repo }) => {
  return (
    <div
      className={mystyles.header}
    >
      <h3>
        <a
          href={`https://github.com${repo.resourcePath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </h3>
      <GitHubButton
        href={`https://github.com${repo.resourcePath}`}
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star repo on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  )
}

const FooterItem = ({ children }) => (
  <span className={mystyles.footer_item}>{children}</span>
)

const RepositoryFooter = ({ repo }) => {
  const language = repo.languages.edges[0].node
  const timeAgo = new Date(repo.updatedA) - new Date()
  const daysAgo = Math.floor(timeAgo / (1000 * 60 * 60 * 24)) // ms to days
  let updatedAt = repo.updatedAt.slice(0, 10)

  if (daysAgo > -21) {
    updatedAt = new Intl.RelativeTimeFormat("en", { style: "narrow" }).format(
      daysAgo,
      "day"
    )
  }
  return (
    <div className={mystyles.footer}>
      <FooterItem>
        <span
          className={mystyles.language_icon}
          style={{
            backgroundColor: language.color,
          }}
        />{" "}
        {language.name}
      </FooterItem>
      <FooterItem>
        <Octicon icon={Star} />
        {repo.stargazers.totalCount}{" "}
      </FooterItem>
      <FooterItem>Updated: {updatedAt}</FooterItem>
      {repo.homepageUrl && <FooterItem />}{" "}
    </div>
  )
}

const RepositoryDescription = ({ repo }) => (
  <div className={mystyles.description}>
    <p>
      {repo.description}

      {repo.homepageUrl && (
        <>
          {" -"} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </p>
  </div>
)

const Repository = ({ repo }) => {
  return (
    <div
      className={mystyles.repository}
    >
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </div>
  )
}

export default Repository
