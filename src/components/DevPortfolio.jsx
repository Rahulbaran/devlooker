import {
  TbLocationFilled,
  TbBrandTwitterFilled,
  TbBuilding,
  TbExternalLink
} from "react-icons/tb";

export default function DevPortfolio({ userInfo }) {
  return (
    <section className="portfolio-section">
      <div className="user-header">
        <div className="avatar">
          <img
            src={userInfo.avatar_url}
            alt={`Avatar of ${userInfo.name}`}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="name-wrapper">
          <h3>{userInfo.name}</h3>
          <span>@{userInfo.login}</span>
        </div>
      </div>

      <div className="user-body">
        <div className="follow-wrapper">
          <div className="followers">
            <span>Followers</span>
            <strong>{userInfo.followers}</strong>
          </div>
          <div className="following">
            <span>Following</span>
            <strong>{userInfo.following}</strong>
          </div>
        </div>
        <div className="repos">
          <span>Total Repositories</span>
          <strong>{userInfo.public_repos}</strong>
        </div>
      </div>

      <div className="user-footer">
        <div className="location">
          <TbLocationFilled />
          <p>{userInfo.location || "Not available"}</p>
        </div>
        <div className="portfolio">
          <TbExternalLink />
          <p>{userInfo.blog || "Not available"}</p>
        </div>
        <div className="twitter">
          <TbBrandTwitterFilled />
          <p>{userInfo.twitter_username || "Not available"}</p>
        </div>
        <div className="company">
          <TbBuilding />
          <p>{userInfo.company || "Not available"}</p>
        </div>
      </div>
    </section>
  );
}
