import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiSpringboot,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
  SiLaragon,
  SiLaravel,
} from "react-icons/si";

const icons = [
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiLaragon,
  SiLaravel,
  SiGit,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiSpringboot,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql
];

const SkillsCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-scroll gap-24">
        {[...icons, ...icons].map((Icon, index) => (
          <div
            key={index}
            className="
              flex items-center justify-center
              min-w-[100px] h-[100px]
              rounded-2xl
              bg-white/5
              backdrop-blur-sm
              border border-white/10
              shadow-[0_0_20px_rgba(251,191,36,0.08)]
            "
          >
            <Icon
              size={48}
              className="
                text-white
                drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;