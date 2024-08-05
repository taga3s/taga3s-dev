import { CosenseIcon, GitHubIcon, QiitaIcon } from "../icons";
import { Layout, Header } from "./common.css";
import { Cosense, GitHub, LinkCard_Container, Qiita } from "./ProfileLinks.css";

const links = [
  {
    title: "GitHub",
    url: "https://github.com/taga3s",
    style: GitHub,
    icon: <GitHubIcon />,
  },
  {
    title: "Cosense",
    url: "https://scrapbox.io/t33s-dev/",
    style: Cosense,
    icon: <CosenseIcon />,
  },
  {
    title: "Qiita",
    url: "https://qiita.com/t33s_dev",
    style: Qiita,
    icon: <QiitaIcon />,
  },
];

const ProfileLinks = () => {
  return (
    <section class={Layout}>
      <h2 class={Header}>Links</h2>
      <div class={LinkCard_Container}>
        {links.map((link) => (
          <a href={link.url} class={link.style} key={link.title}>
            <div>{link.icon}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { ProfileLinks };